import React from "react";
import { motion } from "framer-motion";

const ExperienceCard = ({ company, role, date, description, highlights }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="glass"
    style={{
      padding: "30px",
      borderRadius: "20px",
      marginBottom: "30px",
      borderLeft: "4px solid var(--accent-blue)",
    }}
  >
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "15px",
        flexWrap: "wrap",
      }}
    >
      <div>
        <h3 style={{ fontSize: "1.5rem", marginBottom: "5px" }}>{role}</h3>
        <h4 style={{ color: "var(--accent-blue)", fontWeight: "500" }}>
          {company}
        </h4>
      </div>
      <span style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
        {date}
      </span>
    </div>
    <ul style={{ listStyle: "none" }}>
      {highlights.map((h, i) => (
        <li
          key={i}
          style={{
            color: "var(--text-secondary)",
            marginBottom: "8px",
            paddingLeft: "20px",
            position: "relative",
          }}
        >
          <span
            style={{
              position: "absolute",
              left: 0,
              color: "var(--accent-green)",
            }}
          >
            ▹
          </span>
          {h}
        </li>
      ))}
    </ul>
  </motion.div>
);

const Experience = () => {
  const experiences = [
    {
      company: "Tech Mahindra",
      role: "Associate Software Engineer",
      date: "Nov 2024 – Present",
      highlights: [
        "Completed Java Full Stack Training (Spring Boot + React.js).",
        "Contributed to Employee Management System project.",
        "Supported UI/API bug fixing, enhancements, and Agile sprint testing.",
        "Learned Card Payments domain basics: authorization, clearing, settlement.",
        "Exposure to T3, MPS, Mainframe for transaction analysis.",
        "Gained AI fundamentals with certifications.",
      ],
    },
    {
      company: "Shekru Labs",
      role: "Java Developer Intern",
      date: "Nov 2023 – May 2024 (6 Months)",
      highlights: [
        "Developed core backend modules for Hospital Management System using Java and Spring Boot.",
        "Implemented secure login, patient record management, and staff allocation modules.",
        "Optimized MongoDB query performance and integrated REST APIs with Java backend.",
        "Collaborated in an Agile environment using Git, Postman, and Scrum workflows.",
      ],
    },
  ];

  return (
    <section id="experience" className="experience">
      <h2
        style={{
          fontSize: "2.5rem",
          marginBottom: "3rem",
          textAlign: "center",
        }}
      >
        Professional <span className="gradient-text">Journey</span>
      </h2>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        {experiences.map((exp, i) => (
          <ExperienceCard key={i} {...exp} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
