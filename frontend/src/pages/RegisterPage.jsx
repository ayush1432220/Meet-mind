import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { User, Mail, Lock } from "lucide-react";

function RegisterPage() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("❌ Passwords do not match!");
      return;
    }

    alert(`🎉 Welcome, ${formData.username}! Your account has been created.`);
    setFormData({ username: "", email: "", password: "", confirmPassword: "" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#E0E5ED]">
      <div
        data-aos="zoom-in"
        className="w-[340px] sm:w-[400px] bg-[#E0E5ED] rounded-3xl p-8
        shadow-[8px_8px_16px_#b8bcc2,-8px_-8px_16px_#ffffff]"
      >
        {/* Header */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Create Account
        </h2>

        {/* Register Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Username */}
          <div
            className="flex items-center gap-3 bg-[#E0E5ED] p-3 rounded-2xl
            shadow-[inset_4px_4px_6px_#b8bcc2,inset_-4px_-4px_6px_#ffffff]"
          >
            <User className="text-gray-500 w-5 h-5" />
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              className="bg-transparent outline-none w-full text-gray-700 placeholder-gray-500"
              required
            />
          </div>

          {/* Email */}
          <div
            className="flex items-center gap-3 bg-[#E0E5ED] p-3 rounded-2xl
            shadow-[inset_4px_4px_6px_#b8bcc2,inset_-4px_-4px_6px_#ffffff]"
          >
            <Mail className="text-gray-500 w-5 h-5" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="bg-transparent outline-none w-full text-gray-700 placeholder-gray-500"
              required
            />
          </div>

          {/* Password */}
          <div
            className="flex items-center gap-3 bg-[#E0E5ED] p-3 rounded-2xl
            shadow-[inset_4px_4px_6px_#b8bcc2,inset_-4px_-4px_6px_#ffffff]"
          >
            <Lock className="text-gray-500 w-5 h-5" />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="bg-transparent outline-none w-full text-gray-700 placeholder-gray-500"
              required
            />
          </div>

          {/* Confirm Password */}
          <div
            className="flex items-center gap-3 bg-[#E0E5ED] p-3 rounded-2xl
            shadow-[inset_4px_4px_6px_#b8bcc2,inset_-4px_-4px_6px_#ffffff]"
          >
            <Lock className="text-gray-500 w-5 h-5" />
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              className="bg-transparent outline-none w-full text-gray-700 placeholder-gray-500"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            data-aos="fade-up"
            className="mt-4 bg-[#E0E5ED] py-3 rounded-2xl font-semibold text-gray-700
              shadow-[6px_6px_12px_#b8bcc2,-6px_-6px_12px_#ffffff]
              hover:shadow-[inset_4px_4px_6px_#b8bcc2,inset_-4px_-4px_6px_#ffffff]
              transition-all duration-300 active:scale-95"
          >
            Register
          </button>

          {/* Login Redirect */}
          <p className="text-center text-gray-600 text-sm mt-4">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-blue-600 font-medium hover:underline"
            >
              Sign in
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;