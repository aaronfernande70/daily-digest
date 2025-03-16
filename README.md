# Daily Gist

Daily Gist is a Next.js application designed to showcase daily news and updates. This document explains how to set up and run the application using Docker.



## Running Locally with Node

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Running Locally with Docker

## Prerequisites

Before you begin, ensure you have the following installed:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/) (if needed for multi-container setups)

## Building the Docker Image

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/aaronfernande70/daily-digest.git
   cd daily-gist
   ```

2. Build the Docker image:

   ```bash
   docker build -t daily-gist .
   ```

   This command builds a Docker image with the name `daily-gist` using the `Dockerfile` in the current directory.

## Running the Docker Container

1. Run the Docker container:

   ```bash
   docker run -p 3000:3000 daily-gist
   ```

   This maps port `3000` of the Docker container to port `3000` on your host machine, allowing you to access the app in your browser.

2. Open your web browser and navigate to:
