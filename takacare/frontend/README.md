# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# TakaCare ♻️

A full-stack platform connecting Nairobi’s households and institutions with waste collectors.

## Features
- 🛺 On-demand pickup requests
- 💰 Dynamic pricing for fairness
- 📍 Real-time tracking
- 🙌 Inclusion of informal collectors
- 📊 Admin dashboard

## Tech Stack
- React + Tailwind (Frontend)
- Express + Prisma + PostgreSQL (Backend)
- JWT for Auth

## Setup
1. `cd backend && npm install`
2. Set `.env` with `DATABASE_URL` and `JWT_SECRET`
3. `npx prisma migrate dev`
4. `npm run dev`

5. `cd ../frontend && npm install`
6. `npm run dev`

## Seed Data
Run `npx prisma db seed` (create `seed.js` with sample users & pickups)

## Deployment
- Render (backend + frontend build)
- PostgreSQL via Supabase or Render

## Authors
- Kevin Otieno
