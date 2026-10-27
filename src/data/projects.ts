import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: "retail-bi-ecommerce",
    title: "Retail BI - E-Commerce Analytics",
    businessQuestion: "Which product categories and customer cohorts drive repeat revenue, and where are delivery bottlenecks occurring?",
    tools: ["Python", "PostgreSQL", "Power BI", "DAX"],
    dataset: {
      name: "Brazilian E-Commerce Public Dataset by Olist (Kaggle), 99,441 orders across 9 relational tables",
      rowCount: "99,441 orders (96,100 unique customers, 2016-2018)",
      source: "Olist public dataset on Kaggle (Brazilian e-commerce marketplace transactions)",
      cleaning: "Resolved null delivery timestamps, corrected order status inconsistencies, normalized customer IDs across 9 relational tables, and calculated derived metrics like delivery delay and on-time flags."
    },
    keyFindings: [
      "On-time deliveries averaged a review score of 4.3/5, dropping to 3.0 for orders 1-5 days late, and 1.7 for orders more than 5 days late.",
      "Sao Paulo (SP) alone represented 42% of all orders (41,746) and 38% of total revenue (R$5.2M of R$13.59M)."
    ],
    problem: "Management lacked unified visibility into customer repeat purchase cycles, category revenues, and regional shipping delays across disparate transactional tables.",
    whatIDid: [
      "Extracted and cleaned multi-table transactional records using Python (Pandas) across 9 relational tables.",
      "Designed a dimensional star schema in PostgreSQL with fact and dimension tables linking customers, orders, items, payments, and reviews.",
      "Wrote 27 SQL queries using CTEs and window functions (LAG, RANK, NTILE) to compute delivery performance metrics and category revenues.",
      "Built an interactive Power BI dashboard with DAX measures tracking R$13.59M total revenue, 96.10K unique customers, average order value R$137.75, average review score 4.09, and average delivery time 12.09 days.",
      "Identified top categories by revenue: health_beauty R$1.26M, watches_gifts R$1.21M, bed_bath_table R$1.04M."
    ],
    recommendation: "Set more realistic delivery estimates and alert customers early when an order is likely to be late. Findings are associations, not proof of causation.",
    limitations: "Findings are associations, not proof of causation. Dataset covers Brazilian e-commerce orders from 2016-2018 only. About 74% of payment records use credit card. Currency is Brazilian Real (R$).",
    screenshots: [
      {
        src: "/images/retail-dashboard.png",
        alt: "Retail BI Power BI executive dashboard",
        caption: "Power BI executive dashboard tracking R$13.59M revenue, 96.10K unique customers, average order value R$137.75, average review score 4.09, and average delivery time 12.09 days."
      }
    ],
    codeSnippet: {
      language: "sql",
      title: "SQL CTE: Delivery Delay vs Review Score",
      code: `-- Delivery delay bucket vs average review score
WITH delivery_stats AS (
    SELECT
        o.order_id,
        EXTRACT(DAY FROM (
            o.order_delivered_customer_date - o.order_estimated_delivery_date
        )) AS delay_days,
        r.review_score
    FROM orders o
    JOIN order_reviews r ON o.order_id = r.order_id
    WHERE o.order_delivered_customer_date IS NOT NULL
),
bucketed AS (
    SELECT
        CASE
            WHEN delay_days <= 0 THEN 'On time or early'
            WHEN delay_days BETWEEN 1 AND 5 THEN '1-5 days late'
            ELSE 'More than 5 days late'
        END AS delay_bucket,
        review_score
    FROM delivery_stats
)
SELECT
    delay_bucket,
    ROUND(AVG(review_score), 1) AS avg_review_score,
    COUNT(*) AS order_count
FROM bucketed
GROUP BY delay_bucket
ORDER BY avg_review_score DESC;`,
      explanation: "Groups orders into delivery delay buckets using a CTE, then calculates the average review score per bucket to quantify the association between late delivery and lower ratings."
    },
    liveUrl: "",
    githubUrl: "https://github.com/irfan564/retail-business-intelligence"
  },
  {
    id: "indian-tech-jobs-2026",
    title: "India Tech Jobs 2026 - NL-to-SQL Portal",
    businessQuestion: "Can a non-technical person ask plain-English questions about Indian tech job listings and get accurate, trustworthy answers?",
    tools: ["Python", "Django", "PostgreSQL", "OpenRouter LLMs", "Chart.js"],
    dataset: {
      name: "India Tech Jobs 2026 (Kaggle), 23,201 scraped job listings",
      rowCount: "23,201 Indian tech job records",
      source: "Kaggle dataset (India Tech Jobs 2026), stored in Supabase PostgreSQL",
      cleaning: "Parsed salary ranges into standardized min/max/midpoint bounds (LPA), normalised job titles and city names, derived analytical attributes, and flagged 88.1% of listings as undisclosed-salary records."
    },
    keyFindings: [
      "Only 11.9% of listings (2,766 of 23,201) disclose salary. Among those, the average is 15.3 LPA. Counting undisclosed records as zero gives approximately 1.8 LPA, a misleading figure the portal explicitly avoids.",
      "Benchmark: 16 of 23 hand-verified test queries returned the correct result (69.6%). The AI initially averaged all salaries including undisclosed ones; I found the discrepancy, traced the cause, and fixed the prompt."
    ],
    problem: "Recruiters and hiring managers needed tech job market trends and salary benchmarks without writing SQL queries, and existing salary summaries were misleading because undisclosed salaries were counted as zero.",
    whatIDid: [
      "Built a Django web application connected to a Supabase PostgreSQL database storing 23,201 job market records.",
      "Implemented natural language to SQL translation using OpenRouter (primary model: Llama 3.3 70B with fallbacks), with system prompt tuned to exclude undisclosed-salary rows from averages.",
      "Created a multi-step SQL safety validator: single statement, SELECT or WITH only, table allow-list, read-only transaction, 5-second timeout, LIMIT 500.",
      "Built automatic Chart.js visualisations for aggregation results and pre-computed KPI tiles.",
      "Found and fixed a prompt bug where the LLM averaged all salaries including nulls, spotted by comparing AI output against my own chart."
    ],
    recommendation: "Treat salary disclosure rate as a data quality signal in job platform rankings. Expanding the fallback chain and adding plain-English query explanations would improve user trust.",
    limitations: "Benchmark accuracy is 69.6% on 23 hand-verified queries. Complex or ambiguous queries can still fail. The dataset covers 2026 scraped listings only and may not reflect actual market salaries.",
    screenshots: [
      {
        src: "/images/nl2sql-interface.png",
        alt: "India Tech Jobs portal overview with KPI tiles",
        caption: "Portal overview showing 23,201 total listings, 15.3 LPA average (disclosed only), 11.9% salary disclosure rate, and 9.3% remote roles."
      },
      {
        src: "/images/nl2sql-analysis.png",
        alt: "NL-to-SQL query engine with generated PostgreSQL",
        caption: "SQL Search tab: plain-English question converted to PostgreSQL by Llama 3.3-70b-instruct, with execution time, rows returned, and model attribution."
      }
    ],
    codeSnippet: {
      language: "python",
      title: "Python: SQL Safety Validator (read-only enforcement)",
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

        if not (cleaned_sql.startswith('SELECT') or cleaned_sql.startswith('WITH')):
            return {"valid": False, "reason": "Query must begin with SELECT or WITH."}

        for keyword in cls.FORBIDDEN_KEYWORDS:
            pattern = rf'\b{keyword}\b'
            if re.search(pattern, cleaned_sql):
                return {"valid": False, "reason": f"Destructive keyword '{keyword}' prohibited."}

        has_limit = bool(re.search(r'\bLIMIT\b', cleaned_sql))
        safe_query = sql_query if has_limit else f"{sql_query.rstrip(';')} LIMIT 500;"

        return {"valid": True, "sanitized_sql": safe_query}`,
      explanation: "Validates that generated SQL is read-only: checks for SELECT/WITH start token, rejects destructive keywords, and adds LIMIT 500 if missing."
    },
    liveUrl: "",
    githubUrl: "https://github.com/irfan564/SQL-NLP"
  },
  {
    id: "hr-attrition-excel",
    title: "HR Attrition Analysis Dashboard (Excel)",
    businessQuestion: "Which employee groups are most associated with attrition, and what patterns does the data show?",
    tools: ["Excel"],
    dataset: {
      name: "IBM HR Analytics Employee Attrition dataset (Kaggle), 1,470 employees — fictional dataset",
      rowCount: "1,470 employee records",
      source: "IBM HR Analytics Employee Attrition dataset on Kaggle",
      cleaning: "Applied COUNTIFS, SUMIFS, and AVERAGEIFS to build summary tables. Used QUARTILE to segment monthly income, INDEX/MATCH for lookups, and nested IF for categorical bucketing. No PivotTables or slicers used."
    },
    dataNote: "Important: the IBM HR Analytics Employee Attrition dataset is a fictional dataset created by IBM data scientists. It does not contain data about real employees.",
    keyFindings: [
      "237 of 1,470 employees left (16.1%). Employees who work overtime left at 30.5% vs 10.4% for those who do not, 2.9 times higher.",
      "Attrition is 29.8% in the first two years and 8.1% after 11 or more years. Sales Representatives have the highest attrition at 39.8% (83 employees). The lowest income quartile lost 29.3% vs 10.3% in the highest."
    ],
    problem: "HR managers needed a summary view of attrition patterns by overtime, tenure, job role, and income, built entirely in Excel using formulas rather than PivotTables.",
    whatIDid: [
      "Built formula-based summary tables using COUNTIFS, SUMIFS, AVERAGEIFS, INDEX/MATCH, nested IF, and QUARTILE across 1,470 rows.",
      "Segmented attrition by overtime status, tenure band (first two years vs 11+ years), job role, and monthly income quartile.",
      "Created charts showing attrition rate by each segment, with conditional formatting to highlight the highest-risk groups.",
      "Applied data validation drop-downs for controlled data entry in summary sections.",
      "Documented all formulas so the workbook is auditable and reproducible."
    ],
    recommendation: "Focus retention efforts on employees in their first two years, those working overtime, Sales Representatives, and the lowest income quartile. These are associations in a fictional dataset, apply cautiously to real decisions.",
    limitations: "The dataset is fictional (created by IBM data scientists) and does not represent real employees. All findings are associations, not causes. The dashboard uses formula-based summary tables only, no PivotTables or slicers.",
    screenshots: [
      {
        src: "/images/hr-dashboard.png",
        alt: "HR Attrition Excel dashboard",
        caption: "Excel dashboard showing attrition rate by overtime status (30.5% vs 10.4%), tenure band (29.8% in first two years), job role, and income quartile across 1,470 fictional employee records."
      }
    ],
    liveUrl: "",
    githubUrl: "https://github.com/irfan564/HR_Attrition_Excel_Project"
  },
  {
    id: "pet-hospital-booking",
    title: "Pet Hospital Booking System",
    businessQuestion: "Can a single web application manage pet appointment booking for customers, hospitals, and admins with a built-in chatbot for pet questions?",
    tools: ["Python", "Django", "HTML", "CSS", "JavaScript", "Gemini API"],
    dataset: {
      name: "No external dataset, this is an application project",
      rowCount: "No external dataset",
      source: "Application built from scratch",
      cleaning: "N/A"
    },
    keyFindings: [
      "Three separate user modules, Customer, Hospital, and Admin, each with distinct workflows for booking, managing, and administering appointments.",
      "A Gemini API-powered chatbot answers pet-related questions directly within the customer interface."
    ],
    problem: "Pet owners had no easy way to book appointments online. Hospitals had no central system to manage their bookings. There was no quick way to answer basic pet health questions.",
    whatIDid: [
      "Designed and built three user modules in Django: Customer (book and view appointments), Hospital (manage and update bookings), and Admin (manage all records and users).",
      "Integrated the Gemini API to power a chatbot that answers pet-related questions within the customer interface.",
      "Built the front end using HTML, CSS, and JavaScript with a responsive layout.",
      "Implemented authentication and role-based access control so each user type sees only their module.",
      "Tested all booking flows end to end across all three modules."
    ],
    recommendation: "Adding email or SMS notifications for booking confirmations and reminders would improve the experience for both customers and hospitals.",
    limitations: "This is a demonstration project. It does not process real payments or connect to live hospital systems.",
    screenshots: [
      {
        src: "/images/pethospital-home.png",
        alt: "Pet Hospital Booking System home page",
        caption: "Home page with customer-facing interface and chatbot entry point."
      },
      {
        src: "/images/pethospital-booking.png",
        alt: "Pet hospital appointment booking form",
        caption: "Appointment booking form with date, time, and hospital selection for the customer module."
      }
    ],
    liveUrl: "",
    githubUrl: "https://github.com/irfan564/pet_hospital---Copy"
  }
];
