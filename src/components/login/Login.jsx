// Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [login, { data, loading, error }] = useMutation(LOGIN_USER);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login({ variables: { ...formData } });
      // Handle successful login (e.g., store token, redirect)
    } catch (err) {
      console.error(err);
    }
    useNavigate("/");
  };

  return (
    <div className="max-w-md mx-auto ">
      <h1 className="text-2xl text-center text-red-700">Login</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="w-full p-2 border mb-4"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
          className="w-full p-2 border mb-4"
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2">
          {loading ? "Logging in..." : "Login"}
        </button>
        {error && <p className="text-red-500 mt-2">Error: {error.message}</p>}
      </form>
    </div>
  );
};

export default Login;
