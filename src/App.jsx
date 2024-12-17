import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { JobListPage } from "@/pages/JobList";
import Profile from "./pages/Profile";
import JobDetail from "./pages/JobDetail";
import Login from "./components/login/Login";
import SignUp from "./components/signup/SignUp";
import JobPost from "./components/jobpost/JobPost";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<JobListPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/job/:id" element={<JobDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/post" element={<JobPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
