# Syntax Tech Blog  
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Drizzle ORM](https://img.shields.io/badge/Drizzle%20ORM-0B3B4D?style=for-the-badge&logo=drizzle&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)

**A personal tech blog with a brutalist aesthetic and modern web stack.**

---

## Overview  
Syntax Tech Blog is a minimalist, **brutalist-style blogging platform** built with the latest web technologies.  
It features full CRUD post management, Markdown-based content, and a password-protected admin dashboard — all wrapped in a clean, structural design philosophy.

---

## Features  
- **Brutalist Design** — strong typography, visible layout, minimal colour palette  
- **Markdown Support** — write posts using Markdown syntax  
- **Admin Dashboard** — create, update, and delete posts securely  
- **Modern Architecture** — powered by Next.js App Router with server components  
- **Drizzle ORM + Neon (Vercel Postgres)** — type-safe and serverless database layer  
- **Tailwind CSS** — utility-first styling for flexible customization  

---

## Tech Stack  
- **Framework:** Next.js 16+  
- **Language:** TypeScript  
- **Styling:** Tailwind CSS v4  
- **Database:** Vercel Postgres (Neon)  
- **ORM:** Drizzle  
- **Font:** Space Grotesk  

---

## Getting Started  

### Prerequisites  
- Node.js ≥ 18  
- Neon (Vercel Postgres) database  

### Installation  
```bash
git clone https://github.com/F4P1E/syntax-tech-blog.git
cd syntax-tech-blog
pnpm install
````

### Environment Variables

Create a `.env.local` file in the root directory:

```env
ADMIN_PASSWORD=your_secure_password
DATABASE_URL=your_neon_database_connection_string
```

### Database Setup

```bash
pnpm run db:setup
```

### Development

```bash
pnpm run dev
```

Then open [http://localhost:3000](http://localhost:3000)

---

## Project Structure

```
├── app/
│   ├── admin/          # Admin dashboard
│   ├── post/[slug]/    # Blog post pages
│   ├── about/          # About page
│   └── page.tsx        # Home page
├── components/         # Reusable components
├── lib/
│   ├── db/             # Database schema + config
│   └── auth.ts         # Authentication utilities
├── scripts/            # SQL setup scripts
├── public/             # Static assets
└── styles/             # Global styles
```

---

## Usage

### Public Pages

* `/` — Blog index
* `/about` — About the author
* `/post/[slug]` — View a blog post

### Admin Panel

1. Visit `/admin/login`
2. Log in using the `ADMIN_PASSWORD`
3. Manage posts (create/edit/delete) easily

Markdown syntax is supported for post content.

---

## Deployment

Optimized for [Vercel](https://vercel.com):

1. Push your repo to GitHub
2. Import it into Vercel
3. Add environment variables (`ADMIN_PASSWORD`, `DATABASE_URL`)
4. Deploy instantly

---

## License

Licensed under the [MIT License](./LICENSE).

---

## Author

**Duong Phu Dong (F4P1E)**

* GitHub: [@F4P1E](https://github.com/F4P1E)
