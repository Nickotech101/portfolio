import { motion, useScroll, useTransform } from "motion/react";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 500], [0, 150]);
  const imageScale = useTransform(scrollY, [0, 500], [1, 1.1]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20;
      const y = (clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden bg-[#F6EEE8] flex items-center pt-32">
      {/* Grain overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]"></div>

      {/* Floating background elements */}
      <motion.div
        className="absolute top-20 right-1/4 text-[200px] opacity-[0.02] select-none pointer-events-none"
        style={{
          fontFamily: "Playfair Display, serif",
          x: mousePosition.x * 0.5,
          y: mousePosition.y * 0.5,
        }}
      >
        2026
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 left-10 w-px h-32 bg-[#6B0F1A] opacity-10"
        animate={{ scaleY: [1, 1.5, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 lg:px-12 xl:px-24 py-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Typography */}
          <div className="space-y-8 lg:space-y-12">
            <div className="space-y-4">
              <h1
                className="text-[min(15vw,120px)] leading-[0.9] tracking-tight overflow-hidden"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                <motion.span
                  className="block text-[#4A0013]"
                  initial={{ y: 100, opacity: 0, filter: "blur(10px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.8, delay: 3.2, ease: [0.22, 1, 0.36, 1] }}
                >
                  NIKITA
                </motion.span>
                <motion.span
                  className="block text-[#6B0F1A]"
                  initial={{ y: 100, opacity: 0, filter: "blur(10px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.8, delay: 3.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  MISHRA
                </motion.span>
              </h1>

              <div className="space-y-2 pl-2">
                {["AI/ML Student", "Python Developer", "Creative Technologist"].map((title, i) => (
                  <motion.p
                    key={title}
                    className={`text-[min(4vw,20px)] tracking-[0.2em] uppercase ${
                      i === 0
                        ? "text-[#6B0F1A] opacity-80"
                        : i === 1
                        ? "text-[#A26769] opacity-80"
                        : "text-[#D8B4A0]"
                    }`}
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: i === 2 ? 1 : 0.8, x: 0 }}
                    transition={{ duration: 0.6, delay: 3.6 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {title}
                  </motion.p>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 3.9, ease: [0.22, 1, 0.36, 1] }}
              className="flex gap-6 items-center"
            >
              <motion.a
                href="#projects"
                className="group relative px-8 py-4 bg-[#4A0013] text-[#F6EEE8] overflow-hidden cursor-pointer block"
                whileHover={{ scale: 1.05, x: 10 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3 }}
              >
                <span className="relative z-10" style={{ fontFamily: 'Inter, sans-serif' }}>
                  View Work
                </span>
                <motion.div
                  className="absolute inset-0 bg-[#6B0F1A]"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                />
              </motion.a>

              <motion.div
                className="h-px w-16 bg-[#4A0013] opacity-20"
                animate={{ scaleX: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 4.4 }}
              className="flex flex-col items-start gap-2 pt-8"
            >
              <span
                className="text-xs tracking-[0.3em] uppercase text-[#6B0F1A] opacity-60"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Scroll
              </span>
              <div className="flex flex-col gap-1">
                <motion.div
                  animate={{ y: [0, 8, 0], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0 }}
                >
                  <ChevronDown className="w-4 h-4 text-[#6B0F1A]" />
                </motion.div>
                <motion.div
                  animate={{ y: [0, 8, 0], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                  className="-mt-2"
                >
                  <ChevronDown className="w-4 h-4 text-[#6B0F1A]" />
                </motion.div>
                <motion.div
                  animate={{ y: [0, 8, 0], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                  className="-mt-2"
                >
                  <ChevronDown className="w-4 h-4 text-[#6B0F1A]" />
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Right: Abstract AI Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 3.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
            style={{
              x: mousePosition.x * -0.3,
              y: mousePosition.y * -0.3,
            }}
          >
            <motion.div
              className="relative aspect-[3/4] overflow-hidden"
              style={{ y: imageY, scale: imageScale }}
            >
              {/* Layered abstract visuals */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#4A0013] via-[#6B0F1A] to-[#A26769] opacity-20" />

              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1647684073836-90038ed669b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdlb21ldHJpYyUyMHRleHR1cmUlMjBsdXh1cnklMjBidXJndW5keXxlbnwxfHx8fDE3NzkzNzg1NjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Abstract geometric pattern"
                  className="w-full h-full object-cover mix-blend-multiply opacity-60"
                />
              </motion.div>

              {/* Overlay blend */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSJub25lIi8+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIgZmlsbD0iIzZCMEYxQSIgb3BhY2l0eT0iMC4zIi8+PC9zdmc+')] opacity-20" />

              {/* Floating decorative text */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 4 }}
                className="absolute top-8 -left-4 lg:-left-12 bg-[#F6EEE8] px-4 py-2 shadow-lg backdrop-blur-sm"
              >
                <span
                  className="text-sm tracking-[0.3em] uppercase text-[#4A0013]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Portfolio 2026
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 4.2 }}
                className="absolute bottom-8 -right-4 lg:-right-12 bg-[#6B0F1A] px-4 py-2 backdrop-blur-sm"
              >
                <span
                  className="text-sm tracking-[0.3em] uppercase text-[#F6EEE8]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  AI / ML
                </span>
              </motion.div>
            </motion.div>

            {/* Blurred circle accent */}
            <motion.div
              className="absolute -bottom-12 -right-12 w-64 h-64 rounded-full bg-[#6B0F1A] opacity-20 blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
