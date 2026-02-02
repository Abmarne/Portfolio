import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, RotateCcw, Code2, Terminal } from "lucide-react";

const InteractiveCodePlayground = () => {
  const [activeTab, setActiveTab] = useState("javascript");
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  const codeExamples = {
    javascript: {
      code: `// Try editing this code!
const greet = (name) => {
  return \`Hello, \${name}! 👋\`;
};

console.log(greet("Developer"));
console.log("Welcome to my portfolio!");`,
      language: "JavaScript",
    },
    react: {
      code: `// React Component Example
const WelcomeCard = ({ name }) => {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <h2>Hello, {name}!</h2>
      <p>Clicked: {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me!
      </button>
    </div>
  );
};`,
      language: "React",
    },
    java: {
      code: `// Java Spring Boot Example
@RestController
@RequestMapping("/api")
public class GreetingController {
    
    @GetMapping("/greet")
    public ResponseEntity<String> greet() {
        return ResponseEntity.ok(
            "Hello from Spring Boot! 🚀"
        );
    }
}`,
      language: "Java",
    },
  };

  const [code, setCode] = useState(codeExamples.javascript.code);

  const runCode = () => {
    setIsRunning(true);
    setOutput("");

    setTimeout(() => {
      try {
        // Capture console.log output
        const logs = [];
        const originalLog = console.log;
        console.log = (...args) => {
          logs.push(args.join(" "));
        };

        // Execute the code
        eval(code);

        // Restore console.log
        console.log = originalLog;

        setOutput(logs.join("\n") || "✅ Code executed successfully!");
      } catch (error) {
        setOutput(`❌ Error: ${error.message}`);
      }
      setIsRunning(false);
    }, 500);
  };

  const resetCode = () => {
    setCode(codeExamples[activeTab].code);
    setOutput("");
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCode(codeExamples[tab].code);
    setOutput("");
  };

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
        style={{ textAlign: "center", marginBottom: "60px" }}
      >
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ display: "inline-block", marginBottom: "20px" }}
        >
          <Code2 size={48} color="var(--accent-blue)" />
        </motion.div>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
          Try My <span className="gradient-text">Code</span>
        </h2>
        <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem" }}>
          Interactive playground - Edit and run code examples from my tech stack
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass"
        style={{
          borderRadius: "20px",
          overflow: "hidden",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        {/* Tabs */}
        <div
          style={{
            display: "flex",
            gap: "10px",
            padding: "20px 20px 0",
            background: "rgba(0, 0, 0, 0.3)",
          }}
        >
          {Object.keys(codeExamples).map((tab) => (
            <motion.button
              key={tab}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleTabChange(tab)}
              style={{
                padding: "10px 20px",
                background:
                  activeTab === tab
                    ? "var(--accent-gradient)"
                    : "rgba(255, 255, 255, 0.05)",
                border: "none",
                borderRadius: "8px 8px 0 0",
                color: activeTab === tab ? "black" : "white",
                fontWeight: activeTab === tab ? "600" : "400",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              {codeExamples[tab].language}
            </motion.button>
          ))}
        </div>

        {/* Code Editor */}
        <div style={{ padding: "20px" }}>
          <AnimatePresence mode="wait">
            <motion.textarea
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              value={code}
              onChange={(e) => setCode(e.target.value)}
              style={{
                width: "100%",
                minHeight: "300px",
                background: "#0a0a0f",
                color: "#00ff88",
                fontFamily: "monospace",
                fontSize: "14px",
                padding: "20px",
                borderRadius: "10px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                resize: "vertical",
                lineHeight: "1.6",
              }}
              spellCheck={false}
            />
          </AnimatePresence>

          {/* Controls */}
          <div
            style={{
              display: "flex",
              gap: "15px",
              marginTop: "20px",
              flexWrap: "wrap",
            }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={runCode}
              disabled={isRunning || activeTab !== "javascript"}
              style={{
                padding: "12px 30px",
                background:
                  activeTab === "javascript"
                    ? "var(--accent-gradient)"
                    : "rgba(255, 255, 255, 0.1)",
                border: "none",
                borderRadius: "10px",
                color:
                  activeTab === "javascript"
                    ? "black"
                    : "var(--text-secondary)",
                fontWeight: "600",
                cursor: activeTab === "javascript" ? "pointer" : "not-allowed",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <Play size={18} />
              {isRunning ? "Running..." : "Run Code"}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={resetCode}
              style={{
                padding: "12px 30px",
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "10px",
                color: "white",
                fontWeight: "600",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <RotateCcw size={18} />
              Reset
            </motion.button>

            {activeTab !== "javascript" && (
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.9rem",
                  margin: "auto 0",
                  fontStyle: "italic",
                }}
              >
                💡 Switch to JavaScript tab to run code
              </p>
            )}
          </div>

          {/* Output */}
          {output && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                marginTop: "20px",
                padding: "20px",
                background: "#0a0a0f",
                borderRadius: "10px",
                border: "1px solid rgba(0, 136, 255, 0.3)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "10px",
                }}
              >
                <Terminal size={18} color="var(--accent-blue)" />
                <span
                  style={{ fontWeight: "600", color: "var(--accent-blue)" }}
                >
                  Output:
                </span>
              </div>
              <pre
                style={{
                  color: output.startsWith("❌")
                    ? "#ff4444"
                    : "var(--accent-green)",
                  fontFamily: "monospace",
                  fontSize: "14px",
                  margin: 0,
                  whiteSpace: "pre-wrap",
                }}
              >
                {output}
              </pre>
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Fun Fact */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        style={{
          marginTop: "40px",
          textAlign: "center",
          color: "var(--text-secondary)",
          fontSize: "0.95rem",
        }}
      >
        💡 <strong>Fun fact:</strong> I write code like this every day, but with
        more coffee ☕
      </motion.div>
    </section>
  );
};

export default InteractiveCodePlayground;
