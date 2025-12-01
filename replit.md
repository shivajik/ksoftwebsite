# KSoft Solution - Digital Agency Platform

## Overview

KSoft Solution is a modern digital agency website built to showcase web development, AI integration, SEO, and digital marketing services. The platform is designed for a premier digital agency based in Chhatrapati Sambhaji Nagar (Aurangabad), Maharashtra, India, serving clients globally. The website emphasizes performance, SEO optimization, and professional presentation of services with a focus on converting visitors into leads.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework Choice: React with Vite (Client-Side Rendering)**
- The application uses React with Vite as the build tool for fast development and optimized production builds
- Despite having Next.js configuration files (next-env.d.ts, app/ directory), the actual runtime is a client-side React SPA using Vite
- Client code is located in `client/src/` directory
- Routing is handled by Wouter (lightweight client-side router)
- Lazy loading is implemented for all page components to improve initial load performance

**UI Framework: Shadcn/UI + Radix UI**
- Comprehensive component library based on Radix UI primitives
- Tailwind CSS v4 for styling with custom design tokens
- CSS variables for theming (dark mode support with `.dark` class)
- Custom fonts: Inter (body) and Outfit (headings)

**State Management**
- React Query (TanStack Query) for server state management
- React Hook Form with Zod validation for form handling
- Local component state using React hooks

**Animation & Interactivity**
- Framer Motion for page transitions and animations
- Custom CSS animations (float, glow effects)
- Responsive design with mobile-first approach

**Design System**
- Component aliases configured via `components.json`
- "New York" style variant from Shadcn/UI
- Neutral color base with primary blue accent (#4A90E2 range)
- Consistent spacing, typography, and shadow system

### Backend Architecture

**Server Setup: Express.js (Minimal Implementation)**
- Server entry point in `server/index.ts` spawns Next.js process
- Route registration stub in `server/routes.ts` (currently unused)
- Static file serving from `dist/public` directory
- In-memory storage implementation in `server/storage.ts` (placeholder for future database integration)

**Development vs Production**
- Development: Vite dev server with HMR on port 5000
- Production: Static build served via Express
- Vite middleware integration for development workflow

### Data Layer

**Database: PostgreSQL with Drizzle ORM**
- Schema defined in `shared/schema.ts`
- Currently implements basic user table structure (id, username, password)
- Drizzle Kit configured for migrations (output to `./migrations`)
- Neon serverless PostgreSQL driver (`@neondatabase/serverless`)
- Database URL required via `DATABASE_URL` environment variable

**Data Validation**
- Zod schemas for runtime validation
- Drizzle-Zod integration for type-safe schema generation
- Form validation using Zod + React Hook Form resolver

### SEO & Performance Optimizations

**Technical SEO Implementation**
- Meta tags management via client-side routing
- Structured data (JSON-LD) for Organization, LocalBusiness, Services
- Canonical URLs, Open Graph, and Twitter Card tags
- Sitemap.xml and robots.txt in public directory
- LLMs.txt file for AI crawler optimization

**Performance Features**
- Lazy-loaded route components
- Image optimization strategy (WebP/AVIF support mentioned in documentation)
- Code splitting via Vite
- Google Analytics integration (gtag.js)
- Lighthouse-tested and optimized (documented in LIGHTHOUSE_REPORT.md)

**Core Web Vitals Optimization**
- Explicit width/height on images to prevent CLS
- Lazy loading for off-screen content
- Priority loading for hero images (`loading="eager"`, `fetchPriority="high"`)
- Async font loading with `font-display: swap`

### Build & Deployment

**Build Process**
- Custom build script in `script/build.ts`
- Vite builds client to `dist/public`
- ESBuild bundles server code
- Allowlist of dependencies to bundle for reduced cold starts

**Deployment Targets**
- Vercel configuration (`vercel.json`) for SPA routing
- Replit-specific plugins in development (cartographer, dev-banner)
- Environment-based configuration (NODE_ENV)

**Static Assets**
- Public directory for images, generated content, and SEO files
- Custom Vite plugin for meta image management (`vite-plugin-meta-images.ts`)
- Replit deployment URL detection and injection

## External Dependencies

### Third-Party Services

**Analytics & Tracking**
- Google Analytics 4 (GA4) - Tracking ID: G-7E66EELMY7
- Configured in `client/index.html`

**Database Provider**
- Neon Serverless PostgreSQL
- Connection managed via `@neondatabase/serverless` package
- Requires `DATABASE_URL` environment variable

### Cloud Infrastructure

**Hosting Platform**
- Designed for Replit deployment (evidenced by Replit-specific Vite plugins)
- Vercel-compatible configuration included
- Static file serving architecture supports multiple platforms

### External APIs & Integrations

**Design Assets**
- Google Fonts API (Inter, Outfit)
- Preconnect optimization for fonts.googleapis.com and fonts.gstatic.com

**Development Tools**
- Replit Vite plugins (runtime error modal, cartographer, dev-banner)
- Only active in development and when REPL_ID is set

### Key NPM Dependencies

**Core Framework**
- React 18+ with React DOM
- Vite for build tooling
- Wouter for client-side routing

**UI & Styling**
- Tailwind CSS v4 with PostCSS
- Radix UI component primitives
- Framer Motion for animations
- Lucide React for icons

**Form & Validation**
- React Hook Form
- Zod validation library
- @hookform/resolvers for integration

**Backend**
- Express.js web framework
- Drizzle ORM + Drizzle Kit
- PostgreSQL client (Neon serverless)

**Developer Experience**
- TypeScript for type safety
- TSX for TypeScript execution
- ESBuild for fast compilation