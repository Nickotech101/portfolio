import { motion } from "motion/react";
import { Brain, Code2, Database, GitBranch, Layers, Zap } from "lucide-react";

const skillCategories = [
  {
    category: "Machine Learning",
    icon: Brain,
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "Neural Networks"],
  },
  {
    category: "Programming",
    icon: Code2,
    skills: ["Python", "JavaScript", "TypeScript", "C++", "SQL"],
  },
  {
    category: "Data Science",
    icon: Database,
    skills: ["Pandas", "NumPy", "Matplotlib", "Data Analysis", "Statistics"],
  },
  {
    category: "Tools & Frameworks",
    icon: Layers,
    skills: ["Git", "Docker", "Jupyter", "React", "Node.js"],
  },
  {
    category: "AI Technologies",
    icon: Zap,
    skills: ["NLP", "Computer Vision", "Deep Learning", "Reinforcement Learning"],
  },
  {
    category: "Version Control",
    icon: GitBranch,
    skills: ["Git", "GitHub", "GitLab", "CI/CD"],
  },
];

export function SkillsSection() {
  return (
    <section className="py-32 lg:py-48 bg-[#F6EEE8] relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#D8B4A0] to-transparent opacity-10"></div>

      <div className="container mx-auto px-6 lg:px-12 xl:px-24">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mb-24 text-center"
        >
          <span
            className="text-xs tracking-[0.3em] uppercase text-[#6B0F1A] opacity-60"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            03 — Expertise
          </span>
          <h2
            className="mt-4 text-[min(12vw,80px)] leading-[1.1] text-[#4A0013]"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Skills & Technologies
          </h2>
        </motion.div>

        {/* Minimal icon grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 mb-24">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="group space-y-6"
              >
                {/* Icon */}
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-[#6B0F1A] group-hover:bg-[#4A0013] transition-colors duration-300">
                    <Icon className="w-6 h-6 text-[#F6EEE8]" />
                  </div>
                  <h3
                    className="text-xl text-[#4A0013]"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {category.category}
                  </h3>
                </div>

                {/* Floating pills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.1 + skillIndex * 0.05,
                      }}
                      viewport={{ once: true }}
                      whileHover={{ y: -2 }}
                      className="px-4 py-2 bg-white shadow-sm border border-[#6B0F1A] border-opacity-10 text-[#6B0F1A] text-sm hover:bg-[#6B0F1A] hover:text-[#F6EEE8] transition-all duration-300 cursor-default"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Moving marquee */}
        <div className="relative overflow-hidden py-12 border-t border-b border-[#6B0F1A] border-opacity-20">
          <motion.div
            className="flex gap-12 whitespace-nowrap"
            animate={{ x: [0, -1000] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex gap-12 items-center">
                <span
                  className="text-3xl lg:text-5xl text-[#4A0013] opacity-20"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Machine Learning
                </span>
                <div className="w-2 h-2 rounded-full bg-[#6B0F1A] opacity-20"></div>
                <span
                  className="text-3xl lg:text-5xl text-[#4A0013] opacity-20"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Deep Learning
                </span>
                <div className="w-2 h-2 rounded-full bg-[#6B0F1A] opacity-20"></div>
                <span
                  className="text-3xl lg:text-5xl text-[#4A0013] opacity-20"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Artificial Intelligence
                </span>
                <div className="w-2 h-2 rounded-full bg-[#6B0F1A] opacity-20"></div>
                <span
                  className="text-3xl lg:text-5xl text-[#4A0013] opacity-20"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Data Science
                </span>
                <div className="w-2 h-2 rounded-full bg-[#6B0F1A] opacity-20"></div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stacked typography */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mt-24 text-center space-y-4"
        >
          <p
            className="text-2xl lg:text-4xl text-[#6B0F1A]"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Building the future with code & creativity
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-[#6B0F1A] opacity-30"></div>
            <span
              className="text-xs tracking-[0.3em] uppercase text-[#6B0F1A] opacity-60"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Always Learning
            </span>
            <div className="h-px w-16 bg-[#6B0F1A] opacity-30"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
