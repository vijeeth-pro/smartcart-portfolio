# SmartCart Co. Portfolio

Welcome to the official single-page portfolio website for **SmartCart Co.**, a product-based company focused on eliminating grocery billing queues with our cutting-edge Smart Digital Cart System.

This website was engineered natively to provide a premium, highly-interactive "scroll-and-story" experience.

## ✨ Features

- **Blazing Fast Performance**: Built on the modern Next.js 14+ App Router architecture.
- **Griflan-Inspired Aesthetics**:
  - Immersive physical smooth scrolling powered by **Lenis**.
  - Abstract, bold, oversized parallax typography scaling deeply in Z-space on scroll.
  - A responsive Custom Inverse Cursor overlay for deeper interactivity.
- **Micro-Animations**: Extensive scroll-based view hooks and transition variants powered entirely by **Framer Motion**.
- **SEO Optimized**: Fully structured semantic HTML5 layouts, canonical tags, optimized Open Graph imagery paths, mapping structured metadata via JSON-LD.
- **Custom Components**: Zero UI libraries utilized. The styling depends purely on custom-configured **Tailwind CSS v4**.

## 🛠️ Tech Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Interactivity**: Framer Motion
- **Scroll Engine**: Lenis Smooth Scroll
- **Package Manager**: Bun 🚀

## 📦 Getting Started

This repository uses **Bun** as its package manager instead of NPM or Yarn for maximum speed and optimization.

First, ensure you have [Bun installed](https://bun.sh/).

```bash
# Clone the repository
git clone <your-repo-url>
cd smartcart

# Install dependencies rapidly via Bun
bun install

# Start the development server
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can start editing the page by modifying `app/page.tsx`.

## 🏗️ Project Structure

```text
smartcart/
├── app/
│   ├── layout.tsx         # Root layout + SEO metadata + Scroll/Cursor Providers
│   ├── page.tsx           # Single page map combining all semantic sections
│   └── globals.css        # Tailwind base, global physical configurations
├── components/
│   ├── CustomCursor.tsx   # Mix-blend inverse motion cursor
│   ├── SmoothScroll.tsx   # Lenis initialization wrapper
│   ├── Hero.tsx           # Giant typography & abstract gradient visualizer
│   ├── Problem.tsx        # Negative-scroll marquee typography + counter hooks
│   ├── Solution.tsx       # Rotating hardware carts and overlapping SVG transforms
│   ├── HowItWorks.tsx     # Bouncy UI cards with cursor interactives
│   ├── Features.tsx       # Side-by-side feature grids
│   ├── Security.tsx       # Two-layer diagram grids
│   ├── Roadmap.tsx        # History/timeline mapping array visualizations
│   ├── Feasibility.tsx    # Clean data metric comparisons
│   ├── Contact.tsx        # Fast-response CTA implementation
│   └── svg/               # Statically managed inline React SVGs (Shield, Carts)
└── hooks/
    └── useScrollSection.ts # Section tracking for complex navigational awareness
```

## 🌐 Deployment

You can seamlessly deploy this to Vercel (the creators of Next.js) or any Edge server.

```bash
bun run build
bun run start
```

## 📝 License

&copy; SmartCart Co. All rights reserved.
