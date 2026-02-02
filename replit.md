# KSoft Solution - Digital Agency Platform

## Overview

KSoft Solution is a modern digital agency website built with Next.js 15, showcasing web development, AI integration, SEO, and digital marketing services. The platform is designed for a premier digital agency based in Chhatrapati Sambhaji Nagar, Maharashtra, India, serving clients globally. The website emphasizes performance, SEO optimization, and professional presentation of services with a focus on converting visitors into leads.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework Choice: Next.js 15 (App Router)**
- The application uses Next.js 15 with the App Router for server-side rendering and static generation
- Pages are located in the `app/` directory following Next.js conventions
- Uses React 18+ with TypeScript for type safety
- Development server runs on port 5000

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

### Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── blog/              # Blog section with dynamic [slug] routes
│   ├── contact/           # Contact page
│   ├── portfolio/         # Portfolio showcase
│   ├── services/          # Service pages (SEO, AI, etc.)
│   ├── llms.txt/          # LLMs.txt route for AI crawlers
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── robots.ts          # Dynamic robots.txt
│   └── sitemap.ts         # Dynamic sitemap.xml
├── components/            # Reusable React components
│   ├── layout/            # Navbar, Footer, etc.
│   ├── sections/          # Page sections (Hero, About, etc.)
│   └── ui/                # Shadcn/UI components
├── hooks/                 # Custom React hooks
├── lib/                   # Utilities and blog post data
├── public/                # Static assets
│   ├── generated_images/  # AI-generated images for content
│   ├── stock_images/      # Stock photos
│   └── *.png              # Logos and portfolio screenshots
└── script/                # Build scripts
```

### SEO & Performance Optimizations

**Technical SEO Implementation**
- Server-side rendering for optimal SEO
- Dynamic meta tags per page using Next.js metadata API
- Structured data (JSON-LD) for Organization, LocalBusiness, Services
- Canonical URLs, Open Graph, and Twitter Card tags
- Dynamic sitemap.xml via `app/sitemap.ts`
- Dynamic robots.txt via `app/robots.ts`
- LLMs.txt route for AI crawler optimization

**Performance Features**
- Next.js Image component for automatic image optimization
- Server-side rendering and static generation
- Code splitting built into Next.js
- Google Analytics integration

**Core Web Vitals Optimization**
- Next.js Image component handles image optimization
- Lazy loading for off-screen content
- Priority loading for hero images
- Async font loading with `font-display: swap`

### Build & Deployment

**Build Process**
- `npm run dev` - Development server on port 5000
- `npm run build` - Production build with Next.js

**Deployment Targets**
- Vercel configuration (`vercel.json`) for deployment
- Replit deployment supported
- Environment-based configuration (NODE_ENV)

**Static Assets**
- Public directory for images, generated content, and logos
- Portfolio screenshots for client work showcase

## External Dependencies

### Third-Party Services

**Analytics & Tracking**
- Google Analytics 4 (GA4) - Tracking ID: G-7E66EELMY7
- Vercel Speed Insights for performance monitoring

### External APIs & Integrations

**Email Service (Contact Form)**
- Nodemailer with Gmail SMTP for transactional emails (inquiry notifications + auto-reply)
- Requires `EMAIL` (Gmail address) and `EMAIL_PASS` (Gmail App Password) environment variables
- Emails sent to the configured EMAIL address
- If credentials not configured, inquiries are logged to console for manual follow-up
- Note: For Gmail, you need to use an "App Password" (not your regular password) - enable 2FA in Google Account, then create an App Password at https://myaccount.google.com/apppasswords

**Design Assets**
- Google Fonts API (Inter, Outfit)
- Preconnect optimization for fonts.googleapis.com and fonts.gstatic.com

### Key NPM Dependencies

**Core Framework**
- Next.js 15
- React 18+ with React DOM
- TypeScript for type safety

**UI & Styling**
- Tailwind CSS v4 with PostCSS
- Radix UI component primitives
- Framer Motion for animations
- Lucide React for icons

**Form & Validation**
- React Hook Form
- Zod validation library
- @hookform/resolvers for integration

**Developer Experience**
- TypeScript for type safety
- TSX for TypeScript execution
- ESBuild for fast compilation

## Recent Changes

**February 2026**
- Reduced Vercel edge requests by disabling Next.js Link prefetching (custom Link component with prefetch=false)
- Added static generation (force-static + 1-hour revalidate) to homepage, about, portfolio, privacy, terms, and all service pages
- Removed duplicate Google Analytics to keep only Vercel Analytics
- Inlined noise SVG as data URI and added cache headers for static assets

**December 2024**
- Enhanced contact form with service selection, company name, mobile number fields
- Added API route for form submission with email notifications
- Created professional HTML email templates for inquiry and auto-reply
- Replaced all "Aurangabad" references with "Chhatrapati Sambhaji Nagar" throughout the site
- Updated blog post URL slugs to use new city name
- Removed legacy unused folders: client/, server/, shared/, attached_assets/
- Cleaned up unused document files and stock images from public/
- Streamlined project to pure Next.js architecture
