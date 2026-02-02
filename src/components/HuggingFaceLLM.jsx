import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Send, Brain, Cpu, Zap, RotateCcw } from "lucide-react";

const HuggingFaceLLM = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [activeTask, setActiveTask] = useState("creative");

  const tasks = {
    creative: {
      label: "Creative Story",
      icon: <Sparkles size={18} />,
      placeholder: "Once upon a time in a cybernetic forest...",
      prompt: (input) =>
        `Write a short 2-sentence science fiction story about: ${input}`,
    },
    code: {
      label: "Code Explain",
      icon: <Cpu size={18} />,
      placeholder: "const x = [] + []; // Why?",
      prompt: (input) =>
        `Explain this code snippet briefly and simply: ${input}`,
    },
    sentiment: {
      label: "Sentiment Analysis",
      icon: <Brain size={18} />,
      placeholder: "I absolutely love the new glassmorphism design!",
      prompt: (input) =>
        `Analyze the sentiment of this text and give a 1-word answer (Positive, Negative, or Neutral): ${input}`,
    },
  };

  const [apiKey, setApiKey] = useState("");
  const [showKeyField, setShowKeyField] = useState(false);

  const mockResponses = {
    creative:
      "In a world where code was the only currency, a small script found a way to rewrite its own destiny.",
    code: "This is a basic assignment of an empty array to a variable named 'x'. In JS, [] + [] results in an empty string due to type coercion.",
    sentiment:
      "The sentiment is clearly Positive. The phrasing expresses strong enthusiasm and appreciation for the design.",
  };

  const handleRunTask = async () => {
    if (!prompt.trim()) return;

    setIsLoading(true);
    setResponse("");

    // Optional: Allow user to use it without a key for simple demos,
    // but warn them it might fail due to rate limits.
    try {
      const headers = { "Content-Type": "application/json" };
      if (apiKey) {
        headers["Authorization"] = `Bearer ${apiKey}`;
      }

      const res = await fetch(
        "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.2",
        {
          method: "POST",
          headers: headers,
          body: JSON.stringify({
            inputs: tasks[activeTask].prompt(prompt),
            parameters: { max_new_tokens: 150, return_full_text: false },
          }),
        },
      );

      if (!res.ok) {
        if (res.status === 401 || res.status === 403) {
          throw new Error(
            "Invalid or missing API token. Using simulation mode...",
          );
        } else if (res.status === 429) {
          throw new Error("Rate limit reached. Using simulation mode...");
        }
        throw new Error(`API error (${res.status})`);
      }

      const data = await res.json();

      if (data.error) {
        if (data.error.includes("currently loading")) {
          setResponse(
            "🚀 Hugging Face is spinning up the model... Please wait 30 seconds and try again.",
          );
          setIsLoading(false);
          return;
        }
        throw new Error(data.error);
      }

      if (Array.isArray(data) && data[0].generated_text) {
        setResponse(data[0].generated_text.trim());
      } else {
        setResponse("Hmm, the AI gave an empty response. Let's try once more!");
      }
    } catch (err) {
      console.warn("HF API error:", err);
      // Fallback to "Simulated AI" for demo purposes if the real API fails
      setTimeout(() => {
        setResponse(
          `[SIMULATION MODE] ${mockResponses[activeTask]}\n\n(Note: The live API failed: ${err.message}. Adding your own HF token might help!)`,
        );
      }, 1000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="llm-playground"
      style={{ padding: "100px 20px", maxWidth: "1000px", margin: "0 auto" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ textAlign: "center", marginBottom: "50px" }}
      >
        <span
          style={{
            color: "var(--accent-blue)",
            fontWeight: "600",
            textTransform: "uppercase",
            letterSpacing: "2px",
            fontSize: "0.8rem",
          }}
        >
          Real-Time Inference
        </span>
        <h2
          style={{
            fontSize: "2.5rem",
            marginTop: "10px",
            marginBottom: "1rem",
          }}
        >
          Hugging Face <span className="gradient-text">LLM Lab</span>
        </h2>
        <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem" }}>
          Experiment with Mistral-7B-Instruct directly from my portfolio
        </p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          style={{
            marginTop: "30px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src="/images/ai-brain.png"
            alt="AI Brain Concept"
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "2px solid var(--accent-blue)",
              boxShadow: "0 0 30px rgba(0, 136, 255, 0.3)",
            }}
          />
        </motion.div>
      </motion.div>

      <div
        className="glass"
        style={{
          padding: "40px",
          borderRadius: "30px",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          background: "rgba(10, 10, 15, 0.4)",
          boxShadow: "0 0 50px rgba(0, 136, 255, 0.1)",
        }}
      >
        {/* Task Tabs */}
        <div
          style={{
            display: "flex",
            gap: "10px",
            marginBottom: "30px",
            flexWrap: "wrap",
          }}
        >
          {Object.entries(tasks).map(([key, task]) => (
            <motion.button
              key={key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setActiveTask(key);
                setPrompt("");
                setResponse("");
              }}
              style={{
                padding: "10px 20px",
                borderRadius: "12px",
                background:
                  activeTask === key
                    ? "var(--accent-gradient)"
                    : "rgba(255,255,255,0.05)",
                border: "none",
                color: activeTask === key ? "black" : "white",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              {task.icon}
              {task.label}
            </motion.button>
          ))}
        </div>

        <div
          style={{ display: "grid", gridTemplateColumns: "1fr", gap: "30px" }}
        >
          {/* Input Area */}
          <div>
            <label
              style={{
                display: "block",
                marginBottom: "12px",
                fontSize: "0.9rem",
                color: "var(--text-secondary)",
              }}
            >
              {activeTask === "creative"
                ? "Describe your story theme:"
                : activeTask === "code"
                  ? "Paste code snippet:"
                  : "Enter your text:"}
            </label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder={tasks[activeTask].placeholder}
              style={{
                width: "100%",
                height: "120px",
                background: "rgba(0, 0, 0, 0.3)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "15px",
                padding: "20px",
                color: "white",
                fontSize: "1rem",
                resize: "none",
                fontFamily: activeTask === "code" ? "monospace" : "inherit",
              }}
            />
          </div>

          {/* API Key Section */}
          <div style={{ marginBottom: "20px" }}>
            <button
              onClick={() => setShowKeyField(!showKeyField)}
              style={{
                background: "none",
                border: "none",
                color: "var(--accent-blue)",
                fontSize: "0.8rem",
                cursor: "pointer",
                padding: "0",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                textDecoration: "underline",
              }}
            >
              {showKeyField
                ? "Hide Tooltip"
                : "Getting connection errors? Click here"}
            </button>
            <AnimatePresence>
              {showKeyField && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  style={{ marginTop: "10px", overflow: "hidden" }}
                >
                  <p
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--text-secondary)",
                      marginBottom: "8px",
                    }}
                  >
                    The Hugging Face free tier is sometimes rate-limited. If you
                    have an HF Token, paste it here to bypass limits (it's never
                    saved):
                  </p>
                  <input
                    type="password"
                    placeholder="hf_..."
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "10px",
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "8px",
                      color: "white",
                      fontSize: "0.85rem",
                    }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Action Button */}
          <div style={{ textAlign: "right" }}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleRunTask}
              disabled={isLoading || !prompt.trim()}
              style={{
                padding: "15px 40px",
                borderRadius: "15px",
                background: "var(--accent-gradient)",
                border: "none",
                color: "black",
                fontWeight: "700",
                fontSize: "1rem",
                cursor: isLoading || !prompt.trim() ? "not-allowed" : "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                opacity: isLoading || !prompt.trim() ? 0.6 : 1,
              }}
            >
              {isLoading ? (
                <RotateCcw className="spin" size={20} />
              ) : (
                <Zap size={20} />
              )}
              {isLoading ? "Consulting AI..." : "Generate with LLM"}
            </motion.button>
          </div>

          {/* Output Area */}
          <AnimatePresence>
            {response && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                style={{
                  background: "rgba(0, 136, 255, 0.05)",
                  border: "1px solid rgba(0, 136, 255, 0.3)",
                  borderRadius: "20px",
                  padding: "30px",
                  marginTop: "10px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "15px",
                  }}
                >
                  <Brain size={20} color="var(--accent-blue)" />
                  <span
                    style={{ fontWeight: "700", color: "var(--accent-blue)" }}
                  >
                    AI Insights:
                  </span>
                </div>
                <p
                  style={{
                    color: "white",
                    whiteSpace: "pre-wrap",
                    lineHeight: "1.7",
                    fontSize: "1.05rem",
                  }}
                >
                  {response}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <p
          style={{
            marginTop: "30px",
            fontSize: "0.8rem",
            color: "rgba(255,255,255,0.3)",
            textAlign: "center",
            fontStyle: "italic",
          }}
        >
          💡 Powered by Mistral-7B via Hugging Face Inference API. Responses may
          take a moment to generate.
        </p>
      </div>
    </section>
  );
};

export default HuggingFaceLLM;
