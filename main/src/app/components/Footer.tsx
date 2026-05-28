import { motion } from "motion/react";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="py-24 bg-[#4A0013] relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNGNkVFRTgiLz48L3N2Zz4=')]"></div>

      <div className="container mx-auto px-6 lg:px-12 xl:px-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2
              className="text-[min(10vw,56px)] leading-[1.1] text-[#F6EEE8]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Let's Create Something Amazing
            </h2>

            <p
              className="text-lg text-[#D8B4A0] max-w-md"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Interested in collaborating on innovative AI projects? Let's connect and build the
              future together.
            </p>

            <motion.a
              href="mailto:nikita@example.com"
              whileHover={{ x: 4 }}
              className="inline-flex items-center gap-3 group text-[#F6EEE8] hover:text-[#D8B4A0] transition-colors duration-300"
            >
              <span
                className="text-sm tracking-[0.2em] uppercase"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Get in Touch
              </span>
              <motion.div
                whileHover={{ x: 4, y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowUpRight className="w-5 h-5" />
              </motion.div>
            </motion.a>
          </motion.div>

          {/* Right: Social links */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="lg:flex lg:justify-end lg:items-end"
          >
            <div className="space-y-6">
              <p
                className="text-xs tracking-[0.3em] uppercase text-[#D8B4A0] opacity-60"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Connect
              </p>

              <div className="flex flex-col gap-4">
                {[
                  { icon: Github, label: "GitHub", href: "#" },
                  { icon: Linkedin, label: "LinkedIn", href: "#" },
                  { icon: Mail, label: "Email", href: "mailto:nikita@example.com" },
                ].map(({ icon: Icon, label, href }) => (
                  <motion.a
                    key={label}
                    href={href}
                    whileHover={{ x: 4 }}
                    className="group inline-flex items-center gap-4 text-[#F6EEE8] hover:text-[#D8B4A0] transition-colors duration-300"
                  >
                    <Icon className="w-5 h-5" />
                    <span
                      className="text-base"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="my-16 h-px bg-[#F6EEE8] opacity-10"></div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-sm text-[#D8B4A0] opacity-60"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            © {currentYear} Nikita Mishra. All rights reserved.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <span
              className="text-xs tracking-[0.3em] uppercase text-[#D8B4A0] opacity-60"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Crafted with passion
            </span>
            <motion.div
              animate={{ rotate: [0, -10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="flex items-center"
            >
              <ArrowUpRight className="w-4 h-4 text-[#D8B4A0] opacity-60" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
