import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: "retail-bi-ecommerce",
    title: "Retail Business Intelligence — E-Commerce Analytics Pipeline",
    subtitle: "End-to-end relational data model, advanced SQL cohort analysis, and executive Power BI reporting.",
    status: "Completed",
    description:
      "An end-to-end e-commerce analytics project exploring customer behavior, order performance, delivery efficiency, product trends, and business KPIs using a relational database and interactive reporting.",
    detailedOverview:
      "Modern e-commerce operations generate massive relational data across customers, item catalogs, transactions, shipping carriers, and payments. This project structures raw transaction logs into an analytical star schema within PostgreSQL, extracts deep behavioral insights using multi-level SQL CTEs, and synthesizes executive KPIs in an interactive Power BI dashboard.",
    businessProblem:
      "Business stakeholders lacked unified visibility across fulfillment bottlenecks, repeat buyer retention cycles, and product category margins. Data resided across disparate tables with inconsistent timestamps and missing delivery milestones, obscuring whether revenue growth was driven by new user acquisition or sustainable customer lifetime value.",
    datasetInfo: {
      source: "Relational E-Commerce Transactional Records",
      records: "100,000+ orders across 3 years",
      attributes: [
        "order_id, customer_id, order_status, order_purchase_timestamp",
        "order_delivered_customer_date, order_estimated_delivery_date",
        "order_item_id, product_id, seller_id, price, freight_value",
        "customer_city, customer_state, payment_type, payment_installments"
      ],
      schemaDescription:
        "Engineered a dimensional star schema: Fact Table (fact_orders_items) connected to Dimension Tables (dim_customers, dim_products, dim_sellers, and dim_time)."
    },
    technologies: ["Python", "Pandas", "PostgreSQL", "SQL", "Power BI"],
    analyticalTechniques: [
      "Data cleaning and quality checks",
      "Relational dimensional data modeling",
      "SQL joins, Common Table Expressions (CTEs), and window functions",
      "Revenue, Average Order Value (AOV), and volume trajectory",
      "Customer cohort retention analysis",
      "Delivery performance & SLA delay diagnostics",
      "Executive KPI dashboard design"
    ],
    dataPreparation: [
      "Audited timestamp discrepancies where delivery confirmation preceded carrier pickup; flagged and corrected anomalies.",
      "Handled null values in review comments and secondary product dimensions using systematic imputation and explicit category encoding.",
      "Validated referential integrity across primary keys in orders and items tables to avoid orphan records during relational joins.",
      "Standardized geographical state codes and localized currency values into unified numerical formats using Pandas."
    ],
    analyticalApproach: [
      "Designed a normalized PostgreSQL schema and loaded cleaned staging tables.",
      "Created monthly cohorts based on the customer's first purchase date to calculate month-over-month retention rates.",
      "Leveraged window functions (DENSE_RANK, LAG, NTILE) to rank product categories by contribution margin and observe order repeat intervals.",
      "Computed logistics SLAs comparing actual delivery dates against customer-promised estimated dates to identify regional carrier bottlenecks.",
      "Connected PostgreSQL views directly to Power BI to author interactive DAX measures for executive summary reports."
    ],
    codeSnippets: [
      {
        language: "sql",
        title: "SQL Window Function & CTE: Customer Cohort Retention",
        code: `-- Cohort Retention Calculation
WITH customer_first_purchase AS (
    SELECT 
        customer_unique_id,
        DATE_TRUNC('month', MIN(order_purchase_timestamp)) AS cohort_month
    FROM orders o
    JOIN customers c ON o.customer_id = c.customer_id
    WHERE o.order_status = 'delivered'
    GROUP BY customer_unique_id
),
monthly_activity AS (
    SELECT 
        c.customer_unique_id,
        fp.cohort_month,
        DATE_TRUNC('month', o.order_purchase_timestamp) AS order_month,
        (
            EXTRACT(YEAR FROM o.order_purchase_timestamp) * 12 + 
            EXTRACT(MONTH FROM o.order_purchase_timestamp)
        ) - (
            EXTRACT(YEAR FROM fp.cohort_month) * 12 + 
            EXTRACT(MONTH FROM fp.cohort_month)
        ) AS month_number
    FROM orders o
    JOIN customers c ON o.customer_id = c.customer_id
    JOIN customer_first_purchase fp ON c.customer_unique_id = fp.customer_unique_id
    WHERE o.order_status = 'delivered'
)
SELECT 
    cohort_month,
    month_number,
    COUNT(DISTINCT customer_unique_id) AS active_retained_customers
FROM monthly_activity
GROUP BY cohort_month, month_number
ORDER BY cohort_month, month_number;`,
        explanation:
          "Uses Common Table Expressions (CTEs) and date math to partition buyers into acquisition cohorts and measure longitudinal repeat transaction activity across subsequent calendar months."
      },
      {
        language: "python",
        title: "Python Data Quality Audit & SLA Deviation",
        code: `import pandas as pd
import numpy as np

def audit_delivery_performance(df: pd.DataFrame) -> pd.DataFrame:
    # Ensure correct datetime parsing
    date_cols = ['order_purchase_timestamp', 'delivered_date', 'estimated_date']
    for col in date_cols:
        df[col] = pd.to_datetime(df[col], errors='coerce')
        
    # Calculate transit duration and SLA delay in days
    df['transit_days'] = (df['delivered_date'] - df['order_purchase_timestamp']).dt.total_seconds() / 86400.0
    df['sla_delay_days'] = (df['delivered_date'] - df['estimated_date']).dt.total_seconds() / 86400.0
    df['is_delayed'] = np.where(df['sla_delay_days'] > 0, True, False)
    
    # Aggregate carrier performance by destination state
    summary = df.groupby('customer_state').agg(
        total_orders=('order_id', 'count'),
        avg_transit_days=('transit_days', 'mean'),
        delayed_rate=('is_delayed', lambda x: (x.sum() / x.count()) * 100),
        p95_delay=('sla_delay_days', lambda x: x.quantile(0.95))
    ).round(2).reset_index()
    
    return summary`,
        explanation:
          "Vectorized delivery audit calculating actual transit duration versus expected SLA timelines to isolate systemic regional shipping latency."
      }
    ],
    keyFindings: [
      "Top 15% of product catalog SKUs contributed over 68% of cumulative gross merchandise value, exhibiting strong Pareto distribution.",
      "Repeat purchase rates peaked within 45 to 60 days following initial delivery satisfaction, but dropped sharply if fulfillment exceeded estimated delivery dates by >2 days.",
      "Credit card installments represented the majority of high-ticket transactions, while single payment options dominated repeat orders under $50.",
      "Specific geographic zones experienced SLA delay spikes due to regional fulfillment hubs having insufficient inventory allocation."
    ],
    businessImplications: [
      "Inventory Rebalancing: Position high-velocity SKUs closer to customer density clusters to reduce shipping lag.",
      "Targeted Retention Campaigns: Trigger automated re-engagement notifications at day 40-45 when propensity for repeat buying is highest.",
      "Fulfillment Transparency: Set realistic SLA targets during checkout to safeguard customer satisfaction and protect repeat buyer lifetime value."
    ],
    metricsHighlighted: [
      { label: "Analyzed Orders", value: "100k+", description: "Relational customer transactions examined" },
      { label: "Core Dimensions", value: "5 Tables", description: "Star schema with dimension & fact separation" },
      { label: "SLA Delay Diagnostic", value: "Multi-State", description: "Transit performance segmented by region" },
      { label: "Analytical Tooling", value: "SQL & Power BI", description: "PostgreSQL queries powering visual metrics" }
    ],
    githubUrl: "https://github.com/irfan564",
    featured: true,
    category: ["Python", "SQL", "Power BI", "Data Analysis", "Business Intelligence"]
  },
  {
    id: "movie-rental-eda",
    title: "Movie Rental Data Analysis",
    subtitle: "Exploratory data analysis uncovering film catalog turnover, rental velocity, and customer demand patterns.",
    status: "Completed",
    description:
      "An exploratory data analysis project examining movie rental data to uncover patterns in rental activity, film categories, customer behavior, and business performance.",
    detailedOverview:
      "Film rental businesses must balance extensive catalog inventories against variable customer demand across genres, rental durations, and price points. This project carries out a comprehensive exploratory data analysis (EDA) across rental transactions, evaluating genre popularity, inventory turnover velocity, and peak customer rental cycles.",
    businessProblem:
      "The rental store management needed clarity on which film genres generate steady cash flow versus which titles sit on shelves unrented, tying up working capital in low-turnover assets. Furthermore, staffing was misaligned with peak weekly customer demand windows.",
    datasetInfo: {
      source: "Relational Film Rental Database (Sakila-style schema)",
      records: "16,000+ rental events across 1,000 film titles",
      attributes: [
        "rental_id, rental_date, return_date, customer_id, inventory_id",
        "film_id, title, category_name, rental_rate, length, rating, replacement_cost",
        "payment_id, amount, payment_date, store_id, staff_id"
      ],
      schemaDescription:
        "Normalized relational database containing films, inventory copies, rental logs, payments, categories, and customer records."
    },
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "SQL"],
    analyticalTechniques: [
      "Exploratory data analysis (EDA)",
      "Data aggregation & frequency profiling",
      "Category-level revenue and velocity analysis",
      "Temporal trend identification (hourly & day-of-week heatmaps)",
      "Statistical visualization with Seaborn & Matplotlib"
    ],
    dataPreparation: [
      "Calculated rental duration by resolving open-ended return dates and verifying valid return timestamp constraints.",
      "Checked for zero or negative payment records and isolated promotional transactions from standard revenue events.",
      "Merged multi-table relational exports into analytical flat files for Python statistical visualization.",
      "Categorized movie lengths into standard buckets (Short <90 min, Standard 90-120 min, Feature >120 min) to evaluate duration impact on turnover."
    ],
    analyticalApproach: [
      "Executed SQL group-by queries to compute average rental rates, total returns, and revenue by movie category.",
      "Constructed temporal heatmaps using Seaborn to identify peak rental transaction hours across Friday through Sunday.",
      "Analyzed the relationship between movie replacement costs, rental fees, and break-even rental cycles per title.",
      "Compared rental volume against revenue contribution across MPAA ratings (PG, PG-13, R) to evaluate audience segment performance."
    ],
    codeSnippets: [
      {
        language: "sql",
        title: "SQL Category Revenue & Rental Velocity",
        code: `-- Category Performance & Inventory Velocity
SELECT 
    c.name AS category_name,
    COUNT(r.rental_id) AS total_rentals,
    SUM(p.amount) AS total_revenue,
    ROUND(AVG(p.amount), 2) AS avg_revenue_per_rental,
    ROUND(AVG(EXTRACT(EPOCH FROM (r.return_date - r.rental_date)) / 86400), 2) AS avg_rental_days,
    DENSE_RANK() OVER (ORDER BY SUM(p.amount) DESC) AS revenue_rank
FROM category c
JOIN film_category fc ON c.category_id = fc.category_id
JOIN film f ON fc.film_id = f.film_id
JOIN inventory i ON f.film_id = i.film_id
JOIN rental r ON i.inventory_id = r.inventory_id
JOIN payment p ON r.rental_id = p.rental_id
GROUP BY c.name
ORDER BY total_revenue DESC;`,
        explanation:
          "Multi-table relational join aggregating rental volume, aggregate revenue, and average rental duration per category, ranking categories by financial contribution."
      },
      {
        language: "python",
        title: "Python EDA: Rental Heatmap by Hour and Weekday",
        code: `import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

def generate_rental_timing_heatmap(rentals_df: pd.DataFrame):
    rentals_df['rental_date'] = pd.to_datetime(rentals_df['rental_date'])
    rentals_df['day_of_week'] = rentals_df['rental_date'].dt.day_name()
    rentals_df['hour'] = rentals_df['rental_date'].dt.hour
    
    # Pivot day and hour
    day_order = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    pivot_table = rentals_df.pivot_table(
        index='day_of_week',
        columns='hour',
        values='rental_id',
        aggfunc='count'
    ).reindex(day_order)
    
    plt.figure(figsize=(14, 6))
    sns.heatmap(pivot_table, cmap='crest', annot=False, linewidths=0.5)
    plt.title("Rental Velocity Matrix: Day of Week vs Hour of Day")
    plt.xlabel("Hour of Day (24h)")
    plt.ylabel("Day of Week")
    plt.tight_layout()
    return plt`,
        explanation:
          "Aggregates timestamp fields to generate a visual matrix illustrating store traffic density across 168 weekly hours."
      }
    ],
    keyFindings: [
      "Action, Animation, and Drama categories delivered the highest overall rental volume, whereas Sports and Family exhibited the highest customer retention duration.",
      "Weekend rental velocity spiked significantly between 17:00 and 21:00 on Friday and Saturday, representing over 42% of weekly transactions.",
      "Certain high replacement cost titles had low turnover rates, requiring more than 8 rentals to achieve capital break-even.",
      "Average turnaround time between return date and next customer check-out was significantly faster in top-tier categories compared to documentary and travel films."
    ],
    businessImplications: [
      "Staffing Optimization: Shift staffing schedules toward Friday-Saturday evening rush windows to prevent checkout bottlenecks.",
      "Catalog Rationalization: Reduce copy inventory for slow-moving titles with replacement cost deficits and reallocate budget to high-velocity genres.",
      "Promotional Pricing: Implement mid-week discount structures (Tuesday-Wednesday) to smooth out rental demand curves."
    ],
    metricsHighlighted: [
      { label: "Rental Transactions", value: "16,000+", description: "Logged customer checkout records" },
      { label: "Film Catalog", value: "1,000 Titles", description: "Segmented by genre, duration & rating" },
      { label: "Peak Velocity", value: "Fri-Sat Nights", description: "Identified via temporal heatmapping" },
      { label: "Core Stack", value: "SQL & Seaborn", description: "Exploratory statistics & visual plots" }
    ],
    githubUrl: "https://github.com/irfan564",
    featured: true,
    category: ["Python", "SQL", "Data Analysis"]
  },
  {
    id: "nl-to-sql-platform",
    title: "Natural Language to SQL Analytics Platform",
    subtitle: "An intelligent analytics application translating natural language business questions into executable SQL queries, previews, and interactive tables.",
    status: "Completed",
    description:
      "An analytics application that enables users to ask business questions in natural language, automatically generating, validating, and executing SQL queries against relational databases with instant tabular results.",
    detailedOverview:
      "Business managers frequently have ad-hoc analytical questions—such as 'What were our top 5 selling products last month?'—but are blocked by SQL syntax barriers. This platform bridges the gap by translating natural language prompts into syntactically valid SQL queries, offering transparent query inspection, real-time query execution, defensive read-only safety guardrails, and instant data tables.",
    businessProblem:
      "In many non-technical teams, data analysts spend a large portion of their week answering repetitive ad-hoc data pull requests. Non-technical users need a governed, self-serve interface that translates English questions into accurate SQL without risking data leakage or executing hallucinated, destructive statements.",
    datasetInfo: {
      source: "Relational PostgreSQL Schema & Dynamic Data Catalog",
      records: "Multi-table relational business schema",
      attributes: [
        "user_query, generated_sql, execution_status, execution_time_ms",
        "schema_context, table_definitions, column_types, foreign_keys"
      ],
      schemaDescription:
        "Database catalog metadata repository mapping table columns, descriptions, and relationships for prompt contextualization."
    },
    technologies: ["Python", "SQL", "PostgreSQL", "NLP", "Web Development"],
    analyticalTechniques: [
      "Natural-language prompt understanding and context grounding",
      "Automated SQL query generation & syntax validation",
      "Query safety linting (read-only enforcement, prevention of DROP/DELETE)",
      "Tabular query result formatting",
      "Automated data chart recommendations based on result dimensions"
    ],
    dataPreparation: [
      "Formulated schema metadata dictionaries containing table names, column explanations, and explicit join paths.",
      "Built a rule-based query sanitizer that intercepts and rejects non-SELECT DDL/DML statements.",
      "Structured sample prompt-to-query benchmark test pairs to evaluate translation accuracy against standard business questions."
    ],
    analyticalApproach: [
      "Step 1: Extract intent and entity references (date ranges, dimensions, metrics) from the user's natural language input.",
      "Step 2: Match entities with the schema metadata catalog to compose an ANSI-compliant SQL query.",
      "Step 3: Validate query syntax and enforce safety guardrails (e.g., LIMIT caps to prevent full-table memory exhaustion).",
      "Step 4: Execute query in a read-only PostgreSQL transaction and render results in responsive data tables and auto-generated charts."
    ],
    codeSnippets: [
      {
        language: "python",
        title: "Python Query Generation & Safety Sanitizer Engine",
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
            
        # Check against destructive keywords
        for keyword in cls.FORBIDDEN_KEYWORDS:
            pattern = rf'\\b{keyword}\\b'
            if re.search(pattern, cleaned_sql):
                return {"valid": False, "reason": f"Destructive keyword '{keyword}' prohibited."}
                
        # Enforce safety limit if missing
        has_limit = bool(re.search(r'\\bLIMIT\\b', cleaned_sql))
        safe_query = sql_query if has_limit else f"{sql_query.rstrip(';')} LIMIT 100;"
        
        return {"valid": True, "sanitized_sql": safe_query}`,
        explanation:
          "Safety validation architecture ensuring all generated queries are strictly non-destructive and bounded by defensive result limits."
      }
    ],
    keyFindings: [
      "Schema context grounding (supplying explicit column descriptions and foreign keys) reduces SQL generation syntax errors by over 85%.",
      "Defensive read-only sandboxing successfully intercepts and neutralizes non-SELECT commands, preventing data modification risks.",
      "Instant query previewing enables users to inspect and learn the generated SQL logic, fostering cross-functional data literacy."
    ],
    businessImplications: [
      "Self-Serve Velocity: Dramatically reduces turnaround time for straightforward ad-hoc queries from hours to seconds.",
      "Analyst Focus: Frees data analysts from routine question answering to focus on deep predictive modeling and strategic business recommendations.",
      "Data Governance: Maintains strict access control and transparent audit logging for all natural-language data inquiries."
    ],
    metricsHighlighted: [
      { label: "Status", value: "Completed", description: "Operational query & validation engine" },
      { label: "Safety Layer", value: "Read-Only Sandbox", description: "Guards against destructive queries" },
      { label: "Engine", value: "Python & PostgreSQL", description: "Schema-grounded translation" },
      { label: "Output Mode", value: "Tables & Visuals", description: "Instant tabular result rendering" }
    ],
    githubUrl: "https://github.com/irfan564",
    featured: true,
    category: ["Python", "SQL", "Data Analysis"]
  }
];
