# Personal Website
  This repository contains the source code of my [personal website](https://www.yunjaeoh.com) 
(Update: Site is no longer live cause the GCP managed K8s cluster is too costly)



##  Project Structure
  The project consists of two containerized applications: [frontend](./frontend/README.md), [backend](./backend/README.md)

## Run the Project Locally 

#### With minikube (recommended)

1. Install minikube and helm with homebrew
```
  brew install minikube

  brew install helm
```

2. Start minikube cluster
```
  minikube start
```  

3. Enable [nginx-ingress](https://kubernetes.github.io/ingress-nginx/) addon
```
  minikube addons enable ingress
```

4. Create the required k8s resources in the cluster
```
  - namespace
  - secrets: gcr-json-key, contentful
```

5. Check your minikube ip

Make sure the minikube ip address is in configmap as value for `NEXT_PUBLIC_MINIKUBE_IP`

```
  minikube ip
```
  

6. Install helm chart
```
  helm upgrade --install personal-website ./chart --values ./chart/values-local.yaml
```

7. Visit your minikube ip on your browser


#### With docker-compose

Before you run applications with docker-compose, make sure all environment variables are in place at each application

1. Clone this repository
```
  git clone {this repo}
```

2. Build docker images
```
  docker-compose build
```

3. Run applications
```
  docker-compose up
```

4. Check the website on your browser
```
  localhost:3000
```

