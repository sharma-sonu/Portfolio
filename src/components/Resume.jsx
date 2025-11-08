import React from "react";

const Resume = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#1e0b59] to-[#2a155f] text-white p-6">
      <h2 className="text-3xl font-semibold text-yellow-300 mb-6">
        My Resume
      </h2>

      {/* PDF viewer */}
      <div className="w-full max-w-5xl h-[90vh] bg-white rounded-xl shadow-lg overflow-hidden">
        <iframe
          src="/src/assets/pdfs/Resume_IT.pdf"
          className="w-full h-full border-none"
          title="Sonu Sharma Resume"
        ></iframe>
      </div>

      {/* ✅ Only Download Button */}
      <a
        href="/Resume_IT.pdf"
        download="Sonu_Sharma_Resume.pdf"
        className="mt-6 bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-300"
      >
        Download Resume
      </a>
    </div>
  );
};

export default Resume;
