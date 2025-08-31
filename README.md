# Backend Project

This is the backend application built with NestJS, providing API endpoints for user and role management using Prisma as the ORM. It connects to a PostgreSQL database to manage the `admin-panel-users-table` schema.

## Prerequisites

- Node.js (v23.11.0)
- pnpm (recommended for faster installs)
- PostgreSQL (or your preferred database supported by Prisma)

## Installation

1. Edit the `.env` file with the `DATABASE_URL` by replacing the placeholder data with your actual credentials:
  - Example: `postgresql://<user>:<password>@<host>:<port>/admin-panel-users-table?schema=public`
  - Replace `postgres` with your PostgreSQL username, `password` with your password, and ensure the database `admin-panel-users-table` exists or is created.

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Apply Prisma migrations to set up the database schema:
   ```bash
   pnpm prisma migrate dev
   ```

4. Generate Prisma client:
   ```bash
   pnpm prisma generate
   ```

5. Start the development server:
   ```bash
   pnpm start
   ```

## Running the Project

1. Follow the installation steps above.
2. The API will be available at `http://localhost:3000` (or the port specified in `.env`) after starting with `pnpm start`.

## Available Scripts

- `pnpm run start`: Starts the NestJS server in development mode with hot reloading.
- `pnpm run build`: Builds the project for production.
- `pnpm run start:prod`: Runs the production build.
- `pnpm run prisma:migrate`: Applies Prisma migrations (alias for `pnpm prisma migrate dev`).
- `pnpm run prisma:generate`: Generates Prisma client (alias for `pnpm prisma generate`).

## Project Structure

- `src/users/`: Users module.
- `src/roles/`: Roles module.
- `src/prisma/`: Prisma schema.

## Dependencies

- @nestjs/core, @nestjs/cli, @prisma/client, etc. (check `package.json` for the full list).
