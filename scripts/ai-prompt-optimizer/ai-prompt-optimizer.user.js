// ==UserScript==
// @name         AI Prompt Optimizer
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  Adds a button to optimize your prompt using Groq's Llama 3.3 70B model.
// @author       htrnguyen
// @match        *://chatgpt.com/*
// @match        *://claude.ai/*
// @match        *://www.perplexity.ai/*
// @match        *://gemini.google.com/*
// @icon         https://raw.githubusercontent.com/htrnguyen/my-user-scripts/main/scripts/ai-prompt-optimizer/logo.png
// @grant        GM_xmlhttpRequest
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_registerMenuCommand
// @connect      api.groq.com
// ==/UserScript==

(function () {
  "use strict";

  // --- Configuration ---
  const MODEL = "llama-3.3-70b-versatile";
  const SYSTEM_PROMPT = `You are an expert prompt engineer. Improve the user's prompt to be clearer, more detailed, and effective for an LLM. Respond ONLY with the improved prompt text, in the same language as the user. Do not add introductions like "Here is the improved prompt:".`;

  const SELECTORS = {
    "chatgpt.com": "#prompt-textarea",
    "claude.ai": 'div[contenteditable="true"]',
    "perplexity.ai": 'textarea[placeholder*="Ask"]',
    "gemini.google.com": 'div[contenteditable="true"]',
  };

  // --- State ---
  let isOptimizing = false;

  // --- Helpers ---
  function getHost() {
    return window.location.hostname.replace("www.", "");
  }

  function getInput() {
    const host = getHost();
    const selector = SELECTORS[host];
    if (!selector) return null;
    return document.querySelector(selector);
  }

  function getApiKey() {
    return GM_getValue("GROQ_API_KEY", "");
  }

  function setApiKey(key) {
    GM_setValue("GROQ_API_KEY", key);
  }

  // --- UI Components ---
  function createSettingsModal() {
    const existingModal = document.getElementById("ai-optimizer-settings");
    if (existingModal) existingModal.remove();

    const modal = document.createElement("div");
    modal.id = "ai-optimizer-settings";
    Object.assign(modal.style, {
      position: "fixed",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.5)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: "10000",
    });

    const content = document.createElement("div");
    Object.assign(content.style, {
      backgroundColor: "#1f2937", // Dark mode bg
      color: "white",
      padding: "20px",
      borderRadius: "10px",
      width: "400px",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      fontFamily: "system-ui, -apple-system, sans-serif",
    });

    const title = document.createElement("h2");
    title.innerText = "⚙️ AI Optimizer Settings";
    title.style.marginBottom = "15px";
    title.style.marginTop = "0";

    const label = document.createElement("label");
    label.innerText = "Groq API Key:";
    label.style.display = "block";
    label.style.marginBottom = "5px";
    label.style.fontSize = "14px";

    const input = document.createElement("input");
    input.type = "password";
    input.value = getApiKey();
    input.placeholder = "gsk_...";
    Object.assign(input.style, {
      width: "100%",
      padding: "8px",
      marginBottom: "15px",
      borderRadius: "5px",
      border: "1px solid #374151",
      backgroundColor: "#374151",
      color: "white",
      boxSizing: "border-box",
    });

    const helpText = document.createElement("p");
    helpText.innerHTML =
      'Get your free API key at <a href="https://console.groq.com/keys" target="_blank" style="color: #60a5fa;">console.groq.com</a>';
    helpText.style.fontSize = "12px";
    helpText.style.color = "#9ca3af";
    helpText.style.marginBottom = "20px";

    const btnGroup = document.createElement("div");
    btnGroup.style.display = "flex";
    btnGroup.style.justifyContent = "flex-end";
    btnGroup.style.gap = "10px";

    const cancelBtn = document.createElement("button");
    cancelBtn.innerText = "Cancel";
    Object.assign(cancelBtn.style, {
      padding: "8px 15px",
      borderRadius: "5px",
      border: "none",
      backgroundColor: "#4b5563",
      color: "white",
      cursor: "pointer",
    });
    cancelBtn.onclick = () => modal.remove();

    const saveBtn = document.createElement("button");
    saveBtn.innerText = "Save";
    Object.assign(saveBtn.style, {
      padding: "8px 15px",
      borderRadius: "5px",
      border: "none",
      backgroundColor: "#10b981",
      color: "white",
      cursor: "pointer",
    });
    saveBtn.onclick = () => {
      const key = input.value.trim();
      if (key) {
        setApiKey(key);
        alert("API Key saved!");
        modal.remove();
      } else {
        alert("Please enter a valid API key.");
      }
    };

    btnGroup.appendChild(cancelBtn);
    btnGroup.appendChild(saveBtn);

    content.appendChild(title);
    content.appendChild(label);
    content.appendChild(input);
    content.appendChild(helpText);
    content.appendChild(btnGroup);
    modal.appendChild(content);

    document.body.appendChild(modal);

    // Focus input
    setTimeout(() => input.focus(), 100);
  }

  function setButtonState(state) {
    const btn = document.getElementById("ai-optimizer-btn");
    if (!btn) return;

    if (state === "loading") {
      btn.innerHTML = "🧠 Thinking...";
      btn.disabled = true;
      btn.style.cursor = "wait";
      btn.style.opacity = "0.7";
    } else if (state === "success") {
      btn.innerHTML = "✨ Optimized!";
      setTimeout(() => {
        setButtonState("idle");
      }, 2000);
    } else if (state === "error") {
      btn.innerHTML = "❌ Error";
      setTimeout(() => {
        setButtonState("idle");
      }, 2000);
    } else {
      btn.innerHTML = "✨ Optimize";
      btn.disabled = false;
      btn.style.cursor = "pointer";
      btn.style.opacity = "1";
    }
  }

  // --- API Logic ---
  function callGroqApi(userPrompt) {
    const apiKey = getApiKey();
    if (!apiKey) {
      alert("Please set your Groq API Key first (Click the ⚙️ icon).");
      return;
    }

    isOptimizing = true;
    setButtonState("loading");

    GM_xmlhttpRequest({
      method: "POST",
      url: "https://api.groq.com/openai/v1/chat/completions",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      data: JSON.stringify({
        model: MODEL,
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: userPrompt },
        ],
        temperature: 0.7,
      }),
      onload: function (response) {
        isOptimizing = false;
        if (response.status === 200) {
          try {
            const data = JSON.parse(response.responseText);
            const optimizedText = data.choices[0].message.content;
            updateInput(optimizedText);
            setButtonState("success");
          } catch (e) {
            console.error("Groq API Parse Error:", e);
            setButtonState("error");
            alert("Error parsing response from Groq.");
          }
        } else {
          console.error("Groq API Error:", response);
          setButtonState("error");
          alert(`Groq API Error: ${response.status} ${response.statusText}`);
        }
      },
      onerror: function (err) {
        isOptimizing = false;
        console.error("Network Error:", err);
        setButtonState("error");
        alert("Network error when connecting to Groq.");
      },
    });
  }

  function updateInput(text) {
    const input = getInput();
    if (!input) return;

    if (input.tagName === "TEXTAREA") {
      input.value = text;
      input.dispatchEvent(new Event("input", { bubbles: true }));
    } else {
      input.innerText = text;
      input.dispatchEvent(new Event("input", { bubbles: true }));
    }
  }

  function handleOptimize() {
    if (isOptimizing) return;

    const input = getInput();
    if (!input) {
      alert("Input field not found!");
      return;
    }

    let currentText = "";
    if (input.tagName === "TEXTAREA") {
      currentText = input.value;
    } else {
      currentText = input.innerText;
    }

    if (!currentText.trim()) {
      alert("Please enter a prompt to optimize.");
      return;
    }

    callGroqApi(currentText);
  }

  // --- Initialization ---
  function createUI() {
    if (document.getElementById("ai-optimizer-btn")) return;

    const container = document.createElement("div");
    container.id = "ai-optimizer-ui";
    Object.assign(container.style, {
      position: "fixed",
      bottom: "20px",
      right: "80px",
      zIndex: "9999",
      display: "flex",
      gap: "10px",
      alignItems: "center",
    });

    // Settings Button
    const settingsBtn = document.createElement("button");
    settingsBtn.innerHTML = "⚙️";
    settingsBtn.title = "Settings";
    Object.assign(settingsBtn.style, {
      width: "30px",
      height: "30px",
      borderRadius: "50%",
      border: "none",
      background: "#374151",
      color: "white",
      cursor: "pointer",
      boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    });
    settingsBtn.onclick = createSettingsModal;

    // Optimize Button
    const optimizeBtn = document.createElement("button");
    optimizeBtn.id = "ai-optimizer-btn";
    optimizeBtn.innerHTML = "✨ Optimize";
    optimizeBtn.title = "Optimize with Groq Llama 3.3";
    Object.assign(optimizeBtn.style, {
      padding: "10px 15px",
      borderRadius: "20px",
      border: "none",
      background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
      color: "white",
      fontWeight: "bold",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      cursor: "pointer",
      transition: "transform 0.2s, box-shadow 0.2s",
      fontSize: "14px",
    });

    optimizeBtn.onmouseenter = () => {
      if (!optimizeBtn.disabled) {
        optimizeBtn.style.transform = "translateY(-2px)";
        optimizeBtn.style.boxShadow = "0 6px 8px rgba(0,0,0,0.2)";
      }
    };
    optimizeBtn.onmouseleave = () => {
      if (!optimizeBtn.disabled) {
        optimizeBtn.style.transform = "translateY(0)";
        optimizeBtn.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
      }
    };
    optimizeBtn.onclick = handleOptimize;

    container.appendChild(settingsBtn);
    container.appendChild(optimizeBtn);
    document.body.appendChild(container);
  }

  // Register Menu Command
  GM_registerMenuCommand("API Settings", createSettingsModal);

  // Initialize
  createUI();

  // Handle dynamic navigation (SPA)
  let lastUrl = location.href;
  new MutationObserver(() => {
    if (location.href !== lastUrl) {
      lastUrl = location.href;
      setTimeout(createUI, 1000);
    }
  }).observe(document.body, { childList: true, subtree: true });
})();
