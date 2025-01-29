# Hello World App
This is a simple nodejs project with postgres database.

## Run locally
To run this project use below:
```bash
  npm install
  npm run start
```

## Build image
To build image locally, clone this repo and run below command :
```bash
docker build -t hello-world-app:v1 .
```

## Run container using yml
To run container using docker compose run below command :
```bash
docker compose up -d --build
```
    