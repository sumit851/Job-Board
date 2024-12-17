import React from "react";
import { useParams } from "react-router-dom";
import { MapPin, Clock, Building2, DollarSign } from "lucide-react";
import { formatSalary, formatDate } from "@/lib/utils";

const JobDetail = () => {
  //   const { jobId } = useParams<{ jobId: string }>();
  //   const job = MOCK_JOBS.find((job) => job.id === jobId);

  //   if (!job) {
  //     return <div>Job not found</div>;
  //   }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-900">hello</h1>
        <div className="mt-4 space-y-2">
          <div className="flex items-center text-gray-600">
            <Building2 className="mr-2 h-5 w-5" />
            <span>hello</span>
          </div>
          <div className="flex items-center text-gray-600">
            <MapPin className="mr-2 h-5 w-5" />
            <span>hello</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="mr-2 h-5 w-5" />
            <span>Hello</span>
          </div>
          <div className="flex items-center text-gray-600">
            <DollarSign className="mr-2 h-5 w-5" />
            <span>Hello</span>
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-900">Description</h2>
          <p className="mt-2 text-gray-700">Hello</p>
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-900">Requirements</h2>
          <ul className="mt-2 list-disc list-inside text-gray-700">
            {/* {job.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))} */}
          </ul>
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-900">Benefits</h2>
          <ul className="mt-2 list-disc list-inside text-gray-700">
            {/* {job.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))} */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
