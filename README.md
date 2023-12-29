mkdir auth
cd auth
npm init -y
npm install typescript ts-node-dev express @types/express
tsc --init

docker build -t dynamicq/auth .
docker push dynamicq/auth


****
kubectl --namespace default scale statefulset --replicas 0
kubectl delete all --all --namespace default
****


**gcloud**
gcloud container clusters get-credentials ticketing-dev --location us-central1

skaffold dev

kubectl create secret generic jwt-secret --from-literal=JWT_KEY=asdf
kubectl get secrets

