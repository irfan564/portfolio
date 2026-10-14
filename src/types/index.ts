export interface Skill {
  name: string;
  category: 'programming' | 'database' | 'bi' | 'preparation';
  icon: string;
  description: string;
  keyUseCases: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  status: 'Completed' | 'In Progress / Planned';
  description: string;
  detailedOverview: string;
  businessProblem: string;
  datasetInfo: {
    source: string;
    records?: string;
    attributes: string[];
    schemaDescription: string;
  };
  technologies: string[];
  analyticalTechniques: string[];
  dataPreparation: string[];
  analyticalApproach: string[];
  codeSnippets?: {
    language: 'sql' | 'python';
    title: string;
    code: string;
    explanation: string;
  }[];
  keyFindings: string[];
  businessImplications: string[];
  metricsHighlighted?: {
    label: string;
    value: string;
    change?: string;
    description: string;
  }[];
  githubUrl: string;
  featured: boolean;
  category: ('Python' | 'SQL' | 'Power BI' | 'Data Analysis' | 'Business Intelligence')[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  type: string;
  description: string;
  highlights: string[];
}
