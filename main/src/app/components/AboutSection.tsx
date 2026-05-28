import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutSection() {
  return (
    <section id="about" className="py-32 lg:py-48 bg-[#F6EEE8] relative overflow-hidden">
      {/* Background decorative elements */}
      <motion.div
        className="absolute top-1/4 right-0 w-96 h-96 bg-[#D8B4A0] opacity-10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating outlined typography */}
      <motion.div
        className="absolute top-1/3 left-0 text-[150px] opacity-[0.03] select-none pointer-events-none"
        style={{ fontFamily: "Playfair Display, serif" }}
        initial={{ x: -100 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        ABOUT
      </motion.div>

      {/* Thin animated line */}
      <motion.div
        className="absolute top-1/2 right-20 w-px h-64 bg-[#6B0F1A] opacity-10 origin-top"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
      />

      <div className="container mx-auto px-6 lg:px-12 xl:px-24">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left: Large serif heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-4">
              <span
                className="text-xs tracking-[0.3em] uppercase text-[#6B0F1A] opacity-60"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                01 — About
              </span>
              <h2
                className="text-[min(12vw,80px)] leading-[1.1] text-[#4A0013]"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Crafting Intelligence
              </h2>
            </div>

            {/* Handwritten accent text */}
            <div className="relative">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="h-px bg-gradient-to-r from-[#6B0F1A] to-transparent origin-left"
              ></motion.div>
            </div>

            {/* Abstract visual overlap */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative w-48 h-48 group"
            >
              <motion.div
                className="w-full h-full relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#6B0F1A] to-[#4A0013] opacity-30" />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1678845530864-18a666ca9762?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRhdGElMjB2aXN1YWxpemF0aW9uJTIwbmV1cmFsJTIwbmV0d29yayUyMGFlc3RoZXRpY3xlbnwxfHx8fDE3NzkzNzg1NjV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Data visualization"
                  className="w-full h-full object-cover shadow-2xl mix-blend-multiply"
                />
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -right-4 bg-[#6B0F1A] px-3 py-1.5"
                whileHover={{ scale: 1.1 }}
              >
                <span
                  className="text-xs text-[#F6EEE8]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Innovation
                </span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right: Asymmetrical content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="lg:col-span-7 lg:pt-32 space-y-12"
          >
            {/* Elegant paragraph */}
            <div className="space-y-6 max-w-xl">
              <p
                className="text-[min(5vw,24px)] leading-relaxed text-[#6B0F1A]"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                I'm a passionate AI/ML student and Python developer dedicated to building
                intelligent systems that push the boundaries of what's possible.
              </p>
              <p
                className="text-base leading-loose text-[#6B0F1A] opacity-80"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                My journey combines deep technical expertise with creative problem-solving,
                exploring neural networks, machine learning algorithms, and innovative applications
                of artificial intelligence. I believe in creating technology that's not just
                functional, but elegant and transformative.
              </p>
            </div>

            {/* Floating labels */}
            <div className="flex flex-wrap gap-4 pt-8">
              {["Machine Learning", "Deep Learning", "Python", "Neural Networks", "Data Science"].map(
                (skill, i) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                    viewport={{ once: true }}
                    className="px-5 py-2 border border-[#6B0F1A] border-opacity-20 hover:bg-[#6B0F1A] hover:text-[#F6EEE8] transition-all duration-300 cursor-default"
                  >
                    <span
                      className="text-sm tracking-wider"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {skill}
                    </span>
                  </motion.div>
                )
              )}
            </div>

            {/* Layered decorative element */}
            <div className="relative pt-16">
              <div className="flex items-center gap-8">
                <div className="space-y-2">
                  <div
                    className="text-[min(10vw,60px)] text-[#4A0013] leading-none"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    5+
                  </div>
                  <div
                    className="text-xs tracking-wider uppercase text-[#6B0F1A] opacity-60"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Projects
                  </div>
                </div>
                <div className="h-16 w-px bg-[#6B0F1A] opacity-20"></div>
                <div className="space-y-2">
                  <div
                    className="text-[min(10vw,60px)] text-[#4A0013] leading-none"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    100%
                  </div>
                  <div
                    className="text-xs tracking-wider uppercase text-[#6B0F1A] opacity-60"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Dedication
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
