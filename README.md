# Brutalist Blog

A personal blog built with Next.js 15+, TypeScript, and brutalist design principles. Features a clean admin interface for managing blog posts with full CRUD functionality.

## Features

- **Brutalist Design**: Raw, structural aesthetic with bold typography and visible borders
- **Space Grotesk Font**: Geometric brutalist-style typography
- **Full CRUD**: Create, read, update, and delete blog posts
- **Admin Dashboard**: Protected admin interface with cookie-based authentication
- **Markdown Support**: Write posts in markdown with automatic rendering
- **Database**: Vercel Postgres with Drizzle ORM for type-safe queries
- **Server Components**: Built with Next.js App Router and React Server Components

## Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first styling
- **Vercel Postgres (Neon)** - Serverless PostgreSQL database
- **Drizzle ORM** - Type-safe database queries
- **Space Grotesk** - Google Font with brutalist aesthetic

## Getting Started

### Prerequisites

- Node.js 18+ installed
- A Neon database (automatically configured in v0)

### Setup

1. **Set Environment Variables**

   The `DATABASE_URL` is automatically configured via Neon integration. You only need to add:
   \`\`\`env
   ADMIN_PASSWORD=your_secure_password
   \`\`\`
   
   Add this in the **Vars** section of the v0 in-chat sidebar.

2. **Run Database Setup Script**

   Execute the SQL setup script to create the posts table and seed initial data:
   - `scripts/001-setup-database.sql` - Creates posts table and seeds initial posts

   In v0, click on the **Scripts** section and run this script directly.

3. **Start Development Server**

   The preview will automatically start in v0. For local development:
   \`\`\`bash
   npm run dev
   \`\`\`

   Open [http://localhost:3000](http://localhost:3000) to view the blog.

## Usage

### Public Pages

- **Home** (`/`) - View all blog posts
- **About** (`/about`) - Learn about the blog and its technology
- **Post** (`/post/[slug]`) - Read individual blog posts

### Admin Interface

1. Navigate to `/admin/login`
2. Enter your admin password (set in environment variables)
3. Access the admin dashboard to:
   - View all posts
   - Create new posts
   - Edit existing posts
   - Delete posts

### Writing Posts

Posts support basic markdown formatting:

- `# Header 1`, `## Header 2`, `### Header 3`
- `**bold text**`
- `- list items`

## Design Philosophy

This blog embraces brutalist web design principles:

- **Raw aesthetics** - No polished gradients or smooth transitions
- **Visible structure** - Borders and grids are exposed, not hidden
- **Bold typography** - Strong, uppercase headings with high contrast
- **Minimal color palette** - Grayscale with a single red accent
- **Honest presentation** - What you see is what you get

## Project Structure

\`\`\`
├── app/
│   ├── admin/          # Admin dashboard and auth
│   ├── post/[slug]/    # Individual post pages
│   ├── about/          # About page
│   └── page.tsx        # Home page
├── components/         # Reusable React components
├── lib/
│   ├── db/            # Database schema and client
│   └── auth.ts        # Authentication utilities
└── scripts/           # SQL setup script
\`\`\`

## Deployment

This project is optimized for deployment on Vercel:

1. Push your code to GitHub (use the GitHub button in v0)
2. Deploy directly from v0 using the **Publish** button
3. Add `ADMIN_PASSWORD` environment variable in Vercel dashboard
4. The Neon database integration will automatically configure database variables

## Troubleshooting

### SQL Execution Error

If you see a SQL execution error, make sure to:
1. Run the `scripts/001-setup-database.sql` script from the Scripts section in v0
2. Verify your Neon database is connected in the Connect section

### Font Loading Issues

The project uses Space Grotesk from Google Fonts, which loads automatically. No additional font files are needed.

## License

MIT
