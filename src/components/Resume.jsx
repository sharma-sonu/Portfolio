import { useEffect } from "react";

const Resume = () => {
  useEffect(() => {
   
    window.open("/pdfs/Sonu_Sharma_Resume.pdf", "_blank");
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#1e0b59] to-[#2a155f] text-white">
      <h2 className="text-3xl font-semibold text-yellow-300">
        Opening Resume...
      </h2>
    </div>
  );
};

export default Resume;