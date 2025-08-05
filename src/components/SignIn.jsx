import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../features/user/userSlice";

function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const error = useSelector((state) => state.user.error);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get existing users or empty array
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Push the new user
    const newUser = { ...formData }; // name, email, password, gender
    existingUsers.push(newUser);

    // Save updated array back to localStorage
    localStorage.setItem("users", JSON.stringify(existingUsers));

    console.log("User saved:", newUser);
    navigate("/login"); // redirect to login page
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Sign In
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-600 mb-1">Name</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 mb-1">Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 mb-1">Password</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-600 mb-1">Gender</label>
            <select
              name="gender"
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {error && (
            <p className="text-red-600 text-sm text-center mb-2">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Sign In
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
