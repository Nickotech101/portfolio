import { motion } from "motion/react";
import { Download, GraduationCap, Briefcase, Award } from "lucide-react";

const education = [
  {
    degree: "Master of Science in Computer Science",
    institution: "University Name",
    year: "2024 - 2026",
    focus: "Specialization in Artificial Intelligence & Machine Learning",
  },
  {
    degree: "Bachelor of Technology",
    institution: "University Name",
    year: "2020 - 2024",
    focus: "Computer Science & Engineering",
  },
];

const experience = [
  {
    role: "Machine Learning Research Intern",
    company: "AI Research Lab",
    period: "Jun 2025 - Present",
    achievements: [
      "Developed neural network models for computer vision tasks",
      "Optimized training pipelines reducing computation time by 40%",
      "Published research paper on novel architecture approaches",
    ],
  },
  {
    role: "Python Developer",
    company: "Tech Startup",
    period: "Jan 2024 - May 2025",
    achievements: [
      "Built scalable data processing systems using Python & Django",
      "Implemented ML models for predictive analytics",
      "Collaborated with cross-functional teams on AI products",
    ],
  },
];

const certifications = [
  "Deep Learning Specialization - DeepLearning.AI",
  "TensorFlow Developer Certificate",
  "Machine Learning Engineering",
  "Advanced Python Programming",
];

export function ResumeSection() {
  return (
    <section id="resume" className="py-32 lg:py-48 bg-[#F6EEE8] relative overflow-hidden">
      {/* Background decorative elements */}
      <motion.div
        className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#6B0F1A] opacity-5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 lg:px-12 xl:px-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mb-24 text-center"
        >
          <span
            className="text-xs tracking-[0.3em] uppercase text-[#6B0F1A] opacity-60"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            04 — Experience
          </span>
          <h2
            className="mt-4 text-[min(12vw,80px)] leading-[1.1] text-[#4A0013]"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Resume
          </h2>

          <motion.a
            href="#"
            className="inline-flex items-center gap-3 mt-8 px-6 py-3 bg-[#4A0013] text-[#F6EEE8] group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Download className="w-4 h-4 group-hover:animate-bounce" />
            <span
              className="text-sm tracking-wider"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Download PDF
            </span>
          </motion.a>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-[#6B0F1A]">
              <GraduationCap className="w-6 h-6 text-[#F6EEE8]" />
            </div>
            <h3
              className="text-3xl text-[#4A0013]"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Education
            </h3>
          </div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border-l-2 border-[#6B0F1A] border-opacity-20 pl-8 pb-8"
              >
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div>
                    <h4
                      className="text-xl text-[#4A0013] mb-2"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      {edu.degree}
                    </h4>
                    <p
                      className="text-[#6B0F1A] mb-1"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {edu.institution}
                    </p>
                    <p
                      className="text-sm text-[#A26769] italic"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {edu.focus}
                    </p>
                  </div>
                  <span
                    className="px-4 py-1.5 bg-[#6B0F1A] bg-opacity-10 text-[#6B0F1A] text-sm"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {edu.year}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-[#6B0F1A]">
              <Briefcase className="w-6 h-6 text-[#F6EEE8]" />
            </div>
            <h3
              className="text-3xl text-[#4A0013]"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Experience
            </h3>
          </div>

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border-l-2 border-[#6B0F1A] border-opacity-20 pl-8"
              >
                <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                  <div>
                    <h4
                      className="text-2xl text-[#4A0013] mb-2"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      {exp.role}
                    </h4>
                    <p
                      className="text-lg text-[#6B0F1A]"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {exp.company}
                    </p>
                  </div>
                  <span
                    className="px-4 py-1.5 bg-[#6B0F1A] bg-opacity-10 text-[#6B0F1A] text-sm"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-[#6B0F1A] opacity-90"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      <span className="text-[#6B0F1A] mt-1.5">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-[#6B0F1A]">
              <Award className="w-6 h-6 text-[#F6EEE8]" />
            </div>
            <h3
              className="text-3xl text-[#4A0013]"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Certifications
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, x: 4 }}
                className="p-6 border border-[#6B0F1A] border-opacity-20 bg-white"
              >
                <p
                  className="text-[#4A0013]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {cert}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
