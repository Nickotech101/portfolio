import { motion } from "motion/react";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    title: "SpamSniper",
    category: "Machine Learning",
    description:
      "An SMS spam classifier built with Python and Scikit-learn, deployed on Streamlit Community Cloud. Achieves high accuracy using NLP feature extraction.",
    image:
      "https://images.unsplash.com/photo-1737505599159-5ffc1dcbc08f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["Python", "Scikit-learn", "Streamlit", "NLP"],
    featured: true,
    link: "#",
  },
  {
    title: "MediScan AI",
    category: "Computer Vision",
    description:
      "An open-source Flask-based medical scan analysis app leveraging AI to assist in medical image interpretation with real-time API integration.",
    image:
      "https://images.unsplash.com/photo-1761740533449-b8d4385e60b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["Flask", "Computer Vision", "REST API", "React"],
    featured: false,
    link: "#",
  },
  {
    title: "Virtual Science Lab",
    category: "Full Stack",
    description:
      "A React/Vite + FastAPI full-stack application with gamification features, MongoDB Atlas integration, and real-time science simulations.",
    image:
      "https://images.unsplash.com/photo-1770210217380-d78a69acdc77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["React", "FastAPI", "MongoDB", "Vercel"],
    featured: false,
    link: "#",
  },
  {
    title: "EK-vichaar",
    category: "News Portal",
    description:
      "A bilingual Next.js news portal for Hindi, Marathi, and English readers, with live API integration, YouTube embeds, and multi-language support.",
    image:
      "https://images.unsplash.com/photo-1647684073836-90038ed669b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["Next.js", "TypeScript", "REST API", "i18n"],
    featured: false,
    link: "#",
  },
];

export function ProjectsSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <section
      id="projects"
      style={{
        padding: "clamp(96px, 12vw, 192px) 0",
        backgroundColor: "#4A0013",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseMove={handleMouseMove}
    >
      {/* Grid texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.05,
          backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjRjZFRUU4Ij48L3JlY3Q+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRjZFRUU4IiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvc3ZnPg==")`,
        }}
      />

      {/* Mouse glow */}
      <motion.div
        style={{
          position: "absolute",
          width: 384,
          height: 384,
          borderRadius: "50%",
          pointerEvents: "none",
          background: "radial-gradient(circle, rgba(216,180,160,0.15) 0%, transparent 70%)",
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
        animate={{ left: mousePosition.x - 192, top: mousePosition.y - 192 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />

      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 clamp(24px, 6vw, 96px)" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          style={{ marginBottom: "clamp(80px, 10vw, 128px)" }}
        >
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 11,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#D8B4A0",
              opacity: 0.6,
            }}
          >
            02 — Selected Works
          </span>
          <h2
            style={{
              marginTop: 16,
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(40px, 8vw, 80px)",
              lineHeight: 1.1,
              color: "#F6EEE8",
            }}
          >
            Featured Projects
          </h2>
        </motion.div>

        {/* Projects */}
        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(80px, 12vw, 192px)" }}>
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              style={{
                display: "grid",
                gridTemplateColumns: "7fr 5fr",
                gap: "clamp(32px, 6vw, 64px)",
                alignItems: "center",
                direction: index % 2 === 1 ? "rtl" : "ltr",
              }}
              className="project-article"
            >
              {/* Image */}
              <div style={{ position: "relative", direction: "ltr" }} className="group">
                <div
                  style={{
                    position: "relative",
                    aspectRatio: "16/10",
                    overflow: "hidden",
                    backgroundColor: "#6B0F1A",
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    style={{ width: "100%", height: "100%" }}
                  >
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </motion.div>

                  {project.featured && (
                    <div
                      style={{
                        position: "absolute",
                        top: 24,
                        left: 24,
                        backgroundColor: "#F6EEE8",
                        padding: "8px 16px",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: 11,
                          letterSpacing: "0.3em",
                          textTransform: "uppercase",
                          color: "#4A0013",
                        }}
                      >
                        Featured
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Content */}
              <div style={{ direction: "ltr", display: "flex", flexDirection: "column", gap: 24 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <span
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: 13,
                      letterSpacing: "0.3em",
                      textTransform: "uppercase",
                      color: "#D8B4A0",
                    }}
                  >
                    {project.category}
                  </span>
                  <h3
                    style={{
                      fontFamily: "Playfair Display, serif",
                      fontSize: "clamp(32px, 6vw, 64px)",
                      lineHeight: 1.1,
                      color: "#F6EEE8",
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: 16,
                      lineHeight: 1.7,
                      color: "#D8B4A0",
                    }}
                  >
                    {project.description}
                  </p>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: "6px 16px",
                        border: "1px solid rgba(246,238,232,0.2)",
                        fontFamily: "Inter, sans-serif",
                        fontSize: 12,
                        letterSpacing: "0.08em",
                        color: "#F6EEE8",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <motion.a
                  href={project.link}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 12,
                    paddingTop: 24,
                    color: "#F6EEE8",
                    textDecoration: "none",
                    transition: "color 0.3s",
                  }}
                  whileHover={{ color: "#D8B4A0" }}
                >
                  <span
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: 13,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                    }}
                  >
                    View Project
                  </span>
                  <motion.div whileHover={{ x: 4, y: -4 }} transition={{ duration: 0.2 }}>
                    <ArrowUpRight size={20} />
                  </motion.div>
                </motion.a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .project-article { 
            grid-template-columns: 1fr !important; 
            direction: ltr !important; 
          }
        }
      `}</style>
    </section>
  );
}
