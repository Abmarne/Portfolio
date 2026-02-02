import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import Contact from "./components/Contact";
import ParticleBackground from "./components/ParticleBackground";
import CustomCursor from "./components/CustomCursor";
import Stats from "./components/Stats";
import Timeline from "./components/Timeline";
import SkillsVisualization from "./components/SkillsVisualization";
import StoryIntro from "./components/StoryIntro";
import VisualStory from "./components/VisualStory";
import InteractiveCodePlayground from "./components/InteractiveCodePlayground";
import ChooseYourPath from "./components/ChooseYourPath";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="portfolio-app">
      <CustomCursor />
      <ParticleBackground />
      <Navbar />
      <main>
        {/* Chapter 1: The Introduction */}
        <Hero />

        {/* Chapter 2: Choose Your Adventure - Interactive Story */}
        <ChooseYourPath />

        {/* Chapter 3: The Full Story */}
        <StoryIntro />

        {/* Chapter 4: The Skills & Expertise (Interactive Progress Bars) */}
        <SkillsVisualization />

        {/* Chapter 5: AI Agent Sandbox (Interactive Playground) */}
        <InteractiveCodePlayground />

        {/* Chapter 6: The Values */}
        <VisualStory />

        {/* Chapter 7: The Journey (Timeline) */}
        <Timeline />

        {/* Chapter 8: The Creations (Projects) */}
        <Projects />

        {/* Chapter 9: Achievements & Recognition (Flippable Cards) */}
        <Certifications />

        {/* Chapter 10: The Next Chapter (Contact) */}
        <Contact />
      </main>

      <footer
        style={{
          padding: "80px 20px 40px",
          textAlign: "center",
          borderTop: "1px solid rgba(255, 255, 255, 0.05)",
          background:
            "linear-gradient(180deg, transparent, rgba(0, 136, 255, 0.02))",
          position: "relative",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              marginBottom: "30px",
            }}
          >
            {[
              { icon: Github, link: "https://github.com", label: "GitHub" },
              {
                icon: Linkedin,
                link: "https://linkedin.com",
                label: "LinkedIn",
              },
              {
                icon: Mail,
                link: "mailto:abhiraj@example.com",
                label: "Email",
              },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--accent-gradient)";
                  e.currentTarget.style.border = "1px solid transparent";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background =
                    "rgba(255, 255, 255, 0.05)";
                  e.currentTarget.style.border =
                    "1px solid rgba(255, 255, 255, 0.1)";
                }}
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>

          {/* Footer Text */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "0.9rem",
                marginBottom: "10px",
              }}
            >
              © {new Date().getFullYear()} Abhiraj Madan Marne. All rights
              reserved.
            </p>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "0.85rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "5px",
              }}
            >
              Built with <Heart size={14} color="#ec4899" fill="#ec4899" />{" "}
              using React, Three.js & Framer Motion
            </p>
          </motion.div>
        </div>

        {/* Scroll to Top Button */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          style={{
            position: "fixed",
            bottom: "30px",
            right: "30px",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            background: "var(--accent-gradient)",
            border: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: "0 4px 20px rgba(0, 136, 255, 0.4)",
            zIndex: 999,
          }}
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} color="black" />
        </motion.button>
      </footer>
    </div>
  );
}

export default App;
