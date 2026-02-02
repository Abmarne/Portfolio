import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, RotateCcw, Sparkles } from "lucide-react";

const ChooseYourPath = () => {
  const [currentScene, setCurrentScene] = useState("start");
  const [choices, setChoices] = useState([]);

  const story = {
    start: {
      title: "🚀 Your Journey Begins",
      text: "You've landed on my portfolio. What would you like to explore first?",
      options: [
        { text: "See my technical skills", next: "skills", emoji: "💻" },
        { text: "Check out my projects", next: "projects", emoji: "🎨" },
        { text: "Learn about my journey", next: "journey", emoji: "📖" },
      ],
    },
    skills: {
      title: "💻 The Tech Arsenal",
      text: "I'm proficient in full-stack development with Java Spring Boot and MERN stack. I build scalable applications and love clean code. What interests you most?",
      options: [
        { text: "Backend expertise", next: "backend", emoji: "⚙️" },
        { text: "Frontend magic", next: "frontend", emoji: "✨" },
        { text: "Go back", next: "start", emoji: "↩️" },
      ],
    },
    backend: {
      title: "⚙️ Backend Mastery",
      text: "I architect REST APIs, work with microservices, and ensure data flows smoothly. At Tech Mahindra, I handle card payment systems processing millions of transactions. Impressive, right?",
      options: [
        { text: "See my projects", next: "projects", emoji: "🎨" },
        { text: "Learn more about me", next: "journey", emoji: "📖" },
        { text: "Start over", next: "start", emoji: "🔄" },
      ],
    },
    frontend: {
      title: "✨ Frontend Excellence",
      text: "I create beautiful, responsive UIs with React, implement smooth animations, and ensure pixel-perfect designs. This portfolio you're experiencing? Built with React, Three.js, and Framer Motion!",
      options: [
        { text: "See my projects", next: "projects", emoji: "🎨" },
        { text: "Learn more about me", next: "journey", emoji: "📖" },
        { text: "Start over", next: "start", emoji: "🔄" },
      ],
    },
    projects: {
      title: "🎨 The Creations",
      text: "From Employee Management Systems to real-time chat apps, I've built diverse projects. My proudest creation? The 'regulated-form-validator' - an open-source library helping developers worldwide!",
      options: [
        { text: "Tell me about open source", next: "opensource", emoji: "🌟" },
        { text: "What's your journey?", next: "journey", emoji: "📖" },
        { text: "Start over", next: "start", emoji: "🔄" },
      ],
    },
    opensource: {
      title: "🌟 Open Source Advocate",
      text: "I believe in giving back! My 'regulated-form-validator' is a YAML-driven form validation library that makes building secure, compliant forms easier. It's my way of making the web better, one validation at a time.",
      options: [
        { text: "Learn about my journey", next: "journey", emoji: "📖" },
        { text: "Let's connect!", next: "connect", emoji: "🤝" },
        { text: "Start over", next: "start", emoji: "🔄" },
      ],
    },
    journey: {
      title: "📖 The Journey",
      text: "From MSc in Computer Science to Associate Software Engineer at Tech Mahindra, my journey has been about continuous learning, building real-world solutions, and never stopping to grow.",
      options: [
        { text: "What drives you?", next: "values", emoji: "💡" },
        { text: "Let's work together", next: "connect", emoji: "🤝" },
        { text: "Start over", next: "start", emoji: "🔄" },
      ],
    },
    values: {
      title: "💡 What Drives Me",
      text: "Clean code, innovation, user-centric design, and collaboration. I don't just write code - I craft solutions that make a difference. Every project is an opportunity to learn and create something amazing.",
      options: [
        { text: "I'm impressed! Let's connect", next: "connect", emoji: "🤝" },
        { text: "Show me your projects", next: "projects", emoji: "🎨" },
        { text: "Start over", next: "start", emoji: "🔄" },
      ],
    },
    connect: {
      title: "🤝 Let's Build Together!",
      text: "Ready to collaborate? Whether it's a new project, a job opportunity, or just a tech chat - I'm all ears! Scroll down to the contact section and let's make something amazing together.",
      options: [{ text: "Explore more", next: "start", emoji: "🔄" }],
    },
  };

  const handleChoice = (next) => {
    setChoices([...choices, currentScene]);
    setCurrentScene(next);
  };

  const reset = () => {
    setCurrentScene("start");
    setChoices([]);
  };

  const scene = story[currentScene];

  return (
    <section
      style={{
        padding: "100px 20px",
        maxWidth: "900px",
        margin: "0 auto",
        position: "relative",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ textAlign: "center", marginBottom: "60px" }}
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          style={{ display: "inline-block", marginBottom: "20px" }}
        >
          <Sparkles size={48} color="var(--accent-purple)" />
        </motion.div>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
          Choose Your <span className="gradient-text">Adventure</span>
        </h2>
        <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem" }}>
          Interactive story - Explore my portfolio your way!
        </p>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentScene}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.4 }}
          className="glass"
          style={{
            padding: "50px",
            borderRadius: "25px",
            position: "relative",
            overflow: "hidden",
            minHeight: "400px",
          }}
        >
          {/* Background decoration */}
          <div
            style={{
              position: "absolute",
              top: "-100px",
              right: "-100px",
              width: "300px",
              height: "300px",
              background:
                "radial-gradient(circle, rgba(139, 92, 246, 0.15), transparent)",
              borderRadius: "50%",
              filter: "blur(60px)",
              pointerEvents: "none",
            }}
          />

          {/* Progress indicator */}
          <div
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              fontSize: "0.85rem",
              color: "var(--text-secondary)",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span>Step {choices.length + 1}</span>
            {choices.length > 0 && (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={reset}
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  border: "none",
                  borderRadius: "50%",
                  width: "30px",
                  height: "30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
                title="Reset"
              >
                <RotateCcw size={14} />
              </motion.button>
            )}
          </div>

          {/* Scene content */}
          <div style={{ position: "relative", zIndex: 1 }}>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              style={{
                fontSize: "2.2rem",
                marginBottom: "25px",
                lineHeight: 1.3,
              }}
            >
              {scene.title}
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{
                fontSize: "1.15rem",
                lineHeight: 1.8,
                color: "var(--text-secondary)",
                marginBottom: "40px",
              }}
            >
              {scene.text}
            </motion.p>

            {/* Options */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "15px" }}
            >
              {scene.options.map((option, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleChoice(option.next)}
                  style={{
                    padding: "18px 25px",
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "15px",
                    color: "white",
                    fontSize: "1.05rem",
                    cursor: "pointer",
                    textAlign: "left",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      "rgba(139, 92, 246, 0.1)";
                    e.currentTarget.style.borderColor =
                      "rgba(139, 92, 246, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      "rgba(255, 255, 255, 0.05)";
                    e.currentTarget.style.borderColor =
                      "rgba(255, 255, 255, 0.1)";
                  }}
                >
                  <span>
                    {option.emoji} {option.text}
                  </span>
                  <ArrowRight size={20} color="var(--accent-purple)" />
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Path tracker */}
      {choices.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{
            marginTop: "30px",
            padding: "20px",
            background: "rgba(255, 255, 255, 0.03)",
            borderRadius: "15px",
            border: "1px solid rgba(255, 255, 255, 0.05)",
          }}
        >
          <p
            style={{
              fontSize: "0.9rem",
              color: "var(--text-secondary)",
              marginBottom: "10px",
            }}
          >
            Your path:
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {choices.map((choice, index) => (
              <span
                key={index}
                style={{
                  padding: "5px 12px",
                  background: "rgba(139, 92, 246, 0.1)",
                  border: "1px solid rgba(139, 92, 246, 0.3)",
                  borderRadius: "12px",
                  fontSize: "0.85rem",
                  color: "var(--accent-purple)",
                }}
              >
                {story[choice].title.split(" ")[0]}
              </span>
            ))}
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default ChooseYourPath;
