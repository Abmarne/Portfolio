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

function App() {
  return (
    <div className="portfolio-app">
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>

      <footer
        style={{
          padding: "40px 20px",
          textAlign: "center",
          borderTop: "1px solid rgba(255, 255, 255, 0.05)",
          color: "var(--text-secondary)",
          fontSize: "0.9rem",
        }}
      >
        <p>
          © {new Date().getFullYear()} Abhiraj Madan Marne. All rights reserved.
        </p>
        <p style={{ marginTop: "5px" }}>
          Built with React, Three.js & Framer Motion
        </p>
      </footer>
    </div>
  );
}

export default App;
