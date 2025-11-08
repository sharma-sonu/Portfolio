import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle mobile menu

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#1a1a40]/70 backdrop-blur-md py-4 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6 md:px-16">
        
        {/* 🔹 Logo Section */}
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="w-10 h-10 rounded-full" />
          <h1 className="text-2xl font-bold text-yellow-300">Sonu Sharma</h1>
        </div>

        {/* 🔹 Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white text-lg font-medium">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/certifications">Certifications</Link></li>
          <li><Link to="/resume">Resume</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* 🔹 Mobile Menu Button */}
        <button
          className="md:hidden text-yellow-300 text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />} {/* toggle icon */}
        </button>
      </div>

      {/* 🔹 Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1a1a40]/90 backdrop-blur-md text-center text-white py-6 space-y-4 shadow-lg border-t border-white/10">
          <Link to="/" onClick={() => setIsOpen(false)} className="block hover:text-yellow-300">Home</Link>
          <Link to="/projects" onClick={() => setIsOpen(false)} className="block hover:text-yellow-300">Projects</Link>
          <Link to="/certifications" onClick={() => setIsOpen(false)} className="block hover:text-yellow-300">Certifications</Link>
          <Link to="/resume" onClick={() => setIsOpen(false)} className="block hover:text-yellow-300">Resume</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block hover:text-yellow-300">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
