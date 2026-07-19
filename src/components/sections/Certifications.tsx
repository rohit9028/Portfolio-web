import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ExternalLink, Calendar, Building2, X } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import Reveal from "@/components/common/Reveal";
import { fadeUp, slideInLeft, slideInRight } from "@/animations/variants";

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  description: string;
  skills: string[];
}

const certifications: Certificate[] = [
  {
    id: "coderscave-webdev",
    title: "Web Development Internship",
    issuer: "CodersCave",
    date: "2024",
    image: "/coderscave-certificate.png",
    description:
      "Successfully completed a 1 Month Virtual Internship in Web Development with an outstanding performance at CodersCave. This internship covered building responsive, modern web applications using HTML, CSS, JavaScript, and related frontend technologies. Gained hands-on experience in real-world web development projects, code reviews, and professional workflows.",
    skills: ["HTML", "CSS", "JavaScript", "Web Development", "Responsive Design"],
  },
];

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <section id="certifications" className="relative py-24 sm:py-32">
      <div className="section-container">
        <SectionHeading
          eyebrow="certifications.earned"
          title="Professional"
          highlight="Certifications"
          description="Credentials and certifications that validate my skills and dedication to continuous learning."
        />

        <div className="mt-16 space-y-10">
          {certifications.map((cert, i) => (
            <Reveal key={cert.id} variants={fadeUp} index={i}>
              <div className="glass-card overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Certificate Image */}
                  <Reveal variants={slideInLeft} index={0}>
                    <motion.div
                      className="relative group cursor-pointer overflow-hidden"
                      onClick={() => setSelectedCert(cert)}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full min-h-[280px]">
                        <img
                          src={cert.image}
                          alt={`${cert.title} - ${cert.issuer}`}
                          className="absolute inset-0 h-full w-full object-cover object-center"
                        />
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/80 via-bg-deep/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                          <motion.span
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-5 py-2.5 text-sm font-medium text-white border border-white/20"
                          >
                            <ExternalLink size={14} /> Click to view full size
                          </motion.span>
                        </div>
                      </div>
                      {/* Gradient border accent */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-highlight" />
                    </motion.div>
                  </Reveal>

                  {/* Certificate Info */}
                  <Reveal variants={slideInRight} index={1}>
                    <div className="p-7 sm:p-9 flex flex-col justify-center">
                      {/* Badge */}
                      <div className="inline-flex items-center gap-2 self-start mb-5">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-highlight/20 text-secondary">
                          <Award size={20} />
                        </span>
                        <span className="badge">Verified Certificate</span>
                      </div>

                      {/* Title */}
                      <h3 className="font-display text-2xl font-bold sm:text-3xl">
                        {cert.title}
                      </h3>

                      {/* Issuer & Date */}
                      <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-text-muted">
                        <span className="inline-flex items-center gap-1.5">
                          <Building2 size={14} className="text-secondary" />
                          {cert.issuer}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar size={14} className="text-secondary" />
                          {cert.date}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="mt-5 text-text-muted leading-relaxed text-[0.95rem]">
                        {cert.description}
                      </p>

                      {/* Skills Tags */}
                      <div className="mt-6 flex flex-wrap gap-2">
                        {cert.skills.map((skill) => (
                          <motion.span
                            key={skill}
                            whileHover={{ scale: 1.08, y: -2 }}
                            className="rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 px-3.5 py-1.5 text-xs font-medium text-secondary"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>

                      {/* View Button */}
                      <motion.button
                        type="button"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => setSelectedCert(cert)}
                        className="btn-gradient mt-7 self-start !px-6 !py-2.5 text-sm"
                      >
                        <ExternalLink size={15} /> View Certificate
                      </motion.button>
                    </div>
                  </Reveal>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedCert(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-bg-deep/90 backdrop-blur-xl" />

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 30 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                type="button"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedCert(null)}
                className="absolute -top-4 -right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-highlight text-white shadow-lg shadow-primary/30"
              >
                <X size={18} />
              </motion.button>

              {/* Certificate Image */}
              <div className="glass-card overflow-hidden p-2 sm:p-3">
                <img
                  src={selectedCert.image}
                  alt={`${selectedCert.title} - ${selectedCert.issuer}`}
                  className="w-full h-auto rounded-xl"
                />
                <div className="mt-3 flex items-center justify-between px-3 pb-2">
                  <div>
                    <h4 className="font-display text-lg font-semibold">
                      {selectedCert.title}
                    </h4>
                    <p className="text-sm text-text-muted">
                      {selectedCert.issuer} · {selectedCert.date}
                    </p>
                  </div>
                  <span className="badge">{selectedCert.issuer}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
