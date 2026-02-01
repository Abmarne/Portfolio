import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        padding: scrolled ? "15px 5%" : "25px 5%",
        background: scrolled ? "rgba(10, 10, 10, 0.8)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255, 255, 255, 0.1)" : "none",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 1000,
        transition: "all 0.3s ease",
      }}
    >
      <div
        style={{
          fontSize: "1.5rem",
          fontWeight: "800",
          fontFamily: "var(--font-heading)",
        }}
      >
        <span className="gradient-text">AM</span>.
      </div>

      <div style={{ display: "flex", gap: "30px" }}>
        {navLinks.map((link, i) => (
          <a
            key={i}
            href={link.href}
            style={{
              fontSize: "0.9rem",
              fontWeight: "500",
              color: "var(--text-secondary)",
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--accent-blue)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--text-secondary)")
            }
          >
            {link.name}
          </a>
        ))}
      </div>

      <button
        style={{
          background: "var(--accent-gradient)",
          padding: "8px 20px",
          borderRadius: "20px",
          fontSize: "0.85rem",
          fontWeight: "600",
          color: "black",
        }}
        onClick={() => document.getElementById("contact").scrollIntoView()}
      >
        Hire Me
      </button>
    </motion.nav>
  );
};

export default Navbar;
