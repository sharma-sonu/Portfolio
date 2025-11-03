import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#2a155f] to-[#1e0b59] text-white px-6 py-16">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-yellow-300 mb-6 text-center"
      >
        📬 Contact Me
      </motion.h2>

      <motion.form
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg w-full max-w-md space-y-4"
      >
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded-lg bg-white/20 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded-lg bg-white/20 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          className="w-full p-3 rounded-lg bg-white/20 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-yellow-400 text-black py-2 rounded-lg font-semibold hover:bg-yellow-300 transition"
        >
          Send Message
        </button>
      </motion.form>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-gray-300 mt-6 text-center text-sm"
      >
        Or reach out directly at{" "}
        <a
          href="mailto:sonusharma@example.com"
          className="text-yellow-400 hover:underline"
        >
          sonusharma@example.com
        </a>
      </motion.p>
    </section>
  );
};

export default Contact;
