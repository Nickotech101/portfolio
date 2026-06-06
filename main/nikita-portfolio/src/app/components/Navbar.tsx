import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Github, ExternalLink, Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [githubHovered, setGithubHovered] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Resume", href: "#resume" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 3, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "fixed",
          top: 24,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 50,
          width: scrolled ? "90%" : "85%",
          maxWidth: scrolled ? "1152px" : "1024px",
          transition: "width 0.5s, max-width 0.5s",
        }}
      >
        <div
          style={{
            padding: "16px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: scrolled ? "rgba(246, 238, 232, 0.85)" : "transparent",
            backdropFilter: scrolled ? "blur(20px)" : "none",
            boxShadow: scrolled ? "0 4px 24px rgba(74,0,19,0.08)" : "none",
            border: scrolled ? "1px solid rgba(107,15,26,0.1)" : "none",
            borderRadius: scrolled ? "2px" : "0",
            transition: "all 0.5s",
          }}
        >
          {/* Left: GitHub */}
          <motion.a
            href="https://github.com/nikita09-lab"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setGithubHovered(true)}
            onMouseLeave={() => setGithubHovered(false)}
            style={{ overflow: "hidden", display: "block" }}
            animate={{ width: githubHovered ? "auto" : "40px" }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "8px 12px",
                backgroundColor: "#4A0013",
                color: "#F6EEE8",
              }}
            >
              <motion.div
                animate={{ rotate: githubHovered ? 15 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <Github size={20} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{
                  opacity: githubHovered ? 1 : 0,
                  width: githubHovered ? "auto" : 0,
                }}
                transition={{ duration: 0.3 }}
                style={{ display: "flex", alignItems: "center", gap: 6, overflow: "hidden", whiteSpace: "nowrap" }}
              >
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: 14 }}>View Code</span>
                <ExternalLink size={14} />
              </motion.div>
            </div>
          </motion.a>

          {/* Center: Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{ position: "absolute", left: "50%", transform: "translateX(-50%)" }}
          >
            <a
              href="#hero"
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: 20,
                color: "#4A0013",
                textDecoration: "none",
                letterSpacing: "-0.02em",
              }}
            >
              Nikita.dev
            </a>
          </motion.div>

          {/* Right: Desktop nav links */}
          <div className="hidden md:flex" style={{ display: "flex", alignItems: "center", gap: 32 }}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 14,
                  color: "#4A0013",
                  textDecoration: "none",
                  letterSpacing: "0.02em",
                  position: "relative",
                }}
                className="nav-link group"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              display: "none",
              background: "none",
              border: "none",
              color: "#4A0013",
              cursor: "pointer",
            }}
            className="mobile-menu-btn"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <motion.div
        initial={false}
        animate={{ opacity: mobileOpen ? 1 : 0, y: mobileOpen ? 0 : -20 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "#F6EEE8",
          zIndex: 40,
          display: mobileOpen ? "flex" : "none",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 32,
        }}
      >
        {navLinks.map((link, i) => (
          <motion.a
            key={link.label}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(28px, 6vw, 48px)",
              color: "#4A0013",
              textDecoration: "none",
            }}
          >
            {link.label}
          </motion.a>
        ))}
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .hidden.md\\:flex { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 1px;
          background: #6B0F1A;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .nav-link:hover::after { transform: scaleX(1); }
      `}</style>
    </>
  );
}
