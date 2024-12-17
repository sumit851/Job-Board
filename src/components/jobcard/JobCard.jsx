import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Clock, Building2 } from "lucide-react";
import { formatSalary, formatDate } from "../../lib/utils.js";

export const JobCard = ({ job }) => {
  return (
    <Link
      to={`/job/${job.id}`}
      className="block rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
          <div className="mt-2 space-y-2">
            <div className="flex items-center text-gray-600">
              <Building2 className="mr-2 h-4 w-4" />
              <span>{job.company}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <MapPin className="mr-2 h-4 w-4" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Clock className="mr-2 h-4 w-4" />
              <span>{formatDate(job.postedAt)}</span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
            {job.type}
          </span>
          <p className="mt-2 text-sm font-medium text-gray-900">
            {formatSalary(job.salary.min, job.salary.max)}
          </p>
        </div>
      </div>
    </Link>
  );
};
