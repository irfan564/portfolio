# Muhammed Irfan M A — Data Analyst Portfolio

A clean, honest, recruiter-first portfolio website for **Muhammed Irfan M A**, Data Analyst (BCA 2026, A+ certified in Data Analytics with Dashboards).

Built with React, Vite, Tailwind CSS, and React Router. Designed with a calm, light editorial layout, clear typography, and verified information.

---

## Candidate Profile

- **Name:** Muhammed Irfan M A
- **Role:** Data Analyst
- **Education:** Bachelor of Computer Applications (BCA), Mahatma Gandhi University – Al Ameen College, Edathala (2023–2026)
- **Certification:** Certificate in Mastering Data Analytics with Dashboards (AC/SFS/IT/06), A+ Grade, ASAP Kerala (Govt. of Kerala Undertaking), conducted by Skillspark Finishing School Pvt Ltd, Patton (1 Feb 2026 – 7 Oct 2026, issued 13 Oct 2026, Certificate No. ASAPTBONLDA26004)
- **Location:** Ernakulam, Kerala, India
- **Email:** [muhammedirfanma112@gmail.com](mailto:muhammedirfanma112@gmail.com)
- **Phone:** +91 8075176518
- **LinkedIn:** [linkedin.com/in/muhammed-irfan-911208251](https://www.linkedin.com/in/muhammed-irfan-911208251)
- **GitHub:** [github.com/irfan564](https://github.com/irfan564)

---

## Featured Projects

1. **Retail BI – E-Commerce Analytics**
   - *Tools:* Power BI, DAX, SQL, Python
   - *Focus:* Customer acquisition cohorts, average order value (AOV), delivery delay diagnostics, and executive KPI dashboarding.
2. **Indian Tech Jobs 2026 Analytics Portal**
   - *Tools:* Python, Django, PostgreSQL, Natural Language to SQL
   - *Focus:* Web interface allowing recruiters to query tech job market records and salary distributions using natural language with a strict read-only safety validator.
3. **Movie Rental Analysis**
   - *Tools:* Python, SQL
   - *Focus:* Exploratory data analysis using the public Sakila sample database (16,044 rentals across 1,000 films), analyzing genre turnover velocity, replacement costs, and peak rental timing heatmaps.

---

## Technical Stack

- **Framework:** React 19 + TypeScript + Vite
- **Styling:** Tailwind CSS v4 (light editorial aesthetic, Inter font, 960px max width)
- **Routing:** React Router v7
- **Icons:** Lucide React
- **SEO & Social:** OpenGraph meta tags, favicon, sitemap, robots.txt

---

## Project Structure

```
portfolio/
├── public/
│   ├── favicon.svg               # Editorial monogram icon
│   ├── og-image.png              # Open Graph social preview
│   ├── robots.txt                # Search engine crawler instructions
│   └── sitemap.xml               # URL index
├── src/
│   ├── components/
│   │   ├── ContactSection.tsx    # Direct contact channels with copy buttons
│   │   ├── Footer.tsx            # Minimal editorial footer
│   │   ├── Icons.tsx             # Vector SVG icons for GitHub & LinkedIn
│   │   ├── Navbar.tsx            # Sticky header with anchor navigation & resume button
│   │   ├── ProjectCard.tsx       # Project card with tools, dataset, findings, and links
│   │   └── ScrollToTop.tsx       # Scrolls window to top on route change
│   ├── data/
│   │   ├── profile.ts            # Bio, contact, education, and certificate info
│   │   ├── projects.ts           # Case studies, datasets, findings, and code snippets
│   │   └── skills.ts             # Grouped technical skill chips
│   ├── pages/
│   │   ├── HomePage.tsx          # Single scrolling main page
│   │   ├── NotFoundPage.tsx      # 404 error page with return home link
│   │   └── ProjectDetailPage.tsx # Dedicated case study page per project
│   ├── types/
│   │   └── index.ts              # Core TypeScript interfaces
│   ├── App.tsx                   # Main layout and route configuration
│   ├── index.css                 # Clean CSS tokens & Inter typography
│   └── main.tsx                  # Application entry point
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## Getting Started Locally

### Prerequisites
- Node.js (v18.0 or higher)
- npm (v9.0 or higher)

### Installation & Run
```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Build for production
npm run build

# 4. Run linter
npm run lint
```
