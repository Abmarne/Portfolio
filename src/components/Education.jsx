import React from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      year: "2022–2024",
      institution: "Savitribai Phule Pune University",
    },
    {
      degree: "Bachelor of Science in Computer Science",
      year: "2019–2022",
      institution: "Savitribai Phule Pune University",
    },
  ];

  return (
    <section id="education" className="education">
      <h2
        style={{
          fontSize: "2.5rem",
          marginBottom: "3rem",
          textAlign: "center",
        }}
      >
        Academic <span className="gradient-text">Background</span>
      </h2>
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        {education.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass"
            style={{
              padding: "30px",
              borderRadius: "20px",
              display: "flex",
              gap: "20px",
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                background: "var(--accent-gradient)",
                padding: "12px",
                borderRadius: "12px",
              }}
            >
              <GraduationCap size={24} color="black" />
            </div>
            <div>
              <h3 style={{ fontSize: "1.2rem", marginBottom: "5px" }}>
                {edu.degree}
              </h3>
              <p
                style={{
                  color: "var(--accent-blue)",
                  fontWeight: "600",
                  marginBottom: "5px",
                }}
              >
                {edu.institution}
              </p>
              <span
                style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}
              >
                {edu.year}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
