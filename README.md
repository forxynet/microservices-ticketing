mkdir auth
cd auth
npm init -y
npm install typescript ts-node-dev express @types/express
tsc --init

docker build -t dynamicq/auth .
docker push dynamicq/auth

