# MedAI — AI Medicine Recommendation & Medical Assistant

A premium, production-ready frontend for an AI-powered healthcare platform, built with React 18, TypeScript, Vite, Tailwind CSS, TanStack Query, React Hook Form + Zod, Framer Motion, and Recharts.

## Getting Started

```bash
npm install
npm run dev
```

The app runs at `http://localhost:5173`.

To create a production build:

```bash
npm run build
npm run preview
```

## Demo Login

The backend is fully mocked (see `src/services/`), so you can log in with **any email + a 6+ character password**.

- Use a normal email (e.g. `jordan@example.com`) to sign in as a regular user.
- Include the word **"admin"** in the email (e.g. `admin@example.com`) to unlock the **Admin Dashboard** at `/admin`.

## What's included

- **Public site**: landing page (hero, features, stats, testimonials, FAQ, CTA), login, register, forgot password
- **App**: dashboard, AI symptom checker, medicine search with a details drawer, ChatGPT-style AI medical chat, prescription upload with simulated OCR, medical report analyzer, disease prediction, BMI calculator, profile, settings
- **Admin**: analytics charts, user management (search/filter/pagination), medicine & disease databases
- **Design system**: reusable UI kit in `src/components/ui` (Button, Card, Badge, Modal, Drawer, Tabs, Table, Pagination, Toasts, Skeletons, etc.), light/dark theme, glassmorphism, gradient cards, Framer Motion micro-interactions
- **Architecture**: React Context for auth/theme/notifications, TanStack Query hooks per domain, Axios-based service layer with mocked responses (swap `src/services/api.ts` for a real backend), Zod-validated forms, protected & admin route guards, 404 page

## Connecting a real backend

Every function in `src/services/*.ts` is written to mirror a realistic REST contract. To go live:

1. Set `VITE_API_URL` in a `.env` file to your API base URL.
2. Replace the mocked logic inside each service function with real `api.get/post/...` calls (the `api` Axios instance is already configured in `src/services/api.ts`).
3. Remove the `delay()` helper calls used to simulate network latency.

## Project Structure

```
src/
  assets/        static assets
  components/    ui/, layout/, charts/, common/
  layouts/       PublicLayout, AuthLayout, DashboardLayout
  pages/         one file per route, admin/ for admin-only pages
  hooks/         TanStack Query hooks
  context/       Auth, Theme, Notification providers
  routes/        ProtectedRoute, AdminRoute guards
  services/      mocked API layer (Axios-based)
  utils/         cn, formatting, zod validators
  constants/     nav links, categories, disclaimers
  types/         shared TypeScript interfaces
  data/          mock datasets powering the services
```
