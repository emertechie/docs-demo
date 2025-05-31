# Deploying a New Microservice on Kubernetes

This guide walks you through how to deploy a new microservice to a Kubernetes cluster. It assumes you're somewhat familiar with Docker, Git, and general backend dev workflows. The microservice we’ll deploy is a Python-based REST API that connects to a Postgres database.

## Pre-Reqs

- Docker installed and running
- kubectl installed and configured to point to the correct cluster
- Access to the private container registry (see Internal DevOps Doc)
- A Kubernetes namespace already created for your team (e.g. `team-abc`)

## Step 1 - Build the Docker image

Start by building the image locally:

```
docker build -t my-registry.local/team-abc/myservice:latest .
```

Then push it to the registry:

```
docker push my-registry.local/team-abc/myservice:latest
```

Make sure you’re authenticated first (`docker login`).

## Step 2 - Create your deployment

Use the following deployment manifest as a starting point:

```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myservice
  namespace: team-abc
spec:
  replicas: 2
  selector:
    matchLabels:
      app: myservice
  template:
    metadata:
      labels:
        app: myservice
    spec:
      containers:
      - name: myservice
        image: my-registry.local/team-abc/myservice:latest
        ports:
        - containerPort: 8080
        env:
        - name: DB_URL
          valueFrom:
            secretKeyRef:
              name: myservice-secrets
              key: db_url
```

Then apply it:

```
kubectl apply -f deployment.yaml
```

## Step 3 - Create the service

To expose the service within the cluster:

```
apiVersion: v1
kind: Service
metadata:
  name: myservice
  namespace: team-abc
spec:
  selector:
    app: myservice
  ports:
    - protocol: TCP
      port: 80
      targetPort: 8080
  type: ClusterIP
```

Apply it the same way:

```
kubectl apply -f service.yaml
```

## Step 4 - Testing it works

Check the pods:

```
kubectl get pods -n team-abc
```

Use port-forwarding to access the API from your machine:

```
kubectl port-forward svc/myservice 8080:80 -n team-abc
```

Then hit the API:

```
curl http://localhost:8080/health
```

If that returns something like `{ "status": "ok" }`, you're good to go.

## Troubleshooting

- If your pod stays in `CrashLoopBackOff`, check the logs:
  ```
  kubectl logs deploy/myservice -n team-abc
  ```

- If your image won’t pull, check your registry credentials or if the image actually exists in the registry.
- If `kubectl apply` fails, make sure your YAML files don’t have tabs or syntax issues.

## Next Steps

Once your service is up and healthy:
- Set up monitoring (see internal observability docs)
- Add ingress configuration if the service should be externally accessible
- Tag your image and update the deployment with a versioned tag (avoid using `latest` long-term)
