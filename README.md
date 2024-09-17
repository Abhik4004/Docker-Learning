# Learning Docker

Welcome to the **Learning Docker** repository! This project is designed to help you get started with Docker, understand its core concepts, and build your own Dockerized applications.

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Basic Commands](#basic-commands)
- [Building Your First Container](#building-your-first-container)
- [Docker Compose](#docker-compose)
- [Resources](#resources)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Docker is an open-source platform that automates the deployment of applications inside lightweight, portable containers. This repository will guide you through the basics of Docker, from installation to running your first containerized application.

## Prerequisites

Before you begin, ensure you have the following:

- A computer with a supported operating system (Windows, macOS, or Linux)
- Basic knowledge of command-line interface (CLI)
- Internet connection

## Installation

Follow these steps to install Docker on your machine:

### Windows and macOS

1. Download Docker Desktop from the [official Docker website](https://www.docker.com/products/docker-desktop).
2. Follow the installation instructions for your operating system.
3. Verify the installation by running:
   ```bash
   docker --version
   ```

### Linux

1. Update your package database:
   ```bash
   sudo apt-get update
   ```
2. Install Docker:
   ```bash
   sudo apt-get install docker-ce docker-ce-cli containerd.io
   ```
3. Verify the installation:
   ```bash
   docker --version
   ```

## Basic Commands

Here are some basic Docker commands to get you started:

- `docker run hello-world`: Run a simple Docker container.
- `docker ps`: List running containers.
- `docker images`: List downloaded Docker images.
- `docker stop <container_id>`: Stop a running container.

## Building Your First Container

Let's create a simple Docker container:

1. Create a `Dockerfile`:

   ```dockerfile
   FROM node:14
   WORKDIR /app
   COPY package*.json ./
   RUN npm install
   COPY . .
   EXPOSE 3000
   CMD ["node", "index.js"]
   ```

2. Build the Docker image:

   ```bash
   docker build -t my-node-app .
   ```

3. Run the Docker container:
   ```bash
   docker run -p 3000:3000 my-node-app
   ```

## Docker Compose

Docker Compose is a tool for defining and running multi-container Docker applications. Here's a simple example:

1. Create a `docker-compose.yml` file:

   ```yaml
   version: "3"
   services:
     web:
       image: nginx
       ports:
         - "80:80"
     app:
       build: .
       ports:
         - "3000:3000"
   ```

2. Start the services:
   ```bash
   docker-compose up
   ```

## Resources

- [Docker Documentation](https://docs.docker.com/)
- [Docker Hub](https://hub.docker.com/)
- [Docker Tutorials](https://www.docker.com/101-tutorial)

## Contributing

Contributions are welcome! Please read the [contributing guidelines](CONTRIBUTING.md) before submitting a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
