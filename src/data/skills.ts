export interface SkillDetail {
  name: string;
  category: string;
  tagline: string;
  description: string;
  practicalApplication: string;
  popularFunctions: string[];
}

export interface SkillCategoryGroup {
  id: string;
  categoryName: string;
  categoryBadge: string;
  categoryDescription: string;
  skills: SkillDetail[];
}

export const skillCategories: SkillCategoryGroup[] = [
  {
    id: "programming",
    categoryName: "Programming & Data Analysis",
    categoryBadge: "Core Analytics Code",
    categoryDescription: "Writing structured scripts to extract, manipulate, vectorize, and evaluate complex datasets programmatically.",
    skills: [
      {
        name: "Python",
        category: "Programming & Data Analysis",
        tagline: "General-Purpose Analytical Programming",
        description: "Primary language for end-to-end data workflows, automating ETL routines, and parsing raw file structures.",
        practicalApplication: "Scripting automated data ingestion pipelines, cleaning dirty datasets, and performing statistical summaries.",
        popularFunctions: ["Functions & Lambdas", "List Comprehensions", "File I/O (CSV/JSON)", "Virtual Environments"]
      },
      {
        name: "Pandas",
        category: "Programming & Data Analysis",
        tagline: "Tabular Data Manipulation & Transformation",
        description: "High-performance data frames for slicing, aggregating, pivoting, merging, and reshaping multidimensional tables.",
        practicalApplication: "Filtering anomalies, computing group-by aggregations, joining relational datasets, and datetime indexing.",
        popularFunctions: ["groupby()", "merge() & concat()", "pivot_table()", "apply()", "fillna() / dropna()"]
      },
      {
        name: "NumPy",
        category: "Programming & Data Analysis",
        tagline: "Vectorized Numerical & Mathematical Operations",
        description: "High-performance array computing powering fast vector calculations and array mathematical operations.",
        practicalApplication: "Calculating summary statistics, array transformations, conditional logic masking, and matrix calculations.",
        popularFunctions: ["np.where()", "np.select()", "Vectorized Math", "Array Slicing", "Statistical Functions"]
      },
      {
        name: "Matplotlib",
        category: "Programming & Data Analysis",
        tagline: "Foundational Static Data Visualization",
        description: "Fine-grained plotting engine used to construct bespoke visual charts and distribution plots during EDA.",
        practicalApplication: "Plotting histogram distributions, scatter plots for correlation analysis, and customized multi-axis charts.",
        popularFunctions: ["plt.subplots()", "Histogram Bins", "Custom Labels & Scales", "Figure Layouts"]
      },
      {
        name: "Seaborn",
        category: "Programming & Data Analysis",
        tagline: "Statistical Visualization & Exploratory Graphics",
        description: "High-level statistical graphics library built on Matplotlib with aesthetic default palettes and themes.",
        practicalApplication: "Creating correlation heatmaps, box plots for outlier detection, and pairplots for feature exploration.",
        popularFunctions: ["sns.heatmap()", "sns.boxplot()", "sns.histplot()", "sns.pairplot()"]
      }
    ]
  },
  {
    id: "databases",
    categoryName: "Databases & Querying",
    categoryBadge: "Relational Architecture",
    categoryDescription: "Designing, querying, and optimizing relational data structures to answer complex analytical business questions.",
    skills: [
      {
        name: "SQL",
        category: "Databases & Querying",
        tagline: "Declarative Structured Query Language",
        description: "The core language for extracting, filtering, joining, and calculating analytical metrics across structured databases.",
        practicalApplication: "Building multi-table analytical queries, writing CTEs for clean logic separation, and computing running totals.",
        popularFunctions: ["INNER / LEFT / FULL JOIN", "Common Table Expressions (WITH)", "GROUP BY & HAVING", "Subqueries"]
      },
      {
        name: "PostgreSQL",
        category: "Databases & Querying",
        tagline: "Enterprise Relational Database Management",
        description: "Robust open-source relational database system with advanced analytical SQL extensions and data types.",
        practicalApplication: "Managing schema constraints, primary/foreign key relations, indexing analytical query paths, and date manipulation.",
        popularFunctions: ["Window Functions (RANK, DENSE_RANK)", "DATE_TRUNC & INTERVAL", "COALESCE & CASE WHEN", "EXPLAIN ANALYZE"]
      }
    ]
  },
  {
    id: "bi",
    categoryName: "Business Intelligence & Reporting",
    categoryBadge: "Visual Insights",
    categoryDescription: "Synthesizing relational tables into actionable executive dashboards, KPI monitors, and decision-support interfaces.",
    skills: [
      {
        name: "Power BI",
        category: "Business Intelligence & Reporting",
        tagline: "Interactive Dashboarding & Semantic Modeling",
        description: "Microsoft's enterprise BI suite for crafting connected report pages, data models, and drill-through analytics.",
        practicalApplication: "Establishing star schemas, authoring DAX measures for YTD/MTD calculations, and designing interactive slicers.",
        popularFunctions: ["Star Schema Modeling", "DAX Measures (CALCULATE, SUMX)", "Interactive Slicers", "Drill-Through Actions"]
      },
      {
        name: "Microsoft Excel",
        category: "Business Intelligence & Reporting",
        tagline: "Ad-Hoc Analysis, Modeling & Quick Auditing",
        description: "Everyday analytical workhorse for exploratory sheet auditing, quick scenario testing, and pivot table synthesis.",
        practicalApplication: "Rapid data validation, building dynamic pivot tables, writing nested lookups, and executive summary tables.",
        popularFunctions: ["XLOOKUP & INDEX/MATCH", "Pivot Tables & Pivot Charts", "COUNTIFS / SUMIFS", "Conditional Formatting"]
      },
      {
        name: "KPI Reporting",
        category: "Business Intelligence & Reporting",
        tagline: "Executive Metric Definition & Tracking",
        description: "Formulating unambiguous metrics (AOV, churn rate, cohort retention, gross margin) aligned with business targets.",
        practicalApplication: "Translating stakeholder OKRs into measurable mathematical definitions and tracking period-over-period variance.",
        popularFunctions: ["Variance Analysis", "YoY / MoM Growth Rates", "Cohort Retention Rates", "Average Order Value (AOV)"]
      },
      {
        name: "Data Visualization",
        category: "Business Intelligence & Reporting",
        tagline: "Cognitive Visual Design for Clarity",
        description: "Choosing the optimal visual representation to minimize cognitive load and highlight core trends without clutter.",
        practicalApplication: "Selecting appropriate charts (bar vs line vs scatter), designing consistent palettes, and decluttering report visuals.",
        popularFunctions: ["Visual Hierarchy", "Color Psychology & Contrast", "Chart Selection Matrix", "Information Density Management"]
      }
    ]
  },
  {
    id: "preparation",
    categoryName: "Data Preparation & Quality",
    categoryBadge: "Reliability & Hygiene",
    categoryDescription: "Ensuring the upstream integrity, consistency, and structural cleanliness of data before modeling or analysis.",
    skills: [
      {
        name: "Data Cleaning",
        category: "Data Preparation & Quality",
        tagline: "Sanitizing Unstructured & Dirty Datasets",
        description: "Systematically resolving duplicate rows, missing entries, trailing whitespaces, and irregular string casing.",
        practicalApplication: "Imputing or dropping null values with clear rationale, stripping corrupt characters, and formatting dates.",
        popularFunctions: ["Deduplication", "Missing Value Treatment", "Type Casting", "String Standardization"]
      },
      {
        name: "Data Validation",
        category: "Data Preparation & Quality",
        tagline: "Enforcing Integrity Rules & Constraints",
        description: "Verifying that datasets comply with expected ranges, uniqueness constraints, schema schemas, and business logic.",
        practicalApplication: "Asserting non-negative order values, confirming referential key matches, and validating timestamp chronological order.",
        popularFunctions: ["Domain Range Checks", "Referential Integrity Audits", "Schema Validation", "Format Regular Expressions"]
      },
      {
        name: "Exploratory Data Analysis (EDA)",
        category: "Data Preparation & Quality",
        tagline: "Statistical Discovery & Hypothesis Framing",
        description: "Thorough initial investigation of distributions, correlations, outliers, and patterns before jumping to conclusions.",
        practicalApplication: "Inspecting skewness, IQR outlier detection, correlation matrices, and identifying demographic clustering.",
        popularFunctions: ["Summary Statistics (describe())", "Outlier IQR Profiling", "Correlation Analysis", "Distribution Checks"]
      },
      {
        name: "Data Transformation",
        category: "Data Preparation & Quality",
        tagline: "Reshaping & Feature Engineering",
        description: "Converting wide data to long formats, binning continuous variables, and deriving analytical calculated columns.",
        practicalApplication: "Creating age/tenure buckets, normalizing skewed features, creating RFM segmentation fields, and unpivoting metrics.",
        popularFunctions: ["Binning & Discretization", "One-Hot / Categorical Encoding", "Log Transformations", "Melt & Pivot Reshaping"]
      }
    ]
  }
];
