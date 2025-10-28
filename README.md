# Syntax Tech Blog

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## Project Overview

Welcome to **Syntax Tech Blog**, a modern personal blog built with a minimalist, brutalist aesthetic. The site is crafted using Next.js (App Router), TypeScript, and styled with Tailwind CSS. The backend leverages Drizzle ORM and Vercel Postgres (Neon) for type-safe data access and a serverless database experience.
Designed for simplicity, clarity and structure, the blog emphasizes readable content, direct interfaces, and a bold, no-frills presentation.

## Features

* Brutalist design style: exposed grids, visible structure, strong typography
* Full CRUD functionality for blog posts (create, read, update, delete)
* Admin dashboard protected by cookie-based authentication
* Markdown support so you can write in Markdown and have it rendered automatically
* Built for performance with Next.js server components and modern tooling
* Seamless integration with serverless database (Neon/Postgres) and Drizzle ORM

## Tech Stack

* **Framework**: Next.js (App Router)
* **Language**: TypeScript
* **Styling**: Tailwind CSS (v4)
* **Database**: Vercel Postgres (Neon)
* **ORM**: Drizzle ORM for type-safe queries
* **Design**: Space Grotesk font + brutalist aesthetic

## Getting Started

### Prerequisites

* Node.js v18 or higher
* A PostgreSQL database provisioned via Neon or a compatible provider
* Set up environment variables (see below)

### Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/F4P1E/syntax-tech-blog.git
   cd syntax-tech-blog
   ```
2. Create a `.env.local` (or similar) file in the project root and add required variables:

   ```env
   DATABASE_URL=your_postgres_connection_string
   ADMIN_PASSWORD=your_secure_password
   ```
3. Run database setup script (in `scripts/001-setup-database.sql`) to create the `posts` table and seed initial data.
4. Install dependencies and start the development server:

   ```bash
   pnpm install     # or npm/install as appropriate
   pnpm dev         # or `npm run dev`
   ```
5. Visit `http://localhost:3000` in your browser to view the blog.

## Usage

### Public Pages

* `/` — Lists all blog posts
* `/about` — A page about the blog and technology
* `/post/[slug]` — Individual blog post pages rendered from markdown

### Admin Interface

* Navigate to `/admin/login`
* Enter the password you set via `ADMIN_PASSWORD`
* Once authenticated, you can:

  * View all posts
  * Create a new post
  * Edit an existing post
  * Delete a post

### Writing a Post

Posts are written in Markdown with support for headings, lists, **bold text**, etc.

```markdown
# Heading 1  
## Heading 2  
### Heading 3  
- Item one  
- Item two  
```

## Design Philosophy

The site channels brutalist web design principles:

* Raw aesthetic: minimal ornamentation, no gloss or smooth transitions
* Visible structure: clear borders, exposed grids
* Bold typography: strong headings, high contrast
* Minimal colour palette: primarily grayscale with a single accent colour
* Honest presentation: what you see is what you get

## Project Structure

```text
├── app/
│   ├── admin/          # Admin dashboard & authentication
│   ├── post/[slug]/    # Individual blog post pages
│   ├── about/          # About page
│   └── page.tsx        # Homepage
├── components/         # Reusable React components
├── lib/
│   ├── db/             # Database schema & client
│   └── auth.ts         # Authentication utilities
├── scripts/            # SQL setup scripts
├── styles/             # Global and utility styles
├── public/             # Static assets
├── next.config.mjs
├── drizzle.config.ts
├── tsconfig.json
└── package.json
```

## Deployment

This project is optimized for deployment on Vercel:

1. Push the repository to your GitHub account.
2. Connect the project to Vercel for automatic deployments.
3. In Vercel dashboard, configure the environment variable `ADMIN_PASSWORD`.
4. Ensure the database (Neon) or PostgreSQL is connected and `DATABASE_URL` is set if required.
5. Deploy and the site will be live — edits to main branch trigger automatic builds.

## Troubleshooting

**SQL Execution Error**

* Make sure the script `scripts/001-setup-database.sql` has been run.
* Check your database connection string and access permissions.

**Font Loading Issues**

* The site uses the Google Font *Space Grotesk*. It is loaded automatically — no need for local font files.
* If you see fallback fonts instead, verify network access to fonts.googleapis.com.

## License

This project is licensed under the MIT License. Feel free to use, modify, and distribute it.
