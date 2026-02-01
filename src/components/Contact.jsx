import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send, CheckCircle2 } from "lucide-react";
import {
  FormRenderer,
  NameField,
  EmailField,
  validateAll,
} from "regulated-form-validator";

const Contact = () => {
  const [status, setStatus] = useState("idle"); // idle, sending, success

  const contactConfig = {
    fields: [
      { ...NameField, label: "Full Name", placeholder: "Enter your name" },
      {
        ...EmailField,
        label: "Email Address",
        placeholder: "Enter your email",
      },
      {
        name: "message",
        label: "Message",
        type: "textarea",
        validation: [{ type: "required", message: "Please enter a message" }],
        placeholder: "How can I help you?",
      },
    ],
  };

  const handleSubmit = (values) => {
    setStatus("sending");
    console.log("Form Values:", values);
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="contact">
      <div
        className="container"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px" }}
      >
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              lineHeight: 1.8,
              marginBottom: "2.5rem",
            }}
          >
            I'm always open to discussing new projects, creative ideas or
            opportunities to be part of your visions.
          </p>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            {[
              {
                icon: Mail,
                label: "Email",
                value: "abhiraj@example.com",
                link: "mailto:abhiraj@example.com",
              },
              {
                icon: Linkedin,
                label: "LinkedIn",
                value: "Abhiraj Madan Marne",
                link: "https://linkedin.com",
              },
              {
                icon: Github,
                label: "GitHub",
                value: "@abhiraj",
                link: "https://github.com",
              },
            ].map((social, i) => (
              <a
                key={i}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                className="glass"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  padding: "15px 20px",
                  borderRadius: "12px",
                  transition: "transform 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateX(10px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateX(0)")
                }
              >
                <social.icon size={20} color="var(--accent-blue)" />
                <div>
                  <p
                    style={{
                      fontSize: "0.7rem",
                      color: "var(--text-secondary)",
                      textTransform: "uppercase",
                    }}
                  >
                    {social.label}
                  </p>
                  <p style={{ fontWeight: "600" }}>{social.value}</p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass contact-form-container"
          style={{ padding: "40px", borderRadius: "24px" }}
        >
          <div className="rfv-form-wrapper">
            <FormRenderer config={contactConfig} onSubmit={handleSubmit} />
          </div>

          {status === "success" && (
            <div
              style={{
                marginTop: "20px",
                color: "var(--accent-green)",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <CheckCircle2 size={18} /> Message sent successfully!
            </div>
          )}

          <p
            style={{
              fontSize: "0.7rem",
              color: "var(--text-secondary)",
              textAlign: "center",
              marginTop: "20px",
            }}
          >
            * Form rendered and validated using{" "}
            <strong>regulated-form-validator</strong>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
