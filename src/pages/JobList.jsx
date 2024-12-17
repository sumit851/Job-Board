import React, { useEffect, useState } from "react";
import SearchFilters from "@/components/searchfilter/SearchFilters";
import { JobCard } from "@/components/jobcard/JobCard";

import { Link } from "react-router-dom";

export const MOCK_JOBS = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    company: "TechCorp",
    location: "San Francisco, CA",
    type: "full-time",
    salary: { min: 120000, max: 180000 },
    description: "Looking for an experienced frontend developer...",
    requirements: ["5+ years React experience", "TypeScript expertise"],
    benefits: ["Health insurance", "401k matching"],
    postedAt: "2024-03-15T00:00:00Z",
    experienceLevel: "senior",
    remote: true,
  },
  {
    id: "2",
    title: "Senior Frontend Developer",
    company: "TechCorp",
    location: "San Francisco, CA",
    type: "full-time",
    salary: { min: 120000, max: 180000 },
    description: "Looking for an experienced frontend developer...",
    requirements: ["5+ years React experience", "TypeScript expertise"],
    benefits: ["Health insurance", "401k matching"],
    postedAt: "2024-03-15T00:00:00Z",
    experienceLevel: "senior",
    remote: true,
  },
  {
    id: "3",
    title: "Senior Frontend Developer",
    company: "TechCorp",
    location: "San Francisco, CA",
    type: "full-time",
    salary: { min: 120000, max: 180000 },
    description: "Looking for an experienced frontend developer...",
    requirements: ["5+ years React experience", "TypeScript expertise"],
    benefits: ["Health insurance", "401k matching"],
    postedAt: "2024-03-15T00:00:00Z",
    experienceLevel: "senior",
    remote: true,
  },
  {
    id: "4",
    title: "Senior Frontend Developer",
    company: "TechCorp",
    location: "San Francisco, CA",
    type: "full-time",
    salary: { min: 120000, max: 180000 },
    description: "Looking for an experienced frontend developer...",
    requirements: ["5+ years React experience", "TypeScript expertise"],
    benefits: ["Health insurance", "401k matching"],
    postedAt: "2024-03-15T00:00:00Z",
    experienceLevel: "senior",
    remote: true,
  },
];

export const JobListPage = () => {
  const [jobs, setJobs] = useState(MOCK_JOBS);

  useEffect(() => {
    handleSearch({});
  }, []);

  const handleSearch = async (filters) => {
    const query = Object.keys(filters)
      .filter((key) => filters[key])
      .map((key) => `${key}=${encodeURIComponent(filters[key])}`)
      .join("&");

    try {
      const response = await fetch(`/api/jobs?${query}`);
      const data = await response.json();
      setJobs(data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-8">
        <Link to="/">
          <img src="/logo/logo.jpg" alt="Logo" className="h-12 w-12 mr-4" />
        </Link>

        <h1 className="text-3xl font-bold text-gray-900">
          Find Your Next Dream Job
        </h1>
        <div className="flex ml-auto  gap-2">
          <Link to="/post">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Post a Job
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Sign Up
            </button>
          </Link>
          <Link to="/login">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Login
            </button>
          </Link>
        </div>
      </div>
      <SearchFilters onSearch={handleSearch} />
      <div className="mt-8 space-y-6">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};
