import React from "react";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-900 text-gray-300 text-center py-3 shadow-inner border-t border-gray-700">
      <div className="text-sm">
        © {new Date().getFullYear()} <span className="font-semibold text-white">Sonu Sharma</span> — All Rights Reserved
      </div>
      <div className="mt-1 flex justify-center gap-4 text-xs">
        <a
          href="https://github.com/your-github-username"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/your-linkedin-id"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="mailto:your-email@example.com"
          className="hover:text-blue-400 transition-colors"
        >
          Contact
        </a>
      </div>
    </footer>
  );
};

export default Footer;
