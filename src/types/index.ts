export interface ProjectScreenshot {
  src: string;
  alt: string;
  caption: string;
}

export interface ProjectCodeSnippet {
  language: 'sql' | 'python';
  title: string;
  code: string;
  explanation: string;
}

export interface ProjectDataset {
  name: string;
  rowCount: string;
  source: string;
  cleaning: string;
  limitations?: string;
}

export interface Project {
  id: string;
  title: string;
  businessQuestion: string;
  tools: string[];
  dataset: ProjectDataset;
  dataNote?: string; // shown on page for fictional datasets
  keyFindings: string[]; // 2 findings with numbers
  problem: string;
  whatIDid: string[]; // 3-5 bullets
  recommendation: string;
  limitations?: string;
  screenshots: ProjectScreenshot[];
  codeSnippet?: ProjectCodeSnippet;
  liveUrl?: string; // empty string hides button
  githubUrl: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface CertificateInfo {
  title: string;
  grade: string;
  issuer: string;
  conductedBy: string;
  period: string;
  issuedDate: string;
  certificateNo: string;
  fileUrl: string;
}

export interface EducationInfo {
  degree: string;
  institution: string;
  duration: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  location: string;
}

export interface ProfileData {
  name: string;
  role: string;
  bioSentences: string[];
  location: string;
  resumeUrl: string;
  certificate: CertificateInfo;
  education: EducationInfo;
  contact: ContactInfo;
}
