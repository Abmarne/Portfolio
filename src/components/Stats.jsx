import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Code, Coffee, Users } from "lucide-react";

const CountUpAnimation = ({ end, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const isInView = useInView(countRef, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);

  return (
    <span ref={countRef}>
      {count}
      {suffix}
    </span>
  );
};

const StatCard = ({ icon: Icon, value, label, suffix = "", delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    whileHover={{ y: -10, scale: 1.05 }}
    className="glass"
    style={{
      padding: "40px 30px",
      borderRadius: "20px",
      textAlign: "center",
      position: "relative",
      overflow: "hidden",
      border: "1px solid rgba(255, 255, 255, 0.1)",
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
          "radial-gradient(circle, rgba(0, 136, 255, 0.1) 0%, transparent 70%)",
        pointerEvents: "none",
      }}
    />
    <Icon
      size={40}
      color="var(--accent-blue)"
      style={{ marginBottom: "15px" }}
    />
    <h3
      style={{
        fontSize: "3rem",
        fontWeight: "800",
        background: "var(--accent-gradient)",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
        marginBottom: "10px",
      }}
    >
      <CountUpAnimation end={value} suffix={suffix} />
    </h3>
    <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
      {label}
    </p>
  </motion.div>
);

const Stats = () => {
  const stats = [
    { icon: Code, value: 20, suffix: "+", label: "Projects Completed" },
    { icon: Coffee, value: 500, suffix: "+", label: "Cups of Coffee" },
    { icon: Award, value: 5, suffix: "+", label: "Certifications" },
    { icon: Users, value: 1000, suffix: "+", label: "Lines of Code Daily" },
  ];

  return (
    <section
      style={{
        padding: "100px 20px",
        maxWidth: "1200px",
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
        <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
          By The <span className="gradient-text">Numbers</span>
        </h2>
        <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem" }}>
          A snapshot of my journey in tech
        </p>
      </motion.div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "30px",
        }}
      >
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} delay={index * 0.1} />
        ))}
      </div>
    </section>
  );
};

export default Stats;
