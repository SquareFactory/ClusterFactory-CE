#!/bin/sh

. "./scripts/common.sh"

set -e

section "Fetch the config"
k0sctl kubeconfig --config ./k0sctl.yaml >"$KUBECONFIG"
chmod 600 ./kubeconfig

section "Deploy sealed secrets"
cd ./core/sealed-secrets
./install.sh

cd "$WORKDIR"

section "Change CoreDNS prod configuration"
kubectl apply -k ./core/coredns/overlays/prod/

section "Setup cert-manager issuers"
kubectl apply -f ./core/cert-manager/

section "Setup Traefik dashboard and routes"
kubectl apply -k ./core/traefik-dashboard/

section "Deploy Argo CD and setup argo-cd routes"
cd ./core/argo-cd
./install.sh
kubectl apply -k .

cd "$WORKDIR"

section "Wait for all deployments to be Available"
kubectl wait deployments --timeout=3600s --all --all-namespaces --for condition=Available

echo "Credentials for Argo CD are admin $(kubectl get secret -n argocd argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 --decode)"

cat <<EOF
---Step 2 finished---
You can now deploy our stack or deploy your own apps with Argo CD !

Prepare the secrets in the argo/initial/secrets directory!
EOF
