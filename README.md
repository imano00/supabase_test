# gpt_test

## Description

This is a Deno RESTful API project built using the Resource Oriented Architecture pattern.

## Requirements

- Deno
- PostgreSQL

## Installation

1. Clone the repository
2. Install dependencies: `deno cache src/app.ts`
3. Create a PostgreSQL database
4. Update database configuration in `src/config/db.ts`
5. Create environment variables file: `.env`
6. Run migrations: `deno run --allow-read --allow-env src/migrations.ts up`
7. Start the server: `deno run --allow-net --allow-env src/app.ts`

## Usage

The server listens on port 8000 by default. Use your favorite HTTP client to interact with the API.

## Routes

- `GET /example`: Returns an example resource.

## License

This project is licensed under the MIT License.
