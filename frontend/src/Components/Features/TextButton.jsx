import React from "react";
import { Timer } from "lucide-react";


function TextButton() {
  const containerStyle = {
    background:
      "linear-gradient(to bottom right, #eef4f9 0%, #eef4f9 85%, #f7f9fb 100%)",
    minHeight: "60vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const buttonShadowStyle = {
    
    boxShadow:
      "0 15px 30px rgba(37, 99, 235, 0.4), 0 5px 10px rgba(37, 99, 235, 0.2)",
    transition: "all 0.3s ease",
  };

 
  return (
    <div style={containerStyle}>
  <div className="text-center max-w-5xl mx-auto py-10">
    <h1 className="text-3xl sm:text-6xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
      Powerful AI Features for{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-600">
        Modern Teams
      </span>
    </h1>

    <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
      Discover how Meetmind AI transforms your meeting experience with
      cutting-edge artificial intelligence
    </p>

    <button
      className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white rounded-full 
      bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 
      focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50
      transform active:scale-[0.98] transition duration-150 ease-in-out"
      style={{
        boxShadow:
          "0 15px 30px rgba(37, 99, 235, 0.4), 0 5px 10px rgba(37, 99, 235, 0.2)",
      }}
      onClick={() => console.log("Try Features Now clicked")}
    >
      <Timer className="w-5 h-5 mr-3" />
      Try Features Now
    </button>
  </div>
</div>

  );
}

export default TextButton;
