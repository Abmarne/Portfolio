import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const SkillBar = ({ name, level, color, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} style={{ marginBottom: "25px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
      >
        <span style={{ fontSize: "0.95rem", fontWeight: "500" }}>{name}</span>
        <span style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
          {level}%
        </span>
      </div>
      <div
        style={{
          width: "100%",
          height: "8px",
          background: "rgba(255, 255, 255, 0.05)",
          borderRadius: "10px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.5, delay, ease: "easeOut" }}
          style={{
            height: "100%",
            background: color || "var(--accent-gradient)",
            borderRadius: "10px",
            position: "relative",
            boxShadow: `0 0 10px ${color || "rgba(0, 136, 255, 0.5)"}`,
          }}
        >
          <motion.div
            animate={{
              x: [0, 100, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "50px",
              height: "100%",
              background:
                "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)",
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

const SkillsVisualization = () => {
  const technicalSkills = [
    { name: "Java & Spring Boot", level: 90, color: "#0088ff" },
    { name: "React.js & Frontend", level: 85, color: "#00d4ff" },
    { name: "Node.js & Express", level: 80, color: "#00ff88" },
    { name: "Database (SQL/NoSQL)", level: 85, color: "#8b5cf6" },
    { name: "REST APIs & Microservices", level: 88, color: "#ec4899" },
    { name: "Cloud (AWS/Azure)", level: 75, color: "#06b6d4" },
  ];

  const softSkills = [
    { name: "Problem Solving", level: 92 },
    { name: "Team Collaboration", level: 88 },
    { name: "Communication", level: 85 },
    { name: "Agile Methodology", level: 80 },
  ];

  return (
    <section
      id="skills"
      style={{
        padding: "100px 20px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ textAlign: "center", marginBottom: "60px" }}
      >
        <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
          Technical <span className="gradient-text">Expertise</span>
        </h2>
        <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem" }}>
          Proficiency across the full stack
        </p>
      </motion.div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
        }}
      >
        {/* Technical Skills */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass"
          style={{ padding: "40px", borderRadius: "20px" }}
        >
          <h3
            style={{
              fontSize: "1.5rem",
              marginBottom: "30px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <span
              style={{
                width: "4px",
                height: "24px",
                background: "var(--accent-gradient)",
                borderRadius: "2px",
              }}
            />
            Technical Skills
          </h3>
          {technicalSkills.map((skill, index) => (
            <SkillBar key={index} {...skill} delay={index * 0.1} />
          ))}
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass"
          style={{ padding: "40px", borderRadius: "20px" }}
        >
          <h3
            style={{
              fontSize: "1.5rem",
              marginBottom: "30px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <span
              style={{
                width: "4px",
                height: "24px",
                background: "var(--accent-gradient-2)",
                borderRadius: "2px",
              }}
            />
            Soft Skills
          </h3>
          {softSkills.map((skill, index) => (
            <SkillBar
              key={index}
              {...skill}
              color="var(--accent-gradient-2)"
              delay={index * 0.1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsVisualization;
