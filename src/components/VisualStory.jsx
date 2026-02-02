import React from "react";
import { motion } from "framer-motion";
import { Code, Rocket, Heart, Users } from "lucide-react";

const VisualStory = () => {
  return (
    <section
      style={{
        padding: "100px 20px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ textAlign: "center", marginBottom: "80px" }}
      >
        <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
          What Drives <span className="gradient-text">Me</span>
        </h2>
        <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem" }}>
          The values and passions that fuel my work
        </p>
      </motion.div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "30px",
        }}
      >
        {/* Value Card 1 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0 }}
          whileHover={{ y: -10 }}
          className="glass"
          style={{
            padding: "40px",
            borderRadius: "25px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-50%",
              left: "-50%",
              width: "200%",
              height: "200%",
              background:
                "radial-gradient(circle, rgba(0, 136, 255, 0.1) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{
              width: "80px",
              height: "80px",
              margin: "0 auto 20px",
              background: "rgba(0, 136, 255, 0.1)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid rgba(0, 136, 255, 0.3)",
            }}
          >
            <Code size={36} color="var(--accent-blue)" />
          </motion.div>
          <h3 style={{ fontSize: "1.5rem", marginBottom: "15px" }}>
            Clean Code
          </h3>
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>
            I believe code is poetry. Every function, every variable name
            matters. I write code that's not just functional, but beautiful and
            maintainable.
          </p>
        </motion.div>

        {/* Value Card 2 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          whileHover={{ y: -10 }}
          className="glass"
          style={{
            padding: "40px",
            borderRadius: "25px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-50%",
              right: "-50%",
              width: "200%",
              height: "200%",
              background:
                "radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{
              width: "80px",
              height: "80px",
              margin: "0 auto 20px",
              background: "rgba(139, 92, 246, 0.1)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid rgba(139, 92, 246, 0.3)",
            }}
          >
            <Rocket size={36} color="var(--accent-purple)" />
          </motion.div>
          <h3 style={{ fontSize: "1.5rem", marginBottom: "15px" }}>
            Innovation
          </h3>
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>
            Technology evolves rapidly, and so do I. I'm always exploring new
            frameworks, patterns, and approaches to build better solutions.
          </p>
        </motion.div>

        {/* Value Card 3 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          whileHover={{ y: -10 }}
          className="glass"
          style={{
            padding: "40px",
            borderRadius: "25px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-50%",
              left: "-50%",
              width: "200%",
              height: "200%",
              background:
                "radial-gradient(circle, rgba(0, 255, 136, 0.1) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{
              width: "80px",
              height: "80px",
              margin: "0 auto 20px",
              background: "rgba(0, 255, 136, 0.1)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid rgba(0, 255, 136, 0.3)",
            }}
          >
            <Heart size={36} color="var(--accent-green)" />
          </motion.div>
          <h3 style={{ fontSize: "1.5rem", marginBottom: "15px" }}>
            User-Centric
          </h3>
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>
            At the end of the day, it's about the people. I build applications
            that solve real problems and create delightful user experiences.
          </p>
        </motion.div>

        {/* Value Card 4 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          whileHover={{ y: -10 }}
          className="glass"
          style={{
            padding: "40px",
            borderRadius: "25px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-50%",
              right: "-50%",
              width: "200%",
              height: "200%",
              background:
                "radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            style={{
              width: "80px",
              height: "80px",
              margin: "0 auto 20px",
              background: "rgba(236, 72, 153, 0.1)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid rgba(236, 72, 153, 0.3)",
            }}
          >
            <Users size={36} color="var(--accent-pink)" />
          </motion.div>
          <h3 style={{ fontSize: "1.5rem", marginBottom: "15px" }}>
            Collaboration
          </h3>
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>
            Great products are built by great teams. I thrive in collaborative
            environments where ideas flow freely and everyone grows together.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default VisualStory;
