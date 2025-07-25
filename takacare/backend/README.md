# TakaCare Backend

## Overview
This is the backend for the TakaCare project, now using MongoDB with Mongoose for data storage.

## Prerequisites
- Node.js (v16 or higher recommended)
- MongoDB (local or Atlas)

## Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env` file in this directory with the following content:
   ```env
   DATABASE_URL=mongodb://localhost:27017/takacare
   PORT=5000
   ```
   - You can use your own MongoDB connection string if not running locally.

## Running the Server
- For development (with auto-reload):
  ```bash
  npm run dev
  ```
- For production:
  ```bash
  npm start
  ```

## API Endpoints
- `POST /api/pickup` — Create a pickup request
- `POST /api/collectors` — Register a collector

## Notes
- Authentication endpoints are currently stubbed and need MongoDB-based implementation.
- Make sure MongoDB is running before starting the server. 