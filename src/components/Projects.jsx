import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Code, Play } from "lucide-react";
import yaml from "js-yaml";
import { validateAll } from "regulated-form-validator";

const ProjectCard = ({ title, tech, description, links, featured = false }) => (
  <motion.div
    layout
    whileHover={{ y: -10 }}
    className="glass"
    style={{
      padding: "30px",
      borderRadius: "20px",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      border: featured
        ? "2px solid var(--accent-blue)"
        : "1px solid rgba(255, 255, 255, 0.1)",
    }}
  >
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "20px",
      }}
    >
      <Code
        size={40}
        color={featured ? "var(--accent-green)" : "var(--accent-blue)"}
      />
      <div style={{ display: "flex", gap: "15px" }}>
        {links.github && (
          <a href={links.github} target="_blank" rel="noreferrer">
            <Github size={20} />
          </a>
        )}
        {links.demo && (
          <a href={links.demo} target="_blank" rel="noreferrer">
            <ExternalLink size={20} />
          </a>
        )}
      </div>
    </div>
    <h3 style={{ fontSize: "1.4rem", marginBottom: "10px" }}>{title}</h3>
    <p
      style={{
        color: "var(--text-secondary)",
        fontSize: "0.95rem",
        marginBottom: "20px",
        flexGrow: 1,
      }}
    >
      {description}
    </p>
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
      {tech.map((t, i) => (
        <span
          key={i}
          style={{
            fontSize: "0.75rem",
            padding: "4px 10px",
            background: "rgba(255,255,255,0.05)",
            borderRadius: "15px",
            color: "var(--accent-blue)",
          }}
        >
          {t}
        </span>
      ))}
    </div>
  </motion.div>
);

const RegulatedFormValidatorDemo = () => {
  const [yamlInput, setYamlInput] = useState(`fields:
  - name: username
    label: Username
    type: text
    validation:
      - type: required
        message: "Username is required"
      - type: length
        min: 5
        message: "Min 5 characters"
  - name: email
    label: Email
    type: email
    validation:
      - type: required
        message: "Email is required"
  - name: pan
    label: PAN
    type: text
    validation:
      - type: pan
        message: "Invalid PAN format"`);

  const [validationResult, setValidationResult] = useState(null);

  const handleValidate = () => {
    try {
      const parsed = yaml.load(yamlInput);
      if (!parsed || !parsed.fields) {
        throw new Error('YAML must contain a "fields" array');
      }

      // Simulate validation of some dummy data against these fields
      const dummyValues = {};
      parsed.fields.forEach((f) => {
        dummyValues[f.name] = ""; // Empty values to trigger 'required' checks
      });

      const results = validateAll(parsed.fields, dummyValues);

      setValidationResult({
        status: "success",
        message:
          "YAML Schema parsed successfully. Below are validation results for empty inputs:",
        data: results,
      });
    } catch (e) {
      setValidationResult({
        status: "error",
        message: "Validation Error: " + e.message,
      });
    }
  };

  return (
    <div
      className="glass"
      style={{ padding: "30px", borderRadius: "20px", marginTop: "40px" }}
    >
      <h3
        style={{
          marginBottom: "20px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Play size={24} color="var(--accent-green)" />
        Regulated Form Validator Live Demo
      </h3>
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}
      >
        <div>
          <label
            style={{
              display: "block",
              marginBottom: "10px",
              fontSize: "0.8rem",
              color: "var(--text-secondary)",
            }}
          >
            Input YAML Schema
          </label>
          <textarea
            value={yamlInput}
            onChange={(e) => setYamlInput(e.target.value)}
            style={{
              width: "100%",
              height: "250px",
              background: "#0a0a0a",
              color: "#00ff88",
              fontFamily: "monospace",
              padding: "15px",
              borderRadius: "10px",
              border: "1px solid rgba(255,255,255,0.1)",
              resize: "none",
            }}
          />
          <button
            onClick={handleValidate}
            style={{
              width: "100%",
              marginTop: "15px",
              padding: "12px",
              background: "var(--accent-gradient)",
              borderRadius: "10px",
              fontWeight: "600",
              color: "black",
            }}
          >
            Run Validation Test
          </button>
        </div>
        <div>
          <label
            style={{
              display: "block",
              marginBottom: "10px",
              fontSize: "0.8rem",
              color: "var(--text-secondary)",
            }}
          >
            Validation Results
          </label>
          <div
            style={{
              height: "250px",
              background: "#0a0a0a",
              padding: "15px",
              borderRadius: "10px",
              border: "1px solid rgba(255,255,255,0.1)",
              overflowY: "auto",
            }}
          >
            {validationResult ? (
              <div
                style={{
                  color:
                    validationResult.status === "success"
                      ? "var(--accent-green)"
                      : "#ff4444",
                }}
              >
                <p style={{ fontWeight: "bold", marginBottom: "10px" }}>
                  [{validationResult.status.toUpperCase()}]
                </p>
                <p style={{ fontSize: "0.9rem" }}>{validationResult.message}</p>
                {validationResult.data && (
                  <pre
                    style={{
                      fontSize: "0.8rem",
                      marginTop: "10px",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {JSON.stringify(validationResult.data, null, 2)}
                  </pre>
                )}
              </div>
            ) : (
              <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                Output will appear here after validation...
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Employee Management System",
      tech: ["Java", "Spring Boot", "MySQL", "JWT"],
      description:
        "Role-based system (Admin, Program Manager, Tutor, Student) with automated onboarding, allocation, and progress tracking.",
      links: { github: "#" },
    },
    {
      title: "Borezy Renting App",
      tech: ["React.js", "Firebase", "Firestore"],
      description:
        "Real-time booking across branch locations with admin dashboard for pricing and live updates.",
      links: { github: "#" },
    },
    {
      title: "Stack Overflow Clone",
      tech: ["MERN Stack", "JWT", "MongoDB"],
      description:
        "Q&A posting system with tags, voting, and search. Indexed queries for efficient retrieval.",
      links: { github: "#" },
    },
    {
      title: "Social Media App",
      tech: ["MERN", "Socket.IO", "Zustand"],
      description:
        "Real-time chat with instant notifications and responsive UI with state management.",
      links: { github: "#" },
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2
        style={{
          fontSize: "2.5rem",
          marginBottom: "3rem",
          textAlign: "center",
        }}
      >
        Featured <span className="gradient-text">Projects</span>
      </h2>

      {/* Highlighted Project */}
      <div style={{ marginBottom: "60px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px",
            alignItems: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span
              style={{
                color: "var(--accent-green)",
                fontWeight: "600",
                textTransform: "uppercase",
                letterSpacing: "2px",
                fontSize: "0.8rem",
              }}
            >
              Open Source Library
            </span>
            <h3 style={{ fontSize: "2.2rem", margin: "10px 0 20px 0" }}>
              Regulated Form Validator
            </h3>
            <p
              style={{
                color: "var(--text-secondary)",
                lineHeight: 1.8,
                marginBottom: "20px",
              }}
            >
              A YAML-driven regulated form validator for structured, secure, and
              reusable form validation. Centralize validation rules and enforce
              compliance across enterprise workflows.
            </p>
            <div style={{ display: "flex", gap: "20px" }}>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "var(--accent-blue)",
                }}
              >
                <Github size={20} /> GitHub
              </a>
              <a
                href="https://npmjs.com"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "var(--accent-green)",
                }}
              >
                <Code size={20} /> NPM Package
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass"
            style={{ padding: "20px", borderRadius: "20px" }}
          >
            <ul style={{ listStyle: "none" }}>
              {[
                "Centralized validation rules in YAML",
                "Enforces compliance across forms",
                "Extensible for enterprise workflows",
              ].map((feat, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "10px",
                    color: "var(--text-secondary)",
                  }}
                >
                  <div
                    style={{
                      width: "6px",
                      height: "6px",
                      background: "var(--accent-green)",
                      borderRadius: "50%",
                    }}
                  />
                  {feat}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <RegulatedFormValidatorDemo />
      </div>

      {/* Grid Projects */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "25px",
        }}
      >
        {projects.map((proj, i) => (
          <ProjectCard key={i} {...proj} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
