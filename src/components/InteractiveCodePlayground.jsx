import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, RotateCcw, Brain, Terminal, Sparkles } from "lucide-react";

const InteractiveCodePlayground = () => {
  const [activeTab, setActiveTab] = useState("ai_prompt");
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  const codeExamples = {
    ai_prompt: {
      code: `// AI Prompt Engineering Simulation
const systemPrompt = "You are a helpful coding assistant.";
const userQuery = "Explain how neural networks learn.";

async function simulateAIResponse(query) {
  console.log("Analyzing prompt...");
  console.log("Context window: 128k tokens");
  console.log("Thinking: [Backpropagation, Gradient Descent, Weights]");
  return "Neural networks learn by adjusting internal weights to minimize error...";
}

simulateAIResponse(userQuery).then(res => console.log("AI:", res));`,
      language: "Prompting",
    },
    inference: {
      code: `// Model Inference Logic (Pseudo-code)
class LLMModel {
  constructor(modelName) {
    this.name = modelName;
    this.parameters = "175B";
  }

  generate(prompt) {
    console.log(\`Running inference on \${this.name}...\`);
    return "Optimized response generated.";
  }
}

const gpt4 = new LLMModel("GPT-4o");
console.log(gpt4.generate("Hello AI!"));`,
      language: "Inference",
    },
    agents: {
      code: `// AI Agent Tool Use
const agent = {
  tools: ["web_search", "calculator"],
  plan: (task) => {
    console.log("Task:", task);
    console.log("Step 1: Search for real-time data");
    console.log("Step 2: Process results with LLM");
    return "Success: Task completed using tool 'web_search'";
  }
};

console.log(agent.plan("Find recent AI news"));`,
      language: "Agentic",
    },
  };

  const [code, setCode] = useState(codeExamples.ai_prompt.code);

  const runCode = () => {
    setIsRunning(true);
    setOutput("");

    setTimeout(() => {
      try {
        const logs = [];
        const originalLog = console.log;
        console.log = (...args) => {
          logs.push(args.join(" "));
        };

        // Execute as async if possible or just eval
        if (code.includes("await") || code.includes("then")) {
          // Basic simulation of async execution in eval
          eval(code);
        } else {
          eval(code);
        }

        console.log = originalLog;
        setOutput(logs.join("\n") || "✅ AI Process Complete!");
      } catch (error) {
        setOutput(`❌ AI Error: ${error.message}`);
      }
      setIsRunning(false);
    }, 800);
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
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          style={{ display: "inline-block", marginBottom: "20px" }}
        >
          <Brain size={48} color="var(--accent-blue)" />
        </motion.div>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
          AI Agent <span className="gradient-text">Sandbox</span>
        </h2>
        <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem" }}>
          Explore AI logic, prompt structures, and agentic workflows in
          real-time
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
              disabled={isRunning}
              style={{
                padding: "12px 30px",
                background: "var(--accent-gradient)",
                border: "none",
                borderRadius: "10px",
                color: "black",
                fontWeight: "600",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <Sparkles size={18} />
              {isRunning ? "Simulating..." : "Run Simulation"}
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
        💡 <strong>AI Thought:</strong> I'm not just a developer; I'm an
        architect for the silicon era. 🤖
      </motion.div>
    </section>
  );
};

export default InteractiveCodePlayground;
