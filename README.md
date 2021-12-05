# 10132Kubernetes1

- minikube start
- minikube tunnel
- minikube service nginx-2 --url
- minikube ssh
- minikube stop

- minikube addons list
- minikube addons enable ingress
- minikube ip (System32\drivers\etc nginx.info.app)


- kubectl config get-contexts
- kubectl config use-context minikube
- kubectl get pod
- kubectl describe pod nginx

- kubectl port-forward service/nginx-r 8080:80

