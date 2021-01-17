# personal-website
  This repository contains the source code of my [personal website](https://www.yunjaeoh.com)



##  project structure
  The project consists of two containerized applications: [frontend](insert link), [backend](insert link)

### run the project locally 


#### with minikube (recommended)

Install minikube and helm with homebrew

  `brew install minikube`

  `brew install helm`

Start minikube cluster

  `minikube start`

Enable [nginx-ingress](https://kubernetes.github.io/ingress-nginx/) addon

  `minikube addons enable ingress`

Create the required k8s resources in the cluster
  - namespace
  - secrets: gcr-json-key, contentful

Check your minikube ip

  `minikube ip`

  Make sure the minikube ip address is in configmap as value for `NEXT_PUBLIC_MINIKUBE_IP`


Install helm chart

  `helm upgrade --install personal-website ./chart --values ./chart/values-local.yaml`

Visit your minikube ip on your browser


#### with docker-compose

Before you run applications with docker-compose, make sure all environment variables are in place at each application

Clone this repository

  `git clone {this repo}`

Build docker images

  `docker-compose build`

Run applications

  `docker-compose up`

Check the website on your browser

  `localhost:3000`

