export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract';
  salary: {
    min: number;
    max: number;
  };
  description: string;
  requirements: string[];
  benefits: string[];
  postedAt: string;
  experienceLevel: 'entry' | 'mid' | 'senior';
  remote: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  applications: Application[];
  savedJobs: string[];
}

export interface Application {
  id: string;
  jobId: string;
  userId: string;
  status: 'pending' | 'reviewing' | 'accepted' | 'rejected';
  appliedAt: string;
  documents: {
    resume: string;
    coverLetter?: string;
  };
}