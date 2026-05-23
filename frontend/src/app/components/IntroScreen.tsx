import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

export function IntroScreen({ onComplete }: { onComplete: () => void }) {
  const [currentLetter, setCurrentLetter] = useState(0);
  const name = "NIKITA MISHRA";
  const letters = name.split("");

  useEffect(() => {
    if (currentLetter < letters.length) {
      const timeout = setTimeout(() => {
        setCurrentLetter(currentLetter + 1);
      }, 80);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        onComplete();
      }, 800);
      return () => clearTimeout(timeout);
    }
  }, [currentLetter, letters.length, onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-[#F6EEE8] overflow-hidden"
        initial={{ opacity: 1 }}
        exit={{ y: "-100%", opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Moving grain texture */}
        <motion.div
          className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        <div className="relative">
          {/* Letter-by-letter reveal */}
          <div className="flex items-center justify-center gap-1 mb-12">
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                className="text-[min(15vw,100px)] tracking-tight text-[#4A0013]"
                style={{ fontFamily: "Playfair Display, serif" }}
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                animate={{
                  opacity: index < currentLetter ? 1 : 0,
                  y: index < currentLetter ? 0 : 20,
                  filter: index < currentLetter ? "blur(0px)" : "blur(10px)",
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {letter === " " ? " " : letter}
              </motion.span>
            ))}
          </div>

          {/* Expanding burgundy line */}
          <motion.div
            className="h-px bg-gradient-to-r from-transparent via-[#6B0F1A] to-transparent origin-center"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{
              scaleX: currentLetter === letters.length ? 1 : 0,
              opacity: currentLetter === letters.length ? 1 : 0,
            }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Subtitle */}
          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            animate={{
              opacity: currentLetter === letters.length ? 1 : 0,
            }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span
              className="text-sm tracking-[0.3em] uppercase text-[#6B0F1A] opacity-60"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Portfolio 2026
            </span>
          </motion.div>
        </div>

        {/* Decorative circles */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-[#D8B4A0] opacity-10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-[#6B0F1A] opacity-5 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
}
