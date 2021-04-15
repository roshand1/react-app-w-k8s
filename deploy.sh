#Create build an image
# in order to get unique tag we can make use of git sha
# sha is a unique identifier of our git commit 
docker build -t roshand1/multi-reactapp:latest - troshand1/multi-reactapp:$SHA -f ./ReactBolerPlateWithWebpackExpress/Dockerfile ./client
docker build -t roshand1/multi-node-auth-service:latest -t roshand1/multi-node-auth-service:$SHA -f ./node-auth-service /Dockerfile ./authentication


#push image to docker hub
docker push roshand1/multi-reactapp:latest
docker push roshand1/multi-node-auth-service:latest


docker push roshand1/multi-reactapp:$SHA
docker push roshand1/multi-node-auth-service:$SHA

# create kubernetes pods/services 
kubectl apply -f k8s

# imperatively set latest image in the deployment
# remember we need to attach tag in the image to be able to pull latest image
kubectl set image deployments/authentication-deployment authentication=roshand1/multi-node-auth:$SHA
kubectl set image deployments/client-deployment client=roshand1/multi-reactapp:$SHA