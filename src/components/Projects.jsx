import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const academicProjects = [
    {
      title: "Water Level Prediction System",
      description:
        "An IoT-based project that estimates water level in storage tanks and predicts usage time.",
      github: "https://github.com/yourusername/water-level-system",
      image: "/src/assets/images/EWSTPUT.jpg",
      certificate: "/src/assets/pdfs/904437_Certi.pdf",
      research: "/src/assets/pdfs/22988001.Estimating water level in storage tank.pdf",
      patent: "/src/assets/pdfs/22988001.Estimating water level in storage tank.pdf",
    },
    {
      title: "Heart Rate Monitoring System",
      description:
        "A minor IoT project using Arduino and pulse sensor for real-time heart rate detection.",
      github: "https://github.com/yourusername/heart-rate-monitor",
      image: "/src/assets/images/heart-rate.jpg",
      research: "/src/assets/pdfs/Heart_Rate_Monitoring_System_Research.pdf",
    },
  ];

  const personalProjects = [
    {
      title: "Portfolio Website",
      description:
        "My personal responsive portfolio showcasing projects, certifications, and journey.",
      github: "https://github.com/yourusername/portfolio",
      image: "/src/assets/images/portfolio.jpg",
    },
    {
      title: "Quiz Platform",
      description:
        "An interactive quiz web app with teacher-student interface and timer support.",
      github: "https://github.com/yourusername/quiz-platform",
      image: "/src/assets/images/quiz-platform.jpg",
    },
    {
      title: "Receipt Calculator",
      description:
        "A Java-based GUI application to generate and save customer receipts.",
      github: "https://github.com/yourusername/receipt-calculator",
      image: "/src/assets/images/receipt-calculator.jpg",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#1e0b59] to-[#2a155f] py-20 text-white">
      <div className="container mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-yellow-300 mb-12">
          My Projects
        </h2>

        {/* 🎓 Academic Projects */}
        <h3 className="text-3xl font-semibold text-purple-300 mb-6">
          🎓 Academic Projects
        </h3>

        {/* Water Level Project Grid */}
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-8 mb-16">
          {/* Water Level Image */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-5 shadow-lg hover:shadow-yellow-400/40 transition flex flex-col justify-between"
          >
            <img
              src={academicProjects[0].image}
              alt={academicProjects[0].title}
              className="rounded-xl w-full h-56 object-cover mb-4 border border-white/20"
            />
            <div>
              <h4 className="text-2xl font-bold text-yellow-300 mb-2">
                {academicProjects[0].title}
              </h4>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                {academicProjects[0].description}
              </p>
            </div>
            <a
              href={academicProjects[0].github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-lg font-medium hover:bg-yellow-300 transition w-full mt-auto"
            >
              <FaGithub /> View on GitHub
            </a>
          </motion.div>

          {/* Research Paper */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-5 shadow-lg hover:shadow-yellow-400/40 transition flex flex-col justify-between"
          >
            <iframe
              src={academicProjects[0].research}
              title="Research Paper"
              className="w-full h-64 rounded-xl border border-white/20 shadow-md"
            ></iframe>
          </motion.div>

          {/* Certificate */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-5 shadow-lg hover:shadow-yellow-400/40 transition flex flex-col justify-between"
          >
            <iframe
              src={academicProjects[0].certificate}
              title="Certificate"
              className="w-full h-64 rounded-xl border border-white/20 shadow-md"
            ></iframe>
          </motion.div>

          {/* Patent */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-5 shadow-lg hover:shadow-yellow-400/40 transition flex flex-col justify-between"
          >
            <iframe
              src={academicProjects[0].patent}
              title="Patent"
              className="w-full h-64 rounded-xl border border-white/20 shadow-md"
            ></iframe>
          </motion.div>
        </div>

        {/* Heart Rate Monitoring Project */}
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-8 mb-16 justify-center">
          {/* Heart Rate Image */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-5 shadow-lg hover:shadow-yellow-400/40 transition flex flex-col justify-between"
          >
            <img
              src={academicProjects[1].image}
              alt={academicProjects[1].title}
              className="rounded-xl w-full h-56 object-cover mb-4 border border-white/20"
            />
            <div>
              <h4 className="text-2xl font-bold text-yellow-300 mb-2">
                {academicProjects[1].title}
              </h4>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                {academicProjects[1].description}
              </p>
            </div>
            <a
              href={academicProjects[1].github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-lg font-medium hover:bg-yellow-300 transition w-full mt-auto"
            >
              <FaGithub /> View on GitHub
            </a>
          </motion.div>

          {/* Heart Rate Research Paper */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-5 shadow-lg hover:shadow-yellow-400/40 transition flex flex-col justify-between"
          >
            <iframe
              src={academicProjects[1].research}
              title="Heart Rate Research Paper"
              className="w-full h-64 rounded-xl border border-white/20 shadow-md"
            ></iframe>
          </motion.div>
        </div>

        {/* 💻 Personal Projects */}
        <h3 className="text-3xl font-semibold text-purple-300 mb-6">
          💻 Personal Projects
        </h3>

        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-8">
          {personalProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-5 shadow-lg hover:shadow-yellow-400/40 transition flex flex-col justify-between"
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-xl w-full h-56 object-cover mb-4 border border-white/20"
              />
              <div>
                <h4 className="text-2xl font-bold text-yellow-300 mb-2">
                  {project.title}
                </h4>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-lg font-medium hover:bg-yellow-300 transition w-full mt-auto"
              >
                <FaGithub /> View on GitHub
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
