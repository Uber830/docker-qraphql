# Docker GraphQL API

This project is a GraphQL API built with NestJS, designed for learning and experimentation with Dockerized Node.js applications. It includes a simple todo management system and a hello-world example.

## Features
- GraphQL API with NestJS
- Todo CRUD operations
- Docker support for easy deployment
- Modular code structure

## Getting Started

### Prerequisites
- Docker
- Node.js (if running locally)

### Setup

#### Using Docker
1. Build the Docker image:
  ```bash
  docker build -t docker-graphql .
  ```
2. Run the container:
  ```bash
  docker run -p 3000:3000 docker-graphql
  ```

### Local HTTPS Practice (Nginx + Self-Signed Cert)

Use this when you want to test SSL locally in a simple way.

1. Generate a self-signed certificate:
  ```bash
  mkdir -p nginx/ssl
  openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
    -keyout nginx/ssl/nginx-selfsigned.key \
    -out nginx/ssl/nginx-selfsigned.crt \
    -subj "/C=US/ST=Local/L=Local/O=Practice/CN=localhost"
  ```

2. Start all services:
  ```bash
  docker compose up -d --build
  ```

3. Test HTTP redirect to HTTPS:
  ```bash
  curl -I http://localhost:8080
  ```
  You should see a 301 redirect to https://localhost:8443.

4. Test HTTPS endpoint:
  ```bash
  curl -k https://localhost:8443/graphql
  ```
  Use `-k` because the certificate is self-signed.

5. Open in browser:
  - https://localhost:8443/graphql
  - Browser warning is expected for self-signed certificates.

#### Local Development
1. Install dependencies:
  ```bash
  npm install
  ```
2. Start the server:
  ```bash
  npm run start
  ```

## Usage

Once running, access the GraphQL playground at [http://localhost:3000/graphql](http://localhost:3000/graphql).

### Example Query
```graphql
query {
  todos {
   id
   title
   status
  }
}
```

## Project Structure

```
src/
  app.module.ts         # Main NestJS module
  main.ts               # Application entry point
  schema.gql            # GraphQL schema
  hello-world/          # Hello world example module
  todo/                 # Todo feature module
   todo.module.ts
   todo.resolver.ts
   todo.service.ts
   dto/                # Data transfer objects
   entity/             # Todo entity definition
   types/              # Custom GraphQL types
test/                   # End-to-end tests
Dockerfile              # Docker configuration
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is for educational purposes.

