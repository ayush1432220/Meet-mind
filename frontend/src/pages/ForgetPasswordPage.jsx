import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Mail } from "lucide-react";

function ForgotPasswordPage() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert("⚠️ Please enter your email address!");
      return;
    }
    alert(`📩 Password reset link sent to: ${email}`);
    setEmail("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#E0E5ED]">
      <div
        data-aos="zoom-in"
        className="w-[340px] sm:w-[400px] bg-[#E0E5ED] rounded-3xl p-8
        shadow-[8px_8px_16px_#b8bcc2,-8px_-8px_16px_#ffffff]"
      >
        {/* Header */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Forgot Password
        </h2>

        <p
          data-aos="fade-up"
          className="text-center text-gray-600 text-sm mb-8"
        >
          Enter your registered email address, and we’ll send you a link to
          reset your password.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Email Field */}
          <div
            className="flex items-center gap-3 bg-[#E0E5ED] p-3 rounded-2xl
            shadow-[inset_4px_4px_6px_#b8bcc2,inset_-4px_-4px_6px_#ffffff]"
          >
            <Mail className="text-gray-500 w-5 h-5" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
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
            Send Reset Link
          </button>

          {/* Back to Login */}
          <p className="text-center text-gray-600 text-sm mt-4">
            Remember your password?{" "}
            <a
              href="/login"
              className="text-blue-600 font-medium hover:underline"
            >
              Go back to Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;