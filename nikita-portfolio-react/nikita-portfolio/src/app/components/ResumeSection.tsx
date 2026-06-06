import { motion } from "motion/react";
import { Download, GraduationCap, Briefcase, Award } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Technology",
    institution: "University Name",
    year: "2022 - 2026",
    focus: "Computer Science & Engineering",
  },
];

const experience = [
  {
    role: "Open Source Contributor — NSoC'26",
    company: "MediScan AI",
    period: "2026 - Present",
    achievements: [
      "Contributed documentation and fixed missing API routes causing frontend JSON parse errors",
      "Improved Flask backend stability and frontend React integration",
      "Collaborated with open-source community on AI-powered medical scan analysis",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Virtual Science Lab",
    period: "2025 - 2026",
    achievements: [
      "Built React/Vite + FastAPI app with gamification system",
      "Migrated SQLite to MongoDB Atlas for Vercel deployment compatibility",
      "Resolved CORS, import errors, and merge conflicts across feature branches",
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
    <section
      id="resume"
      style={{
        padding: "clamp(96px, 12vw, 192px) 0",
        backgroundColor: "#F6EEE8",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <motion.div
        style={{
          position: "absolute",
          bottom: "25%",
          left: 0,
          width: 384,
          height: 384,
          backgroundColor: "#6B0F1A",
          opacity: 0.05,
          borderRadius: "50%",
          filter: "blur(48px)",
        }}
        animate={{ scale: [1, 1.3, 1], x: [0, -50, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 clamp(24px, 6vw, 96px)" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          style={{ marginBottom: 96, textAlign: "center" }}
        >
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 11,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#6B0F1A",
              opacity: 0.6,
            }}
          >
            04 — Experience
          </span>
          <h2
            style={{
              marginTop: 16,
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(40px, 8vw, 80px)",
              lineHeight: 1.1,
              color: "#4A0013",
            }}
          >
            Resume
          </h2>

          <motion.a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              marginTop: 32,
              padding: "12px 24px",
              backgroundColor: "#4A0013",
              color: "#F6EEE8",
              textDecoration: "none",
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Download size={16} />
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 13,
                letterSpacing: "0.1em",
              }}
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
          style={{ marginBottom: 96 }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 48 }}>
            <div style={{ padding: 12, backgroundColor: "#6B0F1A" }}>
              <GraduationCap size={24} color="#F6EEE8" />
            </div>
            <h3
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: 32,
                color: "#4A0013",
              }}
            >
              Education
            </h3>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{
                  borderLeft: "2px solid rgba(107,15,26,0.2)",
                  paddingLeft: 32,
                  paddingBottom: 32,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: 16,
                  }}
                >
                  <div>
                    <h4
                      style={{
                        fontFamily: "Playfair Display, serif",
                        fontSize: 20,
                        color: "#4A0013",
                        marginBottom: 8,
                      }}
                    >
                      {edu.degree}
                    </h4>
                    <p
                      style={{
                        fontFamily: "Inter, sans-serif",
                        color: "#6B0F1A",
                        marginBottom: 4,
                      }}
                    >
                      {edu.institution}
                    </p>
                    <p
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: 14,
                        color: "#A26769",
                        fontStyle: "italic",
                      }}
                    >
                      {edu.focus}
                    </p>
                  </div>
                  <span
                    style={{
                      padding: "6px 16px",
                      backgroundColor: "rgba(107,15,26,0.1)",
                      color: "#6B0F1A",
                      fontFamily: "Inter, sans-serif",
                      fontSize: 13,
                    }}
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
          style={{ marginBottom: 96 }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 48 }}>
            <div style={{ padding: 12, backgroundColor: "#6B0F1A" }}>
              <Briefcase size={24} color="#F6EEE8" />
            </div>
            <h3
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: 32,
                color: "#4A0013",
              }}
            >
              Experience
            </h3>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{ borderLeft: "2px solid rgba(107,15,26,0.2)", paddingLeft: 32 }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: 16,
                    marginBottom: 16,
                  }}
                >
                  <div>
                    <h4
                      style={{
                        fontFamily: "Playfair Display, serif",
                        fontSize: 24,
                        color: "#4A0013",
                        marginBottom: 8,
                      }}
                    >
                      {exp.role}
                    </h4>
                    <p
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: 17,
                        color: "#6B0F1A",
                      }}
                    >
                      {exp.company}
                    </p>
                  </div>
                  <span
                    style={{
                      padding: "6px 16px",
                      backgroundColor: "rgba(107,15,26,0.1)",
                      color: "#6B0F1A",
                      fontFamily: "Inter, sans-serif",
                      fontSize: 13,
                    }}
                  >
                    {exp.period}
                  </span>
                </div>

                <ul style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {exp.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 12,
                        fontFamily: "Inter, sans-serif",
                        color: "#6B0F1A",
                        opacity: 0.9,
                        listStyle: "none",
                      }}
                    >
                      <span style={{ marginTop: 6, color: "#6B0F1A" }}>•</span>
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
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 48 }}>
            <div style={{ padding: 12, backgroundColor: "#6B0F1A" }}>
              <Award size={24} color="#F6EEE8" />
            </div>
            <h3
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: 32,
                color: "#4A0013",
              }}
            >
              Certifications
            </h3>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 16,
            }}
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, x: 4 }}
                style={{
                  padding: 24,
                  border: "1px solid rgba(107,15,26,0.2)",
                  backgroundColor: "#ffffff",
                }}
              >
                <p style={{ fontFamily: "Inter, sans-serif", color: "#4A0013" }}>{cert}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
