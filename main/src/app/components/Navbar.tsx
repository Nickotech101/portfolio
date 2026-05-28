import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { GitBranch, ExternalLink } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [githubHovered, setGithubHovered] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Resume", href: "#resume" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 3, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        scrolled ? "w-[90%] max-w-6xl" : "w-[85%] max-w-5xl"
      }`}
    >
      <div
        className={`px-6 py-4 flex items-center justify-between transition-all duration-500 ${
          scrolled
            ? "bg-[#F6EEE8]/80 backdrop-blur-xl shadow-lg border border-[#6B0F1A]/10"
            : "bg-transparent"
        }`}
        style={{
          borderRadius: scrolled ? "2px" : "0px",
        }}
      >
        {/* Left: GitHub Button */}
        <motion.a
          href="https://github.com/nikita09-lab"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setGithubHovered(true)}
          onMouseLeave={() => setGithubHovered(false)}
          className="relative overflow-hidden group"
          animate={{
            width: githubHovered ? "auto" : "40px",
          }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className={`flex items-center gap-2 px-3 py-2 bg-[#4A0013] text-[#F6EEE8] transition-all duration-300 ${
              githubHovered ? "backdrop-blur-sm" : ""
            }`}
          >
            <motion.div
              animate={{ rotate: githubHovered ? 15 : 0 }}
              transition={{ duration: 0.3 }}
            >
            <GitBranch className="w-5 h-5" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{
                opacity: githubHovered ? 1 : 0,
                width: githubHovered ? "auto" : 0,
              }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2 whitespace-nowrap overflow-hidden"
            >
              <span
                className="text-sm"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                View Code
              </span>
              <ExternalLink className="w-3.5 h-3.5" />
            </motion.div>
          </div>
        </motion.a>

        {/* Center: Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="absolute left-1/2 -translate-x-1/2"
        >
          <a
            href="#hero"
            className="text-xl tracking-tight text-[#4A0013]"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Nikita.dev
          </a>
        </motion.div>

        {/* Right: Menu Links */}
        <div className="flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group relative text-sm tracking-wide text-[#4A0013] transition-colors duration-300 hover:text-[#6B0F1A]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {link.label}
              <motion.div
                className="absolute -bottom-1 left-0 h-px bg-[#6B0F1A] origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              />
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
