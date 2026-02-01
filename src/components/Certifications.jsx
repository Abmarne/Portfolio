import React from "react";
import { motion } from "framer-motion";
import { Award, CheckCircle } from "lucide-react";

const CertificationCard = ({ title, issuer }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="glass"
    style={{
      padding: "20px",
      borderRadius: "15px",
      display: "flex",
      alignItems: "center",
      gap: "15px",
      border: "1px solid rgba(255, 255, 255, 0.05)",
    }}
  >
    <div
      style={{
        background: "rgba(0, 255, 136, 0.1)",
        padding: "10px",
        borderRadius: "10px",
      }}
    >
      <Award size={24} color="var(--accent-green)" />
    </div>
    <div>
      <h4 style={{ fontSize: "1rem", marginBottom: "2px" }}>{title}</h4>
      <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>
        {issuer}
      </p>
    </div>
  </motion.div>
);

const Certifications = () => {
  const certifications = [
    { title: "CEH v12", issuer: "EC-Council" },
    { title: "Microsoft Azure AI Fundamentals", issuer: "Microsoft" },
    { title: "AWS Cloud Essentials", issuer: "Amazon Web Services" },
    { title: "DevOps on AWS", issuer: "Amazon Web Services" },
    { title: "Web Development (HTML, CSS, JS)", issuer: "Certification" },
    { title: "React Development Certificate", issuer: "Certification" },
    { title: "Node + Express + MongoDB", issuer: "Certification" },
    { title: "Bash Shell Scripting", issuer: "Certification" },
    { title: "GitHub Copilot Practitioner", issuer: "GitHub" },
  ];

  return (
    <section id="certifications" className="certifications">
      <h2
        style={{
          fontSize: "2.5rem",
          marginBottom: "3rem",
          textAlign: "center",
        }}
      >
        Professional <span className="gradient-text">Certifications</span>
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        {certifications.map((cert, i) => (
          <CertificationCard key={i} {...cert} />
        ))}
      </div>
    </section>
  );
};

export default Certifications;
