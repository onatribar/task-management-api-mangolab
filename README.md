# Task Management API

Case assignment for mangolabs.ai.

## Run locally
```bash
npm install
npm start
```
Server runs on http://localhost:3000.

## Run unit tests
```
npm test
```

## Run with Docker
```
docker build -t task-api .
docker run -p 3000:3000 task-api
```

## Endpoints

### Create task
```
curl -X POST http://localhost:3000/tasks \
  -H "Content-Type: application/json" \
  -d '{"title":"My task","completed":true}'
```
Parameter `completed` defaults to false if not provided.

### Get tasks
```
curl http://localhost:3000/tasks
```