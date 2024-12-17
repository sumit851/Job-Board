import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const JobPost = () => {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    description: "",
  });
  const navigate = useNavigate();
  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <form></form>
      </div>
    </>
  );
};

export default JobPost;
