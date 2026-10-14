# Muhammed Irfam M A — Data Analyst & Business Intelligence Portfolio

> **"Turning Raw Data Into Meaningful Decisions."**  
> A modern, editorial, and interactive portfolio website designed specifically for recruiters, hiring managers, and technology companies.

---

## 🌟 Overview & Key Highlights

This website is designed with a high-end software & technology aesthetic—combining midnight-navy themes, electric cyan accents, subtle glassmorphism, responsive typography, and rich interactive data visualizations.

- **Honest Professional Representation:** Built around real analytical foundations (BCA from Al Ameen College & Data Analytics course at SkillSpark Finishing School) without fabricated corporate claims or fake skill percentages.
- **Interactive Abstract Data Canvas:** HTML5 Canvas particle telemetry system demonstrating network nodes, query latency monitors, and relational database metrics.
- **"Data, Made Visible" Interactive BI Showcase:** An interactive sample business intelligence dashboard powered by **Recharts**, featuring monthly revenue trajectories, category margin contributions, and fulfillment SLA distributions with custom tooltips and dynamic metric switchers.
- **Comprehensive Case Studies:** Filterable project showcase (`/projects`) with deep-dive case studies (`/projects/:id`) that include real SQL CTE window functions, Python Pandas data validation scripts, and strategic business implications.
- **Multi-Page Architecture:** Built with **React Router** for seamless routing across Home, About, Filterable Projects, Project Details, and Contact pages.

---

## 🛠️ Technology Stack

- **Core:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) + [Vite](https://vite.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Data Visualizations:** [Recharts](https://recharts.org/) + HTML5 Canvas
- **Routing:** [React Router v7](https://reactrouter.com/)
- **Icons & Delight:** [Lucide Icons](https://lucide.dev/) + [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)
- **Typography:** Google Fonts (*Plus Jakarta Sans*, *JetBrains Mono*, *Space Grotesk*)

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js (v18.0 or higher recommended, tested on v22.16)
- npm (v9.0 or higher)

### Installation
```bash
# Clone or navigate to the project directory
cd portfolio

# Install dependencies
npm install

# Start local development server
npm run dev
```

The application will be live at:
```
http://localhost:5173/
```

### Production Build
```bash
npm run build
```
The optimized bundle will be compiled into the `dist/` directory, ready for deployment to Vercel, Netlify, or GitHub Pages.

---

## 📂 Project Structure

```
portfolio/
├── public/
│   └── favicon.svg               # Custom monogram "IM" SVG icon
├── src/
│   ├── components/
│   │   ├── AnalyticsDashboard.tsx # Interactive sample BI showcase (Recharts)
│   │   ├── ContactSection.tsx     # Contact form with email copy & mailto fallback
│   │   ├── EducationCard.tsx      # Clean academic timeline cards
│   │   ├── Footer.tsx             # Global footer with social links & status
│   │   ├── Icons.tsx              # Vector SVG icons for GitHub & LinkedIn
│   │   ├── InteractiveDataCanvas.tsx # Animated node network & telemetry
│   │   ├── MouseGlow.tsx          # Subtle ambient cursor follower
│   │   ├── Navbar.tsx             # Glassmorphic header with "IM" monogram
│   │   ├── ProcessTimeline.tsx    # 4-step analytical approach timeline
│   │   ├── ProjectCard.tsx        # Project preview card with abstract covers
│   │   ├── ScrollToTop.tsx        # Route transition scroll reset
│   │   ├── SectionHeading.tsx     # Reusable editorial typography headers
│   │   └── SkillCard.tsx          # Analytical toolkit cards with hover descriptions
│   ├── data/
│   │   ├── profile.ts             # Muhammed Irfam M A's profile & bio
│   │   ├── projects.ts            # Detailed project case studies & code snippets
│   │   ├── sampleAnalyticsData.ts # Data for interactive dashboard simulation
│   │   └── skills.ts              # Categorized skills with analytical use-cases
│   ├── pages/
│   │   ├── AboutPage.tsx          # Deep dive into analytical philosophy & background
│   │   ├── ContactPage.tsx        # Dedicated contact page & recruiter quick ref
│   │   ├── HomePage.tsx           # Full landing experience with all sections
│   │   ├── ProjectDetailPage.tsx  # In-depth case studies with SQL & Python code
│   │   └── ProjectsPage.tsx       # Filterable gallery (Python, SQL, Power BI, etc.)
│   ├── types/
│   │   └── index.ts               # Core TypeScript data contracts
│   ├── App.tsx                    # React Router configuration
│   ├── index.css                  # Design tokens & glassmorphic styles
│   └── main.tsx                   # React root mount
├── package.json
└── vite.config.ts
```

---

## ✏️ How to Add or Edit Projects

All project data is decoupled from UI presentation in `src/data/projects.ts`. To add a new case study:

1. Open `src/data/projects.ts`.
2. Add a new object adhering to the `Project` interface (including title, description, schema notes, analytical approach, code snippets, and findings).
3. The new project will automatically appear on both the Home page, the filterable Projects page, and receive its own dedicated `/projects/:id` case study URL!

---

## 👤 Profile & Contacts

- **Candidate:** Muhammed Irfam M A
- **Role:** Data Analyst | Business Intelligence | Data Analytics
- **Location:** Ernakulam, Kerala, India
- **GitHub:** [github.com/irfan564](https://github.com/irfan564)
- **LinkedIn:** [linkedin.com/in/muhammedirfanma](https://www.linkedin.com/in/muhammedirfanma/)
- **Email:** [muhammedirfanma112@gmail.com](mailto:muhammedirfanma112@gmail.com)
