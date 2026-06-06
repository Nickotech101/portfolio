import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutSection() {
  return (
    <section
      id="about"
      style={{
        padding: "clamp(96px, 12vw, 192px) 0",
        backgroundColor: "#F6EEE8",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background blur circle */}
      <motion.div
        style={{
          position: "absolute",
          top: "25%",
          right: 0,
          width: 384,
          height: 384,
          backgroundColor: "#D8B4A0",
          opacity: 0.1,
          borderRadius: "50%",
          filter: "blur(48px)",
        }}
        animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Big watermark text */}
      <motion.div
        style={{
          position: "absolute",
          top: "33%",
          left: 0,
          fontSize: 150,
          opacity: 0.03,
          userSelect: "none",
          pointerEvents: "none",
          fontFamily: "Playfair Display, serif",
          color: "#4A0013",
          lineHeight: 1,
        }}
        initial={{ x: -100 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        ABOUT
      </motion.div>

      {/* Animated vertical line */}
      <motion.div
        style={{
          position: "absolute",
          top: "50%",
          right: 80,
          width: 1,
          height: 256,
          backgroundColor: "#6B0F1A",
          opacity: 0.1,
          transformOrigin: "top",
        }}
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
      />

      <div
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          padding: "0 clamp(24px, 6vw, 96px)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "5fr 7fr",
            gap: "clamp(48px, 8vw, 96px)",
          }}
          className="about-grid"
        >
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            style={{ display: "flex", flexDirection: "column", gap: 32 }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
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
                01 — About
              </span>
              <h2
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: "clamp(40px, 8vw, 80px)",
                  lineHeight: 1.1,
                  color: "#4A0013",
                }}
              >
                Crafting Intelligence
              </h2>
            </div>

            {/* Animated line */}
            <motion.div
              style={{ height: 1, background: "linear-gradient(to right, #6B0F1A, transparent)", transformOrigin: "left" }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />

            {/* Image card */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              style={{ position: "relative", width: 192, height: 192 }}
            >
              <motion.div
                style={{ width: "100%", height: "100%", position: "relative", overflow: "hidden" }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(135deg, #6B0F1A, #4A0013)",
                    opacity: 0.3,
                    zIndex: 1,
                  }}
                />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1678845530864-18a666ca9762?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
                  alt="Data visualization"
                  style={{ width: "100%", height: "100%", objectFit: "cover", mixBlendMode: "multiply" }}
                />
              </motion.div>
              <motion.div
                style={{
                  position: "absolute",
                  bottom: -16,
                  right: -16,
                  backgroundColor: "#6B0F1A",
                  padding: "6px 12px",
                }}
                whileHover={{ scale: 1.1 }}
              >
                <span
                  style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#F6EEE8" }}
                >
                  Innovation
                </span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            style={{
              paddingTop: "clamp(0px, 8vw, 128px)",
              display: "flex",
              flexDirection: "column",
              gap: 48,
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 576 }}>
              <p
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: "clamp(18px, 3vw, 24px)",
                  lineHeight: 1.6,
                  color: "#6B0F1A",
                }}
              >
                I'm a passionate AI/ML student and Python developer dedicated to building
                intelligent systems that push the boundaries of what's possible.
              </p>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 16,
                  lineHeight: 1.8,
                  color: "#6B0F1A",
                  opacity: 0.8,
                }}
              >
                My journey combines deep technical expertise with creative problem-solving,
                exploring neural networks, machine learning algorithms, and innovative applications
                of artificial intelligence. I believe in creating technology that's not just
                functional, but elegant and transformative.
              </p>
            </div>

            {/* Skill tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 16, paddingTop: 32 }}>
              {["Machine Learning", "Deep Learning", "Python", "Neural Networks", "Data Science"].map(
                (skill, i) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ backgroundColor: "#6B0F1A", color: "#F6EEE8" }}
                    style={{
                      padding: "8px 20px",
                      border: "1px solid rgba(107,15,26,0.2)",
                      cursor: "default",
                      transition: "all 0.3s",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: 13,
                        letterSpacing: "0.05em",
                        color: "inherit",
                      }}
                    >
                      {skill}
                    </span>
                  </motion.div>
                )
              )}
            </div>

            {/* Stats */}
            <div style={{ paddingTop: 64, display: "flex", alignItems: "center", gap: 32 }}>
              {[
                { value: "5+", label: "Projects" },
                { value: "100%", label: "Dedication" },
              ].map(({ value, label }, i) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: 32 }}>
                  {i > 0 && (
                    <div style={{ height: 64, width: 1, backgroundColor: "#6B0F1A", opacity: 0.2 }} />
                  )}
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <div
                      style={{
                        fontFamily: "Playfair Display, serif",
                        fontSize: "clamp(40px, 6vw, 60px)",
                        color: "#4A0013",
                        lineHeight: 1,
                      }}
                    >
                      {value}
                    </div>
                    <div
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: 11,
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: "#6B0F1A",
                        opacity: 0.6,
                      }}
                    >
                      {label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
