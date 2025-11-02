import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { User, Lock } from "lucide-react";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Welcome, ${username || "User"}!`);
    setUsername("");
    setPassword("");
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
          Login
        </h2>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Username */}
          <div
            className="flex items-center gap-3 bg-[#E0E5ED] p-3 rounded-2xl
            shadow-[inset_4px_4px_6px_#b8bcc2,inset_-4px_-4px_6px_#ffffff]"
          >
            <User className="text-gray-500 w-5 h-5" />
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="bg-transparent outline-none w-full text-gray-700 placeholder-gray-500"
              required
            />
          </div>

          {/* Remember / Forgot */}
          <div className="flex justify-between text-sm text-gray-600 mt-1">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-pink-500" />
              Remember me
            </label>
            <a href="/forgot-password" className="hover:underline">
              Forgot Password?
            </a>
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
            Login
          </button>

          {/* Register Link */}
          <p className="text-center text-gray-600 text-sm mt-4">
            Don’t have an account?{" "}
            <a href="/register" className="text-pink-500 font-medium hover:underline">
              Register
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;