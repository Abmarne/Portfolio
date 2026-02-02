import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, GraduationCap, Trophy, Star } from "lucide-react";

const AchievementCard = ({ title, issuer, icon: Icon, category, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      style={{
        perspective: "1000px",
        height: "180px",
      }}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        onClick={() => setIsFlipped(!isFlipped)}
        className="glass"
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "20px",
          cursor: "pointer",
          position: "relative",
          transformStyle: "preserve-3d",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        {/* Front */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            padding: "25px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.6 }}
            style={{
              background: `rgba(${category === "education" ? "0, 136, 255" : "0, 255, 136"}, 0.1)`,
              padding: "15px",
              borderRadius: "50%",
              marginBottom: "15px",
            }}
          >
            <Icon
              size={32}
              color={
                category === "education"
                  ? "var(--accent-blue)"
                  : "var(--accent-green)"
              }
            />
          </motion.div>
          <h4
            style={{
              fontSize: "1.05rem",
              marginBottom: "8px",
              lineHeight: 1.3,
            }}
          >
            {title}
          </h4>
          <p
            style={{
              fontSize: "0.85rem",
              color: "var(--text-secondary)",
              opacity: 0.7,
            }}
          >
            Click to flip
          </p>
        </div>

        {/* Back */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            padding: "25px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            background: `linear-gradient(135deg, rgba(${category === "education" ? "0, 136, 255" : "0, 255, 136"}, 0.1), transparent)`,
          }}
        >
          <Star
            size={24}
            color="var(--accent-green)"
            style={{ marginBottom: "10px" }}
          />
          <p
            style={{
              fontSize: "0.95rem",
              color: "var(--text-secondary)",
              lineHeight: 1.6,
            }}
          >
            {issuer}
          </p>
          <p
            style={{
              fontSize: "0.8rem",
              color: "var(--text-secondary)",
              marginTop: "10px",
              opacity: 0.7,
            }}
          >
            Click to flip back
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Certifications = () => {
  const [filter, setFilter] = useState("all");

  const achievements = [
    // Education
    {
      title: "MSc in Computer Science",
      issuer: "Savitribai Phule Pune University • 2022-2024",
      icon: GraduationCap,
      category: "education",
    },
    {
      title: "BSc in Computer Science",
      issuer: "Academic Foundation • 2019-2022",
      icon: GraduationCap,
      category: "education",
    },

    // Certifications
    {
      title: "CEH v12",
      issuer: "EC-Council • Ethical Hacking",
      icon: Award,
      category: "certification",
    },
    {
      title: "Azure AI Fundamentals",
      issuer: "Microsoft • Cloud AI",
      icon: Award,
      category: "certification",
    },
    {
      title: "AWS Cloud Essentials",
      issuer: "Amazon Web Services",
      icon: Award,
      category: "certification",
    },
    {
      title: "DevOps on AWS",
      issuer: "Amazon Web Services",
      icon: Award,
      category: "certification",
    },
    {
      title: "Full Stack Web Dev",
      issuer: "HTML, CSS, JavaScript",
      icon: Award,
      category: "certification",
    },
    {
      title: "React Development",
      issuer: "Modern Frontend Framework",
      icon: Award,
      category: "certification",
    },
    {
      title: "MERN Stack",
      issuer: "Node + Express + MongoDB",
      icon: Award,
      category: "certification",
    },
    {
      title: "Bash Shell Scripting",
      issuer: "Linux Command Line",
      icon: Award,
      category: "certification",
    },
    {
      title: "GitHub Copilot",
      issuer: "GitHub • AI-Assisted Coding",
      icon: Award,
      category: "certification",
    },
  ];

  const filteredAchievements =
    filter === "all"
      ? achievements
      : achievements.filter((a) => a.category === filter);

  return (
    <section
      id="certifications"
      style={{ padding: "100px 20px", maxWidth: "1200px", margin: "0 auto" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ textAlign: "center", marginBottom: "60px" }}
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{ display: "inline-block", marginBottom: "20px" }}
        >
          <Trophy size={48} color="var(--accent-green)" />
        </motion.div>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
          Achievements & <span className="gradient-text">Recognition</span>
        </h2>
        <p
          style={{
            color: "var(--text-secondary)",
            fontSize: "1.1rem",
            marginBottom: "30px",
          }}
        >
          My journey of continuous learning and growth
        </p>

        {/* Filter buttons */}
        <div
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {[
            { key: "all", label: "All", icon: Star },
            { key: "education", label: "Education", icon: GraduationCap },
            { key: "certification", label: "Certifications", icon: Award },
          ].map((btn) => (
            <motion.button
              key={btn.key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(btn.key)}
              style={{
                padding: "10px 25px",
                background:
                  filter === btn.key
                    ? "var(--accent-gradient)"
                    : "rgba(255, 255, 255, 0.05)",
                border:
                  filter === btn.key
                    ? "none"
                    : "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "25px",
                color: filter === btn.key ? "black" : "white",
                fontWeight: filter === btn.key ? "600" : "400",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                transition: "all 0.3s ease",
              }}
            >
              <btn.icon size={18} />
              {btn.label}
            </motion.button>
          ))}
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "25px",
          }}
        >
          {filteredAchievements.map((achievement, i) => (
            <AchievementCard key={i} {...achievement} index={i} />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Fun interaction hint */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        style={{
          marginTop: "50px",
          textAlign: "center",
          color: "var(--text-secondary)",
          fontSize: "0.95rem",
        }}
      >
        💡 <strong>Tip:</strong> Click on any card to flip and see more details!
      </motion.div>
    </section>
  );
};

export default Certifications;
