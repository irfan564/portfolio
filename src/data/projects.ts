import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: "retail-bi-ecommerce",
    title: "Retail BI – E-Commerce Analytics",
    businessQuestion: "Which product categories and customer cohorts drive repeat revenue, and where are delivery bottlenecks occurring?",
    tools: ["Power BI", "DAX", "SQL", "Python"],
    dataset: {
      name: "[FILL: dataset name and real row count, e.g. Brazilian E-Commerce public dataset, 100k rows]",
      rowCount: "[FILL: real row count, e.g. 100,000 orders]",
      source: "[FILL: dataset source, e.g. Public Kaggle e-commerce transactions]",
      cleaning: "[FILL: resolved null delivery timestamps, corrected order status inconsistencies, and normalized customer IDs across tables]"
    },
    keyFindings: [
      "[FILL: finding 1 with number, e.g. Repeat customers accounted for X% of total revenue]",
      "[FILL: finding 2 with number, e.g. Average delivery delay in region Y was Z days]"
    ],
    problem: "Management lacked unified visibility into customer repeat purchase cycles, category profit margins, and regional shipping delays across disparate transactional tables.",
    whatIDid: [
      "Extracted and cleaned multi-table transactional records using Python (Pandas).",
      "Designed a dimensional star schema in PostgreSQL with fact and dimension tables.",
      "Wrote SQL queries using CTEs and window functions to compute customer retention cohorts.",
      "Built an interactive Power BI dashboard with DAX measures for executive KPI monitoring."
    ],
    recommendation: "[FILL: business recommendation based on findings, e.g. rebalance inventory allocation in high-delay regions to protect repeat customer retention]",
    screenshots: [
      {
        src: "/projects/retail-bi-1.png",
        alt: "Retail BI Executive Overview Dashboard",
        caption: "Power BI executive overview tracking revenue, order volume, and fulfillment performance."
      },
      {
        src: "/projects/retail-bi-2.png",
        alt: "Customer Cohort Retention Analysis",
        caption: "Cohort matrix evaluating repeat buyer retention rates across calendar months."
      }
    ],
    codeSnippet: {
      language: "sql",
      title: "SQL CTE: Customer Monthly Cohort Retention",
      code: `-- Customer Monthly Cohort Retention
WITH customer_first_purchase AS (
    SELECT 
        customer_unique_id,
        DATE_TRUNC('month', MIN(order_purchase_timestamp)) AS cohort_month
    FROM orders
    WHERE order_status = 'delivered'
    GROUP BY customer_unique_id
),
monthly_activity AS (
    SELECT 
        o.customer_id,
        fp.cohort_month,
        DATE_TRUNC('month', o.order_purchase_timestamp) AS order_month
    FROM orders o
    JOIN customer_first_purchase fp ON o.customer_id = fp.customer_unique_id
    WHERE o.order_status = 'delivered'
)
SELECT 
    cohort_month,
    order_month,
    COUNT(DISTINCT customer_id) AS active_customers
FROM monthly_activity
GROUP BY cohort_month, order_month
ORDER BY cohort_month, order_month;`,
      explanation: "Uses a Common Table Expression to group customers by their first purchase month and measures active retention in subsequent months."
    },
    liveUrl: "",
    githubUrl: "[FILL: repo URL]"
  },
  {
    id: "indian-tech-jobs-2026",
    title: "Indian Tech Jobs 2026 Analytics Portal",
    businessQuestion: "How can non-technical recruiters query Indian tech job postings and salary distributions using plain English?",
    tools: ["Python", "Django", "PostgreSQL", "Natural Language to SQL"],
    dataset: {
      name: "[FILL: dataset name and real row count, e.g. Indian Tech Job Postings 2026, X rows]",
      rowCount: "[FILL: real row count]",
      source: "[FILL: dataset source and collection method]",
      cleaning: "[FILL: parsed salary ranges into standardized bounds, normalized job titles, and removed duplicate listings]"
    },
    keyFindings: [
      "[FILL: finding 1 with number, e.g. Python and SQL appeared in X% of data analyst listings]",
      "[FILL: finding 2 with number, e.g. Median compensation in tier-1 tech hubs was ₹Y LPA]"
    ],
    problem: "Recruiters and hiring managers needed access to tech job market trends and salary benchmarks without having to write manual SQL queries.",
    whatIDid: [
      "Built a web application in Django connected to a PostgreSQL database storing job market records.",
      "Implemented natural language to SQL translation: [FILL: does it call an LLM/Gemini API or use rules? state which].",
      "Created a regex-based query safety validator that strictly enforces read-only SELECT and WITH statements.",
      "Built clean tabular views and summary cards to display query outputs clearly."
    ],
    recommendation: "[FILL: business recommendation based on tech job analytics]",
    screenshots: [
      {
        src: "/projects/tech-jobs-1.png",
        alt: "Indian Tech Jobs Query Interface",
        caption: "Web portal interface allowing recruiters to query job listings using natural language."
      },
      {
        src: "/projects/tech-jobs-2.png",
        alt: "Query Results and Salary Aggregations",
        caption: "Tabular query results showing technology skill demand and salary distributions."
      }
    ],
    codeSnippet: {
      language: "python",
      title: "Python Query Safety Validator Engine",
      code: `import re

class QuerySafetyValidator:
    """Enforces strict read-only execution for generated SQL queries."""

    FORBIDDEN_KEYWORDS = [
        'INSERT', 'UPDATE', 'DELETE', 'DROP', 'ALTER',
        'TRUNCATE', 'GRANT', 'REVOKE', 'EXEC'
    ]

    @classmethod
    def validate_query(cls, sql_query: str) -> dict:
        cleaned_sql = sql_query.strip().upper()

        # Ensure query strictly begins with SELECT or WITH
        if not (cleaned_sql.startswith('SELECT') or cleaned_sql.startswith('WITH')):
            return {"valid": False, "reason": "Query must begin with SELECT or WITH."}

        # Check against destructive keywords using word boundaries
        for keyword in cls.FORBIDDEN_KEYWORDS:
            pattern = rf'\\b{keyword}\\b'
            if re.search(pattern, cleaned_sql):
                return {"valid": False, "reason": f"Destructive keyword '{keyword}' prohibited."}

        # Enforce safety limit if missing
        has_limit = bool(re.search(r'\\bLIMIT\\b', cleaned_sql))
        safe_query = sql_query if has_limit else f"{sql_query.rstrip(';')} LIMIT 100;"

        return {"valid": True, "sanitized_sql": safe_query}`,
      explanation: "Ensures generated queries only execute read-only operations by checking start tokens, rejecting destructive keywords using word boundaries, and adding a safety LIMIT."
    },
    liveUrl: "",
    githubUrl: "[FILL: repo URL]"
  },
  {
    id: "movie-rental-analysis",
    title: "Movie Rental Analysis",
    businessQuestion: "Which film categories generate the highest rental revenue, and when do rental demand peaks occur?",
    tools: ["Python", "SQL"],
    dataset: {
      name: "Sakila Sample Database (public DVD rental database), 16,044 rental records across 1,000 films",
      rowCount: "16,044 rental records across 1,000 films",
      source: "Sakila Sample Database (public relational DVD rental sample database for PostgreSQL/MySQL)",
      cleaning: "Calculated rental durations from checkout and return timestamps, verified missing return records, and joined rental, payment, and film tables into analytical datasets."
    },
    keyFindings: [
      "[FILL: finding 1 with number, e.g. Top 3 film categories generated $X in revenue]",
      "[FILL: finding 2 with number, e.g. Weekend rental activity represented Y% of total weekly volume]"
    ],
    problem: "Store managers needed to understand which film categories generate steady revenue and when peak checkout times occur so they could manage inventory turnover and staff shifts effectively.",
    whatIDid: [
      "Queried PostgreSQL tables using multi-table JOINs, GROUP BY, and aggregate calculations.",
      "Exported transaction records into Python and used Pandas for exploratory analysis.",
      "Generated rental timing heatmaps using Seaborn to visualize demand across hours and days.",
      "Evaluated film replacement costs against cumulative rental revenues to measure inventory turnover."
    ],
    recommendation: "[FILL: recommendation based on rental findings, e.g. stock more copies of high-velocity genres and align weekend evening staffing with peak hours]",
    screenshots: [
      {
        src: "/projects/movie-rental-1.png",
        alt: "Rental Velocity Heatmap by Day and Hour",
        caption: "Seaborn heatmap matrix showing rental checkout frequency across weekly hours."
      },
      {
        src: "/projects/movie-rental-2.png",
        alt: "Category Revenue vs Inventory Breakdown",
        caption: "Visual comparison of rental revenue and inventory turnover across film categories."
      }
    ],
    codeSnippet: {
      language: "sql",
      title: "SQL Query: Category Rental Volume and Revenue",
      code: `-- Film Category Rental Volume and Revenue
SELECT 
    c.name AS category_name,
    COUNT(r.rental_id) AS total_rentals,
    SUM(p.amount) AS total_revenue,
    ROUND(AVG(p.amount), 2) AS avg_revenue_per_rental
FROM category c
JOIN film_category fc ON c.category_id = fc.category_id
JOIN film f ON fc.film_id = f.film_id
JOIN inventory i ON f.film_id = i.film_id
JOIN rental r ON i.inventory_id = r.inventory_id
JOIN payment p ON r.rental_id = p.rental_id
GROUP BY c.name
ORDER BY total_revenue DESC;`,
      explanation: "Aggregates rental count, total revenue, and average revenue per transaction across film categories, sorted by revenue."
    },
    liveUrl: "",
    githubUrl: "[FILL: repo URL]"
  }
];
