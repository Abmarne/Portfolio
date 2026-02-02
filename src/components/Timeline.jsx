import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const TimelineItem = ({
  title,
  company,
  period,
  description,
  technologies,
  index,
}) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      style={{
        display: "grid",
        gridTemplateColumns: isEven ? "1fr auto 1fr" : "1fr auto 1fr",
        gap: "30px",
        alignItems: "center",
        marginBottom: "60px",
        position: "relative",
      }}
    >
      {/* Content */}
      <div
        style={{ textAlign: isEven ? "right" : "left", order: isEven ? 1 : 3 }}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="glass"
          style={{
            padding: "30px",
            borderRadius: "20px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "10px",
              justifyContent: isEven ? "flex-end" : "flex-start",
            }}
          >
            <Calendar size={16} color="var(--accent-blue)" />
            <span
              style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}
            >
              {period}
            </span>
          </div>
          <h3 style={{ fontSize: "1.5rem", marginBottom: "5px" }}>{title}</h3>
          <p
            style={{
              color: "var(--accent-green)",
              fontWeight: "600",
              marginBottom: "15px",
            }}
          >
            {company}
          </p>
          <p
            style={{
              color: "var(--text-secondary)",
              lineHeight: 1.6,
              marginBottom: "15px",
            }}
          >
            {description}
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              justifyContent: isEven ? "flex-end" : "flex-start",
            }}
          >
            {technologies.map((tech, i) => (
              <span
                key={i}
                style={{
                  fontSize: "0.75rem",
                  padding: "4px 12px",
                  background: "rgba(0, 136, 255, 0.1)",
                  border: "1px solid rgba(0, 136, 255, 0.3)",
                  borderRadius: "15px",
                  color: "var(--accent-blue)",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Timeline dot */}
      <div style={{ order: 2, position: "relative", zIndex: 2 }}>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            background: "var(--accent-gradient)",
            border: "4px solid var(--bg-primary)",
            boxShadow: "0 0 20px rgba(0, 136, 255, 0.5)",
          }}
        />
      </div>

      {/* Empty space */}
      <div style={{ order: isEven ? 3 : 1 }} />
    </motion.div>
  );
};

const Timeline = () => {
  const experiences = [
    {
      title: "Associate Software Engineer",
      company: "Tech Mahindra",
      period: "Aug 2024 - Present",
      description:
        "Working on card payments domain, developing REST APIs, and implementing backend features using Spring Boot and Java. Collaborating in Agile teams to deliver high-quality solutions.",
      technologies: ["Java", "Spring Boot", "REST API", "MySQL", "Agile"],
    },
    {
      title: "Java Developer Intern",
      company: "Shekru Labs",
      period: "Nov 2023 - May 2024",
      description:
        "Developed core backend modules for a Hospital Management System. Optimized MongoDB queries and integrated secure REST APIs using Java and Spring Boot.",
      technologies: ["Java", "Spring Boot", "MongoDB", "REST API", "Agile"],
    },
    {
      title: "Full Stack Development Training",
      company: "Self-Learning & Projects",
      period: "2023 - 2024",
      description:
        "Intensive learning phase focusing on MERN stack development, building multiple full-stack applications, and contributing to open-source projects.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Firebase"],
    },
    {
      title: "MSc in Computer Science",
      company: "Savitribai Phule Pune University",
      period: "2022 - 2024",
      description:
        "Completed Master's degree with focus on advanced algorithms, data structures, and software engineering principles. Developed multiple academic projects.",
      technologies: ["Algorithms", "Data Structures", "Software Engineering"],
    },
  ];

  return (
    <section
      id="timeline"
      style={{
        padding: "100px 20px",
        maxWidth: "1200px",
        margin: "0 auto",
        position: "relative",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ textAlign: "center", marginBottom: "80px" }}
      >
        <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
          My <span className="gradient-text">Journey</span>
        </h2>
        <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem" }}>
          A timeline of my professional and educational milestones
        </p>
      </motion.div>

      {/* Vertical line */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "200px",
          bottom: "100px",
          width: "2px",
          background:
            "linear-gradient(180deg, transparent, var(--accent-blue), transparent)",
          transform: "translateX(-50%)",
        }}
      />

      <div style={{ position: "relative" }}>
        {experiences.map((exp, index) => (
          <TimelineItem key={index} {...exp} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Timeline;
