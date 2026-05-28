import { motion } from "motion/react";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    title: "PROCGONS AI",
    category: "Neural Networks",
    description:
      "An advanced procedural generation system powered by artificial intelligence, creating unique polygonal structures through deep learning.",
    image:
      "https://images.unsplash.com/photo-1737505599159-5ffc1dcbc08f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neSUyMGFic3RyYWN0JTIwbmV1cmFsJTIwbmV0d29ya3xlbnwxfHx8fDE3NzkzNzczNzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Python", "TensorFlow", "Computer Vision"],
    featured: true,
  },
  {
    title: "Sentiment Analyzer",
    category: "NLP",
    description:
      "Real-time sentiment analysis engine using transformer models to understand emotional context in text data.",
    image:
      "https://images.unsplash.com/photo-1761740533449-b8d4385e60b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neSUyMGFic3RyYWN0JTIwbmV1cmFsJTIwbmV0d29ya3xlbnwxfHx8fDE3NzkzNzczNzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["BERT", "PyTorch", "NLP"],
    featured: false,
  },
  {
    title: "Predictive Analytics",
    category: "Machine Learning",
    description:
      "Time series forecasting model for predictive analytics, enabling data-driven decision making.",
    image:
      "https://images.unsplash.com/photo-1770210217380-d78a69acdc77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neSUyMGFic3RyYWN0JTIwbmV1cmFsJTIwbmV0d29ya3xlbnwxfHx8fDE3NzkzNzczNzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Scikit-learn", "Pandas", "Data Analysis"],
    featured: false,
  },
];

export function ProjectsSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      id="projects"
      className="py-32 lg:py-48 bg-[#4A0013] relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjRjZFRUU4Ij48L3JlY3Q+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRjZFRUU4IiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvc3ZnPg==')]"></div>

      {/* Mouse-following glow */}
      <motion.div
        className="absolute w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(216, 180, 160, 0.15) 0%, transparent 70%)",
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
        animate={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />

      <div className="container mx-auto px-6 lg:px-12 xl:px-24">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mb-24 lg:mb-32"
        >
          <span
            className="text-xs tracking-[0.3em] uppercase text-[#D8B4A0] opacity-60"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            02 — Selected Works
          </span>
          <h2
            className="mt-4 text-[min(12vw,80px)] leading-[1.1] text-[#F6EEE8]"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Featured Projects
          </h2>
        </motion.div>

        {/* Projects grid */}
        <div className="space-y-32 lg:space-y-48">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                index % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`lg:col-span-7 relative group ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#6B0F1A]">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full h-full"
                  >
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-[#6B0F1A] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

                  {/* Featured badge */}
                  {project.featured && (
                    <div className="absolute top-6 left-6 bg-[#F6EEE8] px-4 py-2">
                      <span
                        className="text-xs tracking-[0.3em] uppercase text-[#4A0013]"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        Featured
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Content */}
              <div
                className={`lg:col-span-5 space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <div className="space-y-4">
                  <span
                    className="text-sm tracking-[0.3em] uppercase text-[#D8B4A0]"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {project.category}
                  </span>

                  <h3
                    className="text-[min(10vw,64px)] leading-[1.1] text-[#F6EEE8]"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {project.title}
                  </h3>

                  <p
                    className="text-lg leading-relaxed text-[#D8B4A0]"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 border border-[#F6EEE8] border-opacity-20 text-[#F6EEE8] text-xs tracking-wider"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View project button */}
                <button className="group inline-flex items-center gap-3 pt-6 text-[#F6EEE8] hover:text-[#D8B4A0] transition-colors duration-300">
                  <span
                    className="text-sm tracking-[0.2em] uppercase"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    View Project
                  </span>
                  <motion.div
                    whileHover={{ x: 4, y: -4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </motion.div>
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
