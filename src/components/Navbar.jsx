import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Journey", href: "#timeline" },
    { name: "Skills", href: "#skills" },
    { name: "AI Lab", href: "#llm-playground" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          padding: scrolled ? "15px 5%" : "25px 5%",
          background: scrolled ? "rgba(10, 10, 10, 0.9)" : "transparent",
          backdropFilter: scrolled ? "blur(15px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(255, 255, 255, 0.1)"
            : "none",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 1000,
          transition: "all 0.3s ease",
        }}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          style={{
            fontSize: "1.5rem",
            fontWeight: "800",
            fontFamily: "var(--font-heading)",
            cursor: "pointer",
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span className="gradient-text">AM</span>.
        </motion.div>

        {/* Desktop Links */}
        <div
          className="desktop-nav"
          style={{ display: "flex", gap: "25px", alignItems: "center" }}
        >
          <div
            style={{ display: "flex", gap: "25px" }}
            className="nav-links-container"
          >
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                style={{
                  fontSize: "0.85rem",
                  fontWeight: "500",
                  color: "var(--text-secondary)",
                  transition: "all 0.3s",
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
              border: "none",
              cursor: "pointer",
            }}
            onClick={() =>
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Hire Me
          </button>
        </div>

        {/* Mobile Toggle */}
        <div
          className="mobile-toggle"
          style={{ display: "none" }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </motion.nav>

      <style>
        {`
          @media (max-width: 991px) {
            .desktop-nav { display: none !important; }
            .mobile-toggle { display: block !important; cursor: pointer; z-index: 1001; }
          }
        `}
      </style>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              width: "280px",
              height: "100vh",
              background: "rgba(15, 15, 25, 0.95)",
              backdropFilter: "blur(20px)",
              zIndex: 999,
              padding: "100px 40px",
              display: "flex",
              flexDirection: "column",
              gap: "30px",
              borderLeft: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "600",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                {link.name}
              </a>
            ))}
            <button
              style={{
                background: "var(--accent-gradient)",
                padding: "12px",
                borderRadius: "15px",
                fontWeight: "700",
                color: "black",
                border: "none",
                marginTop: "20px",
              }}
              onClick={() => {
                setMobileMenuOpen(false);
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              Hire Me
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
