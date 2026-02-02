import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  Cloud,
  ShieldCheck,
  Cpu,
  Layout,
  Smartphone,
  PenTool,
  GitBranch,
  Terminal,
  Layers,
  Zap,
  Globe,
  MessageSquare,
} from "lucide-react";

const SkillIcon = ({ icon: Icon, name }) => (
  <motion.div
    className="skill-item"
    whileHover={{ scale: 1.1, y: -5 }}
    whileTap={{ scale: 0.95 }}
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "10px",
      padding: "20px",
      background: "rgba(255, 255, 255, 0.03)",
      borderRadius: "15px",
      border: "1px solid rgba(255, 255, 255, 0.05)",
      transition: "all 0.3s ease",
      cursor: "pointer",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.background = "rgba(0, 136, 255, 0.1)";
      e.currentTarget.style.border = "1px solid rgba(0, 136, 255, 0.3)";
      e.currentTarget.style.boxShadow = "0 0 20px rgba(0, 136, 255, 0.3)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)";
      e.currentTarget.style.border = "1px solid rgba(255, 255, 255, 0.05)";
      e.currentTarget.style.boxShadow = "none";
    }}
  >
    <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
      <Icon size={32} color="var(--accent-blue)" />
    </motion.div>
    <span style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
      {name}
    </span>
  </motion.div>
);

const About = () => {
  const skills = [
    {
      category: "Languages",
      items: [
        { icon: Code2, name: "Java" },
        { icon: Terminal, name: "JavaScript" },
        { icon: Database, name: "SQL" },
      ],
    },
    {
      category: "Frameworks",
      items: [
        { icon: Layers, name: "Spring Boot" },
        { icon: Layout, name: "React.js" },
        { icon: Server, name: "Node.js" },
        { icon: Zap, name: "Express.js" },
      ],
    },
    {
      category: "Databases & Tools",
      items: [
        { icon: Database, name: "MySQL" },
        { icon: Database, name: "MongoDB" },
        { icon: GitBranch, name: "Git" },
        { icon: MessageSquare, name: "Jira" },
      ],
    },
    {
      category: "Cloud & AI",
      items: [
        { icon: Cloud, name: "AWS" },
        { icon: Globe, name: "Azure" },
        { icon: Cpu, name: "AI Basics" },
      ],
    },
  ];

  return (
    <section id="about" className="about">
      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>
            About <span className="gradient-text">Me</span>
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              color: "var(--text-secondary)",
              lineHeight: 1.8,
              marginBottom: "2rem",
            }}
          >
            Full Stack Developer trained in Java, Spring Boot, REST APIs, and
            React.js. Strong in problem-solving, debugging, and teamwork.
            Gaining knowledge in Card Payments domain and AI fundamentals.
            Continuous learner adapting well in Agile environments.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
            }}
          >
            <div
              className="glass"
              style={{ padding: "20px", borderRadius: "15px" }}
            >
              <h4
                style={{ color: "var(--accent-green)", marginBottom: "10px" }}
              >
                Experience
              </h4>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                Associate Software Engineer @ Tech Mahindra
              </p>
            </div>
            <div
              className="glass"
              style={{ padding: "20px", borderRadius: "15px" }}
            >
              <h4 style={{ color: "var(--accent-blue)", marginBottom: "10px" }}>
                Education
              </h4>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                MSc in Computer Science (SPPU)
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="skills-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "15px",
          }}
        >
          {skills
            .flatMap((s) => s.items)
            .map((skill, i) => (
              <SkillIcon key={i} {...skill} />
            ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
