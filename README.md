# express-typeorm

A boilerplate project for express and typeorm

## Prerequisites

- docker
- node

## Installation Guide

- Building the docker image and running the container.

```bash
make start-api
# server starts at http://localhost:8080
```

- Stop the container

```bash
make stop-api-soft
```

- Stop the container and remove the dangling containers and images

```bash
make stop-api-hard
```
