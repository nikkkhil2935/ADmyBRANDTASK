<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" class="logo" width="120"/>

# ADmyBRAND AI Suite - AI-Accelerated Landing Page

This repository contains the complete source code and project documentation for the DmyBRAND AI Suite landing page—a modern, **AI-powered single-page application**. Designed for high visual impact and top-tier UX, this project exemplifies the integration of advanced AI tools, professional animation libraries, and innovative 3D graphics for enterprise-grade web development.

## 🚀 Live Demo

Check out the live, fully interactive demo:
https://admybrandaisaaspage.vercel.app/

## ✨ Core Features

- **Modern UI/UX:** A meticulously crafted interface, inspired by the latest trends (via Dribbble, Figma) and fine-tuned using AI insights for pixel-perfect consistency and elegance.
- **Professional Animations:** Leveraging Framer Motion for spring-based transitions, micro-interactions, and attention-grabbing effects throughout the experience.
- **3D Interactivity:** Interactive hero section powered by Spline, featuring fully responsive and animated 3D elements.
- **Pricing Interactivity:** Dynamic pricing tables with smooth toggling (monthly/annual), animation on price changes, and interactive hover effects—all animated for user delight.
- **Accessibility:** Built atop Radix UI primitives for keyboard navigation, ARIA support, and customizable accessibility.
- **Mobile-First Design:** Carefully tested and optimized for mobile, tablet, and desktop resolutions, ensuring universal usability.
- **Custom Styling:** Custom scrollbars, refined focus states, and professional text-selection visuals.
- **Enterprise-Ready Stack:** Built for performance, with modular architecture, code-splitting, and robust error boundaries.


## 🛠️ Tech Stack \& Tooling

| Category | Tools Used |
| :-- | :-- |
| **Research \& Ideation** | Perplexity Pro, ChatGPT, Claude, Gemini Pro |
| **UI/UX Inspiration** | Dribbble |
| **Core Framework** | Next.js 15 (App Router) |
| **AI-Assisted Building** | GitHub Copilot, v0.dev, Lobe, Bolt, Cursor |
| **Styling** | Tailwind CSS |
| **Animation** | Framer Motion |
| **3D Graphics** | Spline |
| **UI Primitives** | Radix UI |
| **Icons** | Lucide React |
| **Deployment** | Vercel |

## 🧠 AI Development Process: Insights \& Prompts

This project is a deep dive into **AI-accelerated development**—the vast majority of code, scaffolding, and even animation polish was powered by advanced prompting and iterative feedback using state-of-the-art language models and AI code companions.
Below you'll find sample prompts and details illustrating the professional, in-depth approach we used.

### Exemplary Professional Prompts

#### For Initial Scaffolding \& Component Design

> "Generate a responsive React component for a pricing section using Next.js and Tailwind CSS. The component should accept an array of plan objects. Each plan should have a name, price, description, and features. One plan can be marked 'popular', appearing visually distinct. Add a toggle for monthly/yearly pricing; animate price changes smoothly. Entire section animates in with Framer Motion variants, staggering cards into view."

#### For Advanced Animation Polish

> "Refine the pricing section for enterprise-level experience. On hover, pricing cards should subtly 3D-rotate (rotateY/translateZ); popular plan emits floating particle effects (Framer Motion). CTA buttons receive a sweeping 'shine' hover effect. Animate feature list checkmarks sliding in from left, using professional cubic-bezier curves for all transitions."

#### For Responsive Testing and Optimization

> "Ensure all components in `/components` are fully responsive. Navigation must provide a mobile hamburger menu with a smoothly animated overlay. Hero section should adapt from single-column mobile to two-column desktop layouts. All sizes, margins, and padding must use Tailwind responsive utilities for consistent experience across devices."

#### For 3D Hero Animation (Spline)

> "Integrate a Spline-generated 3D model into a React component, ensuring loading state with animated spinner. On interaction, animate Spline objects in sync with scroll position or user hover (using Spline's JS API) for immersive hero section."

### AI vs Manual Effort Breakdown

| Task Type | Percentage | Description |
| :-- | :-- | :-- |
| **AI-Generated** | 65% | UI component scaffolding, animation logic, utility and state hooks, core layout, documentation drafts |
| **Manual Coding** | 20% | Project bootstrapping, Next.js config, page integration, content population, custom 3D and Spline fine-tuning |
| **Refinement \& Debugging** | 15% | Cross-browser/3D-fix, custom scrollbar/text-selection, animation tuning, final color palette adjustments |

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [pnpm](https://pnpm.io/) package manager


### Installation

```bash
git clone https://github.com/your-username/admybrand-ai-suite.git
cd admybrand-ai-suite
pnpm install
```


### Running Locally

```bash
pnpm dev
# Then, open http://localhost:3000 in your browser
```


## 📁 Project Structure Overview

```
/
├── app/
│   ├── components/       # Page-specific, complex components (e.g. HeroSection, PricingSection)
│   ├── layout.tsx        # Application layout with fonts/metadata
│   └── page.tsx          # Main landing page entrypoint
├── components/
│   └── ui/               # Reusable UI primitives (Button, Card, Accordion)
├── hooks/
│   └── use-mobile.tsx    # Detect mobile viewports
├── lib/
│   └── utils.ts          # Utility helpers (e.g., cn function)
├── public/               # Static files (logos, images, 3D models)
└── styles/
    └── globals.css       # Tailwind + base styles, custom scrollbars/themes
```


## 📄 License

This project is MIT licensed. See the `LICENSE` file for details.

## ✨ Export Your Data

You can easily export your data to Sheets or integrate this project with your current workflow using its modular structure and clean organization.

### Credits

- Built with the combined power of AI (Perplexity Pro, ChatGPT, Claude, Gemini Pro, GitHub Copilot, v0.dev, Lobe, Bolt, Cursor), inspiration from Dribbble, and the visual magic of Spline for 3D.
- Designed, tested, and refined by a passionate developer and product design team inspired by the future of AI-driven web apps.

For any questions or contributions, feel free to open a pull request or reach out via issues. Enjoy exploring, learning, and building with the ADmyBRAND AI Suite!


