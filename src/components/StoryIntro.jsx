import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Sparkles } from "lucide-react";

const StoryIntro = () => {
  return (
    <section
      style={{
        padding: "120px 20px",
        maxWidth: "1200px",
        margin: "0 auto",
        position: "relative",
      }}
    >
      {/* Decorative elements */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "100px",
          height: "100px",
          background:
            "radial-gradient(circle, rgba(0, 136, 255, 0.1), transparent)",
          borderRadius: "50%",
          filter: "blur(40px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "5%",
          width: "150px",
          height: "150px",
          background:
            "radial-gradient(circle, rgba(0, 255, 136, 0.1), transparent)",
          borderRadius: "50%",
          filter: "blur(40px)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: "center", marginBottom: "60px" }}
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{ display: "inline-block", marginBottom: "20px" }}
        >
          <BookOpen size={48} color="var(--accent-blue)" />
        </motion.div>
        <h2
          style={{
            fontSize: "3rem",
            marginBottom: "20px",
            background: "var(--accent-gradient)",
            backgroundSize: "200% 200%",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: "gradientShift 3s ease infinite",
          }}
        >
          My Story
        </h2>
        <p
          style={{
            fontSize: "1.2rem",
            color: "var(--text-secondary)",
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: 1.8,
          }}
        >
          Every great developer has a story. Mine is about passion, persistence,
          and the pursuit of excellence in crafting digital experiences.
        </p>
      </motion.div>

      {/* Story Chapters */}
      <div style={{ display: "flex", flexDirection: "column", gap: "80px" }}>
        {/* Chapter 1: The Beginning */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass"
          style={{
            padding: "50px",
            borderRadius: "30px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-50px",
              right: "-50px",
              fontSize: "200px",
              fontWeight: "900",
              color: "rgba(0, 136, 255, 0.05)",
              fontFamily: "var(--font-heading)",
            }}
          >
            01
          </div>
          <div style={{ position: "relative", zIndex: 1 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "20px",
              }}
            >
              <Sparkles size={24} color="var(--accent-green)" />
              <h3 style={{ fontSize: "2rem", margin: 0 }}>The Spark</h3>
            </div>
            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: 1.8,
                color: "var(--text-secondary)",
                marginBottom: "20px",
              }}
            >
              It all started with curiosity. A fascination with how technology
              shapes our world led me to pursue a Master's in Computer Science
              at Savitribai Phule Pune University. Those years weren't just
              about learning syntax and algorithms—they were about understanding
              the art of problem-solving.
            </p>
            <div
              style={{
                display: "inline-block",
                padding: "8px 20px",
                background: "rgba(0, 255, 136, 0.1)",
                border: "1px solid rgba(0, 255, 136, 0.3)",
                borderRadius: "20px",
                fontSize: "0.9rem",
                color: "var(--accent-green)",
              }}
            >
              2022 - 2024 • Academic Foundation
            </div>
          </div>
        </motion.div>

        {/* Chapter 2: The Journey */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass"
          style={{
            padding: "50px",
            borderRadius: "30px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-50px",
              left: "-50px",
              fontSize: "200px",
              fontWeight: "900",
              color: "rgba(139, 92, 246, 0.05)",
              fontFamily: "var(--font-heading)",
            }}
          >
            02
          </div>
          <div style={{ position: "relative", zIndex: 1 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "20px",
              }}
            >
              <Sparkles size={24} color="var(--accent-purple)" />
              <h3 style={{ fontSize: "2rem", margin: 0 }}>The Craft</h3>
            </div>
            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: 1.8,
                color: "var(--text-secondary)",
                marginBottom: "20px",
              }}
            >
              Learning never stops. I immersed myself in the MERN stack, built
              real-world applications, and discovered my love for creating
              seamless user experiences. From Stack Overflow clones to real-time
              chat applications, each project taught me something invaluable
              about scalability, performance, and user-centric design.
            </p>
            <div
              style={{
                display: "inline-block",
                padding: "8px 20px",
                background: "rgba(139, 92, 246, 0.1)",
                border: "1px solid rgba(139, 92, 246, 0.3)",
                borderRadius: "20px",
                fontSize: "0.9rem",
                color: "var(--accent-purple)",
              }}
            >
              2023 - 2024 • Skill Development
            </div>
          </div>
        </motion.div>

        {/* Chapter 3: The Professional */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass"
          style={{
            padding: "50px",
            borderRadius: "30px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-50px",
              right: "-50px",
              fontSize: "200px",
              fontWeight: "900",
              color: "rgba(0, 136, 255, 0.05)",
              fontFamily: "var(--font-heading)",
            }}
          >
            03
          </div>
          <div style={{ position: "relative", zIndex: 1 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "20px",
              }}
            >
              <Sparkles size={24} color="var(--accent-blue)" />
              <h3 style={{ fontSize: "2rem", margin: 0 }}>The Professional</h3>
            </div>
            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: 1.8,
                color: "var(--text-secondary)",
                marginBottom: "20px",
              }}
            >
              Today, as an Associate Software Engineer at Tech Mahindra, I work
              on mission-critical card payment systems. I collaborate with
              talented teams, architect REST APIs, and ensure that millions of
              transactions flow smoothly. Every line of code I write impacts
              real users, and that responsibility drives me to deliver
              excellence.
            </p>
            <div
              style={{
                display: "inline-block",
                padding: "8px 20px",
                background: "rgba(0, 136, 255, 0.1)",
                border: "1px solid rgba(0, 136, 255, 0.3)",
                borderRadius: "20px",
                fontSize: "0.9rem",
                color: "var(--accent-blue)",
              }}
            >
              Aug 2024 - Present • Professional Growth
            </div>
          </div>
        </motion.div>

        {/* Chapter 4: The Contributor */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass"
          style={{
            padding: "50px",
            borderRadius: "30px",
            position: "relative",
            overflow: "hidden",
            border: "2px solid rgba(0, 255, 136, 0.3)",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-50px",
              left: "-50px",
              fontSize: "200px",
              fontWeight: "900",
              color: "rgba(0, 255, 136, 0.05)",
              fontFamily: "var(--font-heading)",
            }}
          >
            04
          </div>
          <div style={{ position: "relative", zIndex: 1 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "20px",
              }}
            >
              <Sparkles size={24} color="var(--accent-green)" />
              <h3 style={{ fontSize: "2rem", margin: 0 }}>
                The Open Source Advocate
              </h3>
            </div>
            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: 1.8,
                color: "var(--text-secondary)",
                marginBottom: "20px",
              }}
            >
              But my journey doesn't end with my day job. I believe in giving
              back to the community that taught me so much. That's why I created{" "}
              <strong style={{ color: "var(--accent-green)" }}>
                regulated-form-validator
              </strong>
              —a YAML-driven form validation library that helps developers build
              secure, compliant forms faster. It's my way of making the web a
              better place, one validation at a time.
            </p>
            <div
              style={{
                display: "inline-block",
                padding: "8px 20px",
                background: "rgba(0, 255, 136, 0.1)",
                border: "1px solid rgba(0, 255, 136, 0.3)",
                borderRadius: "20px",
                fontSize: "0.9rem",
                color: "var(--accent-green)",
              }}
            >
              Ongoing • Community Impact
            </div>
          </div>
        </motion.div>
      </div>

      {/* The Next Chapter */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{
          marginTop: "100px",
          textAlign: "center",
          padding: "60px 40px",
          background: "var(--accent-gradient)",
          borderRadius: "30px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(10, 10, 15, 0.9)",
            backdropFilter: "blur(10px)",
          }}
        />
        <div style={{ position: "relative", zIndex: 1 }}>
          <h3
            style={{
              fontSize: "2.5rem",
              marginBottom: "20px",
              color: "white",
            }}
          >
            The Next Chapter?
          </h3>
          <p
            style={{
              fontSize: "1.2rem",
              color: "rgba(255, 255, 255, 0.8)",
              maxWidth: "600px",
              margin: "0 auto 30px",
              lineHeight: 1.8,
            }}
          >
            That's where you come in. Whether it's building innovative products,
            solving complex challenges, or creating tools that make developers'
            lives easier—I'm ready to write the next chapter together.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" })
            }
            style={{
              padding: "15px 40px",
              background: "white",
              color: "black",
              borderRadius: "30px",
              fontSize: "1.1rem",
              fontWeight: "700",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
            }}
          >
            Let's Connect
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default StoryIntro;
