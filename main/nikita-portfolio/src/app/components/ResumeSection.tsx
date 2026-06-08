import { motion } from "motion/react";
import { Download, GraduationCap, Briefcase, Award, ExternalLink, FileText, Github } from "lucide-react";
import infosysCert from "../../assets/Infosys_Springboard.pdf";
import csrboxCert from "../../assets/CSRBOX.pdf";
import dataAnalyticsCert from "../../assets/Data_Analytics_Job .pdf";
import microsoftCopilotCert from "../../assets/CertificateOfCompletion_Learning Microsoft 365 Copilot for Work.pdf";
import microsoftCert from "../../assets/microsoft.pdf";
import resumePDF from "../../assets/resume.pdf";

const education = [
  {
    degree: "Bachelor of Technology — CSE (AI & ML Specialization)",
    institution: "Lokmanya Tilak College of Engineering, Navi Mumbai",
    year: "2024 – 2028",
    focus: "Computer Science & Engineering with AI/ML Specialization",
  },
];

const experience = [
  {
    role: "Open Source Project Admin — NSoC",
    company: "Virtual Science Lab",
    period: "2025",
    achievements: [
      "Served as Project Admin for Virtual Science Lab at NSoC (NSUT's Open Source Cohort)",
      "Mentored contributors building science experiment simulations with React, FastAPI, and MongoDB Atlas",
      "Reviewed pull requests, managed GitHub issues, and guided the community roadmap",
    ],
    certLink: null,
    githubLink: "https://github.com/nikita09-lab/Virtual_Science_lab",
  },
  {
    role: "AI & Machine Learning Intern",
    company: "Infosys Springboard",
    period: "2025",
    achievements: [
      "Completed industry-oriented training in Artificial Intelligence and Machine Learning",
      "Worked on hands-on projects involving Python, Machine Learning, and Data Analysis",
      "Gained practical experience in model development, data preprocessing, and problem-solving",
    ],
    certLink: infosysCert,
    githubLink: null,
  },
  {
    role: "Social Impact Intern",
    company: "CSRBOX",
    period: "2024",
    achievements: [
      "Contributed to CSR initiatives and social impact projects through structured internship",
      "Developed communication and project management skills in a professional environment",
    ],
    certLink: csrboxCert,
    githubLink: null,
  },
];

const certifications = [
  {
    name: "Deloitte Australia — Data Analytics Job Simulation",
    issuer: "Forage",
    date: "Issued Nov 2025",
    credentialId: "8rZAfnkbFkLKwYYuD",
    link: dataAnalyticsCert,
  },
  {
    name: "Career Essentials in Generative AI",
    issuer: "Microsoft & LinkedIn",
    date: "Issued May 2026",
    credentialId: null,
    link: microsoftCert,
  },
  {
    name: "Ethics in the Age of Generative AI",
    issuer: "LinkedIn",
    date: "Issued May 2026",
    credentialId: null,
    link: null,
  },
  {
    name: "Learning Microsoft 365 Copilot for Work",
    issuer: "LinkedIn",
    date: "Issued May 2026",
    credentialId: null,
    link: microsoftCopilotCert,
  },
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
            href={resumePDF}
            download="Nikita_Mishra_Resume.pdf"
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
                      height: "fit-content",
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
                      height: "fit-content",
                    }}
                  >
                    {exp.period}
                  </span>
                </div>

                <ul style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
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

                {/* Action buttons */}
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 8 }}>
                  {exp.certLink && (
                    <motion.a
                      href={exp.certLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        padding: "8px 16px",
                        border: "1px solid rgba(107,15,26,0.4)",
                        color: "#4A0013",
                        textDecoration: "none",
                        fontFamily: "Inter, sans-serif",
                        fontSize: 12,
                        letterSpacing: "0.08em",
                      }}
                      whileHover={{ backgroundColor: "#4A0013", color: "#F6EEE8" }}
                      transition={{ duration: 0.2 }}
                    >
                      <FileText size={14} />
                      View Certificate
                    </motion.a>
                  )}
                  {exp.githubLink && (
                    <motion.a
                      href={exp.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        padding: "8px 16px",
                        border: "1px solid rgba(107,15,26,0.4)",
                        color: "#4A0013",
                        textDecoration: "none",
                        fontFamily: "Inter, sans-serif",
                        fontSize: 12,
                        letterSpacing: "0.08em",
                      }}
                      whileHover={{ backgroundColor: "#4A0013", color: "#F6EEE8" }}
                      transition={{ duration: 0.2 }}
                    >
                      <Github size={14} />
                      View on GitHub
                    </motion.a>
                  )}
                </div>
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
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                <p style={{ fontFamily: "Inter, sans-serif", color: "#4A0013", fontWeight: 500, fontSize: 15 }}>
                  {cert.name}
                </p>
                <p style={{ fontFamily: "Inter, sans-serif", color: "#6B0F1A", fontSize: 13 }}>
                  {cert.issuer}
                </p>
                <p style={{ fontFamily: "Inter, sans-serif", color: "#A26769", fontSize: 12, fontStyle: "italic" }}>
                  {cert.date}
                </p>
                {cert.credentialId && (
                  <p style={{ fontFamily: "Inter, sans-serif", color: "#A26769", fontSize: 11, letterSpacing: "0.05em" }}>
                    ID: {cert.credentialId}
                  </p>
                )}
                {cert.link && (
                  <motion.a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      marginTop: 8,
                      color: "#6B0F1A",
                      textDecoration: "none",
                      fontFamily: "Inter, sans-serif",
                      fontSize: 12,
                      letterSpacing: "0.08em",
                    }}
                    whileHover={{ color: "#4A0013" }}
                  >
                    <ExternalLink size={12} />
                    View Certificate
                  </motion.a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
