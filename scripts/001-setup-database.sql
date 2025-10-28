-- Drop existing posts table if it exists (for clean setup)
DROP TABLE IF EXISTS posts CASCADE;

-- Create posts table for brutalist blog
CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  content TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMP DEFAULT NOW() NOT NULL
);

-- Create index on slug for faster lookups
CREATE INDEX idx_posts_slug ON posts(slug);

-- Create index on created_at for sorting
CREATE INDEX idx_posts_created_at ON posts(created_at DESC);

-- Seed initial blog posts using dollar-quoted strings
INSERT INTO posts (title, slug, content, excerpt) VALUES
(
  'Welcome to Brutalism',
  'welcome-to-brutalism',
  $$# Welcome to Brutalism

Brutalism in web design is about **honesty**, **rawness**, and **function over form**. It rejects the polished, the rounded, the gradient-filled interfaces that dominate modern web design.

## Core Principles

- **Visible Structure**: Show the grid, expose the framework
- **Raw Materials**: Black borders, sharp corners, system fonts
- **Honest Typography**: Large, bold, unapologetic text
- **Minimal Color**: Grayscale with strategic accent colors
- **No Decoration**: Every element serves a purpose

This blog embraces these principles. No smooth animations, no subtle shadows, no gentle curves. Just content, structure, and clarity.$$,
  'An introduction to brutalist web design principles and philosophy.'
),
(
  'The Death of Skeuomorphism',
  'death-of-skeuomorphism',
  $$# The Death of Skeuomorphism

Remember when buttons looked like physical buttons? When calendars had leather textures? When apps tried to mimic real-world objects?

## The Problem with Imitation

Skeuomorphism was a crutch. It helped users transition from physical to digital, but it held us back. Digital interfaces don't need to pretend to be physical objects.

## Brutalism as Liberation

Brutalist design says: **this is a website**. Not a magazine, not a brochure, not a physical space. It's pixels on a screen, and that's okay.

We can embrace the medium instead of fighting it.$$,
  'Why brutalist design represents freedom from outdated design metaphors.'
),
(
  'Building with Next.js and Postgres',
  'building-with-nextjs-postgres',
  $$# Building with Next.js and Postgres

This blog is built with modern tools that match its aesthetic: **direct**, **powerful**, **no-nonsense**.

## The Stack

- **Next.js 15**: Server components, app router, static generation
- **Vercel Postgres**: Managed database with zero configuration
- **Drizzle ORM**: Type-safe SQL without the abstraction overhead
- **Tailwind CSS**: Utility-first styling for rapid development

## Why This Stack?

Each tool does one thing well. No bloat, no magic, no hidden complexity. You write SQL, you write React, you deploy. That's it.

The brutalist approach extends beyond design into architecture.$$,
  'Technical overview of the stack powering this brutalist blog.'
);
