import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import resumePDF from "/pdfs/Resume_IT.pdf";
import { useEffect } from "react";

export default function Resume() {
  useEffect(() => {
    const disableRightClick = (e) => e.preventDefault();
    document.addEventListener("contextmenu", disableRightClick);
    return () => document.removeEventListener("contextmenu", disableRightClick);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#1e0b59] to-[#2a155f] text-white px-4 py-20">
      
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-yellow-300 mb-10 text-center"
      >
        My Resume
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full max-w-5xl bg-white/10 backdrop-blur-md p-4 rounded-2xl shadow-lg"
      >
        <iframe
          src={`${resumePDF}#toolbar=0&navpanes=0&scrollbar=0`}
          title="Resume"
          className="w-full h-[85vh] rounded-xl border border-white/20"
        />
      </motion.div>

      <motion.a
        href={resumePDF}
        download
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-8 flex items-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
      >
        <FaDownload /> Download Resume
      </motion.a>

    </section>
  );
}
