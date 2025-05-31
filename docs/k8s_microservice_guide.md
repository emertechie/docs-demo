# Deploying an existing microservice on Kubernetes

This guide walks you through how to deploy a existing microservice to a Kubernetes cluster.

## Assumptions

This guide assumes you're somewhat familiar with Docker, Git, and general backend development workflows.

This guide assumes you have an existing Python API microservice to be deployed, which requires a `DB_URL` environment parameter and has a `Dockerfile` in the root directory that builds a Docker container for the API.

## Prerequisites

- Docker installed and running
- Access to the private Docker container registry (see Internal DevOps Doc)
- The Kubernetes `kubectl` tool installed and configured to point to the correct cluster
- A Kubernetes namespace already created for your team—for example, `team-abc`

## Step 1 - Build the Docker image

In the root directory of your Python project, build the Docker image:

```
docker build -t my-registry.local/team-abc/myservice:latest .
```

Make sure you’re authenticated with the Docker container registry by running:

```
docker login
```

Then push the Docker image to the Docker container registry:

```
docker push my-registry.local/team-abc/myservice:latest
```

## Step 2 - Create the deployment

Copy the following deployment manifest into a `deployment.yaml` file. It defines and configures a service called `myservice`.

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

Apply the configuration to the Kubernetes cluster:

```
kubectl apply -f deployment.yaml
```

## Step 3 - Create the service

Copy the following service definition to a `service.yaml` file. It exposes TCP port 80 and maps that to port 8080, used by the API.

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

Apply the service definition in the same way:

```
kubectl apply -f service.yaml
```

## Step 4 - Verify the deployment

Check the Kubernetes pods:

```
kubectl get pods -n team-abc
```

You should see a list of pods in the `RUNNING` state. If not, check the [Troubleshooting](#troubleshooting) section below.

Use port-forwarding to forward port 8080 on your machine to the API service:

```
kubectl port-forward svc/myservice 8080:80 -n team-abc
```

Then make a request to the API. For example, a `/health` endpoint that also checks database connectivity:

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
