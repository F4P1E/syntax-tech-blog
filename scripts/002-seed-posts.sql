-- Seed initial blog posts
INSERT INTO posts (title, slug, content, excerpt, created_at) VALUES
(
  'Welcome to My Brutalist Blog',
  'welcome-to-my-brutalist-blog',
  E'# Welcome\n\nThis is my personal blog built with a brutalist design philosophy. Raw, structural, and unapologetically bold.\n\n## What is Brutalism?\n\nBrutalism in web design embraces:\n- Raw, unpolished aesthetics\n- Visible structure and borders\n- Bold typography\n- Minimal color palettes\n- Asymmetric layouts\n\nThis blog is a space for my thoughts, experiments, and creative explorations.',
  'An introduction to this brutalist blog and the design philosophy behind it.',
  NOW() - INTERVAL ''2 days''
),
(
  'The Beauty of Raw Design',
  'the-beauty-of-raw-design',
  E'# The Beauty of Raw Design\n\nIn a world of polished interfaces and smooth gradients, there''s something refreshing about raw, structural design.\n\n## Less is More\n\nBrutalist design strips away the unnecessary:\n- No decorative elements\n- No smooth transitions\n- No hiding the structure\n\nWhat you see is what you get. The structure is the design.\n\n## Honesty in Design\n\nBrutalism is honest. It doesn''t try to hide its construction. Borders are visible. Grids are exposed. Typography is bold and unapologetic.',
  'Exploring the philosophy and appeal of brutalist web design.',
  NOW() - INTERVAL ''1 day''
),
(
  'Building with Next.js and TypeScript',
  'building-with-nextjs-and-typescript',
  E'# Building with Next.js and TypeScript\n\nThis blog is built with modern web technologies:\n\n## Tech Stack\n\n- **Next.js 15+** - React framework with App Router\n- **TypeScript** - Type-safe development\n- **Tailwind CSS** - Utility-first styling\n- **Vercel Postgres** - Serverless database\n- **Drizzle ORM** - Type-safe database queries\n\n## Why These Tools?\n\nEach tool serves a purpose:\n- Next.js provides server-side rendering and routing\n- TypeScript catches errors before runtime\n- Tailwind enables rapid styling\n- Postgres stores data reliably\n- Drizzle makes database queries type-safe\n\nTogether, they create a robust foundation for a modern blog.',
  'A look at the technology stack powering this blog.',
  NOW()
);
