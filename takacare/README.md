# TakaCare Project

## Overview
TakaCare is a full-stack application with a React frontend and a Node.js/Express backend using MongoDB (via Mongoose).

---

## Backend (Express + MongoDB)

### Prerequisites
- Node.js (v16 or higher recommended)
- MongoDB (local or Atlas)

### Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the backend directory:
   ```env
   DATABASE_URL=mongodb://localhost:27017/takacare
   PORT=5000
   ```
   - Use your own MongoDB connection string if not running locally.

### Running the Backend
- Development:
  ```bash
  npm run dev
  ```
- Production:
  ```bash
  npm start
  ```

### API Endpoints
- `POST /api/pickup` — Create a pickup request
- `POST /api/collectors` — Register a collector

---

## Frontend (React + Vite)

### Prerequisites
- Node.js (v16 or higher recommended)

### Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Frontend
- Development:
  ```bash
  npm run dev
  ```
- Production build:
  ```bash
  npm run build
  ```

### Notes
- The frontend expects the backend to be running on `http://localhost:5000` by default.
- Authentication endpoints are currently stubbed and need MongoDB-based implementation.
- Make sure MongoDB is running before starting the backend server. 