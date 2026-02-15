// ==UserScript==
// @name         AI Prompt Optimizer
// @namespace    http://tampermonkey.net/
// @version      3.0
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
// @grant        GM_setClipboard
// @connect      api.groq.com
// ==/UserScript==

(function () {
  "use strict";

  // --- Configuration ---
  const MODEL = "llama-3.3-70b-versatile";
  const SYSTEM_PROMPT = `You are an expert prompt engineer. Improve the user's prompt to be clearer, more detailed, and effective for an LLM. Respond ONLY with the improved prompt text, in the same language as the user. Do not add introductions like "Here is the improved prompt:".`;

  const PLATFORMS = {
    "chatgpt.com": {
      input: "#prompt-textarea",
      container: "#prompt-textarea", // Append relative to this
      offset: { right: 40, bottom: 10 }, // Adjust inside the relative container
    },
    "claude.ai": {
      input: 'div[contenteditable="true"]',
      container: "fieldset",
      offset: { right: 10, bottom: 5 },
    },
    "perplexity.ai": {
      input: 'textarea[placeholder*="Ask"]',
      container: "div.relative.flex.w-full", // Wrapper
      offset: { right: 60, bottom: 10 },
    },
    "gemini.google.com": {
      input: 'div[contenteditable="true"]',
      container: "div.input-area",
      offset: { right: 20, bottom: 20 },
    },
  };

  // --- State ---
  let isOptimizing = false;
  let currentModal = null;

  // --- Helpers ---
  function getHost() {
    return window.location.hostname.replace("www.", "");
  }

  function getPlatformConfig() {
    return PLATFORMS[getHost()];
  }

  function getInput() {
    const config = getPlatformConfig();
    if (!config) return null;
    return document.querySelector(config.input);
  }

  function getContainer() {
    const config = getPlatformConfig();
    if (!config) return null;

    let el = document.querySelector(config.input);
    if (!el) return null;

    // Try to find a stable container to attach to
    // If container selector is current input, use its parent or itself if it has relative/absolute positioning
    if (config.container === config.input) {
      return el.parentElement;
    }

    // Traverse up to find the container
    return el.closest(config.container) || el.parentElement;
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
      backgroundColor: "#1f2937",
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
    setTimeout(() => input.focus(), 100);
  }

  function createPreviewModal(originalText, optimizedText) {
    if (currentModal) currentModal.remove();

    const modal = document.createElement("div");
    modal.id = "ai-optimizer-preview";
    Object.assign(modal.style, {
      position: "fixed",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.6)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: "10001",
      backdropFilter: "blur(2px)", // Nice blur effect
    });

    const content = document.createElement("div");
    Object.assign(content.style, {
      backgroundColor: "#1f2937",
      color: "white",
      padding: "25px",
      borderRadius: "12px",
      width: "700px",
      maxWidth: "90vw",
      maxHeight: "90vh",
      display: "flex",
      flexDirection: "column",
      gap: "15px",
      boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
      fontFamily: "system-ui, -apple-system, sans-serif",
    });

    // Header
    const header = document.createElement("div");
    header.style.display = "flex";
    header.style.justifyContent = "space-between";
    header.style.alignItems = "center";

    const title = document.createElement("h2");
    title.innerText = "✨ Optimized Prompt Preview";
    title.style.margin = "0";
    title.style.fontSize = "20px";
    title.style.background = "linear-gradient(90deg, #34d399, #60a5fa)";
    title.style.webkitBackgroundClip = "text";
    title.style.webkitTextFillColor = "transparent";

    const closeBtn = document.createElement("button");
    closeBtn.innerHTML = "✕";
    Object.assign(closeBtn.style, {
      background: "transparent",
      border: "none",
      color: "#9ca3af",
      fontSize: "20px",
      cursor: "pointer",
      padding: "5px",
    });
    closeBtn.onclick = () => modal.remove();

    header.appendChild(title);
    header.appendChild(closeBtn);

    // Comparison Area
    const comparison = document.createElement("div");
    Object.assign(comparison.style, {
      display: "flex",
      gap: "15px",
      flex: "1",
      minHeight: "200px",
      overflow: "hidden",
    });

    // Original
    const originalBox = document.createElement("div");
    Object.assign(originalBox.style, {
      flex: "1",
      display: "flex",
      flexDirection: "column",
      gap: "5px",
    });
    const originalLabel = document.createElement("div");
    originalLabel.innerText = "Original";
    originalLabel.style.color = "#9ca3af";
    originalLabel.style.fontSize = "12px";
    originalLabel.style.fontWeight = "bold";

    const originalTextarea = document.createElement("div");
    originalTextarea.innerText = originalText;
    Object.assign(originalTextarea.style, {
      backgroundColor: "#374151",
      padding: "10px",
      borderRadius: "8px",
      flex: "1",
      overflowY: "auto",
      fontSize: "14px",
      lineHeight: "1.5",
      color: "#d1d5db",
      whiteSpace: "pre-wrap",
    });
    originalBox.appendChild(originalLabel);
    originalBox.appendChild(originalTextarea);

    // Optimized
    const optimizedBox = document.createElement("div");
    Object.assign(optimizedBox.style, {
      flex: "1",
      display: "flex",
      flexDirection: "column",
      gap: "5px",
    });
    const optimizedLabel = document.createElement("div");
    optimizedLabel.innerText = "Optimized";
    optimizedLabel.style.color = "#10b981";
    optimizedLabel.style.fontSize = "12px";
    optimizedLabel.style.fontWeight = "bold";

    const optimizedTextarea = document.createElement("textarea");
    optimizedTextarea.value = optimizedText;
    Object.assign(optimizedTextarea.style, {
      backgroundColor: "#064e3b",
      border: "1px solid #059669",
      padding: "10px",
      borderRadius: "8px",
      flex: "1",
      overflowY: "auto",
      fontSize: "14px",
      lineHeight: "1.5",
      color: "#ecfdf5",
      resize: "none",
      outline: "none",
      fontFamily: "inherit",
    });
    optimizedBox.appendChild(optimizedLabel);
    optimizedBox.appendChild(optimizedTextarea);

    comparison.appendChild(originalBox);
    comparison.appendChild(optimizedBox);

    // Actions
    const actions = document.createElement("div");
    Object.assign(actions.style, {
      display: "flex",
      justifyContent: "flex-end",
      gap: "10px",
      marginTop: "10px",
    });

    const btnStyle = {
      padding: "10px 16px",
      borderRadius: "8px",
      border: "none",
      cursor: "pointer",
      fontSize: "14px",
      fontWeight: "600",
      display: "flex",
      alignItems: "center",
      gap: "6px",
      transition: "opacity 0.2s",
    };

    const regenerateBtn = document.createElement("button");
    regenerateBtn.innerHTML = "🔄 Regenerate";
    Object.assign(regenerateBtn.style, btnStyle, {
      backgroundColor: "#4b5563",
      color: "white",
    });
    regenerateBtn.onclick = () => {
      modal.remove();
      callGroqApi(originalText); // Call API again
    };

    const copyBtn = document.createElement("button");
    copyBtn.innerHTML = "📋 Copy";
    Object.assign(copyBtn.style, btnStyle, {
      backgroundColor: "#3b82f6",
      color: "white",
    });
    copyBtn.onclick = () => {
      GM_setClipboard(optimizedTextarea.value);
      copyBtn.innerHTML = "✅ Copied";
      setTimeout(() => (copyBtn.innerHTML = "📋 Copy"), 1500);
    };

    const applyBtn = document.createElement("button");
    applyBtn.innerHTML = "✨ Apply";
    Object.assign(applyBtn.style, btnStyle, {
      backgroundColor: "#10b981",
      color: "white",
    });
    applyBtn.onclick = () => {
      updateInput(optimizedTextarea.value);
      modal.remove();
    };

    actions.appendChild(regenerateBtn);
    actions.appendChild(copyBtn);
    actions.appendChild(applyBtn);

    content.appendChild(header);
    content.appendChild(comparison);
    content.appendChild(actions);
    modal.appendChild(content);

    document.body.appendChild(modal);
    currentModal = modal;
  }

  function setButtonState(state, btn) {
    if (!btn) return;

    if (state === "loading") {
      btn.innerHTML = "🧠";
      btn.title = "Optimizing...";
      btn.disabled = true;
      btn.style.cursor = "wait";
      btn.style.opacity = "0.7";
      btn.style.animation = "pulse 1.5s infinite";
    } else {
      btn.innerHTML = "✨";
      btn.title = "Optimize (Llama 3.3)";
      btn.disabled = false;
      btn.style.cursor = "pointer";
      btn.style.opacity = "1";
      btn.style.animation = "none";
    }
  }

  // --- API Logic ---
  function callGroqApi(userPrompt) {
    const apiKey = getApiKey();
    if (!apiKey) {
      alert("Please set your Groq API Key first (Click the ⚙️ icon).");
      return;
    }

    const btn = document.getElementById("ai-optimizer-btn");
    setButtonState("loading", btn);

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
        setButtonState("idle", btn);
        if (response.status === 200) {
          try {
            const data = JSON.parse(response.responseText);
            const optimizedText = data.choices[0].message.content;
            createPreviewModal(userPrompt, optimizedText);
          } catch (e) {
            console.error("Groq API Parse Error:", e);
            alert("Error parsing response from Groq.");
          }
        } else {
          console.error("Groq API Error:", response);
          alert(`Groq API Error: ${response.status} ${response.statusText}`);
        }
      },
      onerror: function (err) {
        setButtonState("idle", btn);
        console.error("Network Error:", err);
        alert("Network error when connecting to Groq.");
      },
    });
  }

  function updateInput(text) {
    const input = getInput();
    if (!input) return;

    if (input.tagName === "TEXTAREA") {
      input.value = text;
      input.style.height = "auto"; // Reset height
      input.style.height = input.scrollHeight + "px"; // Auto-grow
      input.dispatchEvent(new Event("input", { bubbles: true }));
      input.focus();
    } else {
      input.innerText = text;
      input.dispatchEvent(new Event("input", { bubbles: true }));
      input.focus();
    }
  }

  function handleOptimize() {
    const input = getInput();
    if (!input) {
      console.warn("AI Optimizer: Chat input not found.");
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
  // Inject custom styles
  function injectStyles() {
    if (document.getElementById("ai-optimizer-css")) return;
    const style = document.createElement("style");
    style.id = "ai-optimizer-css";
    style.textContent = `
            @keyframes pulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.1); }
                100% { transform: scale(1); }
            }
            .ai-opt-btn-container {
                position: absolute;
                display: flex;
                gap: 5px;
                z-index: 100;
                transition: opacity 0.2s;
            }
            .ai-opt-btn-container:hover {
                opacity: 1 !important;
            }
        `;
    document.head.appendChild(style);
  }

  function createUI() {
    if (document.getElementById("ai-optimizer-btn")) return;

    const containerNode = getContainer();
    if (!containerNode) {
      // console.log('Container not found');
      return;
    }

    // Check if we need to make the container relative
    const computedStyle = window.getComputedStyle(containerNode);
    if (computedStyle.position === "static") {
      containerNode.style.position = "relative";
    }

    const ui = document.createElement("div");
    ui.className = "ai-opt-btn-container";

    // Dynamic positioning logic (e.g., bottom-right of container)
    // Hardcoded offsets for now based on platform config
    const config = getPlatformConfig();
    const offset =
      config && config.offset ? config.offset : { right: 10, bottom: 10 };

    Object.assign(ui.style, {
      bottom: `${offset.bottom}px`,
      right: `${offset.right}px`,
      opacity: "0.6", // Fade out when not interacting
    });

    // Settings Button
    const settingsBtn = document.createElement("button");
    settingsBtn.innerHTML = "⚙️";
    settingsBtn.title = "Settings";
    Object.assign(settingsBtn.style, {
      width: "24px",
      height: "24px",
      borderRadius: "50%",
      border: "none",
      background: "rgba(55, 65, 81, 0.8)",
      color: "white",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "14px",
      transition: "all 0.2s",
    });
    settingsBtn.onclick = createSettingsModal;

    // Optimize Button
    const optimizeBtn = document.createElement("button");
    optimizeBtn.id = "ai-optimizer-btn";
    optimizeBtn.innerHTML = "✨";
    optimizeBtn.title = "Optimize";
    Object.assign(optimizeBtn.style, {
      width: "32px",
      height: "32px",
      borderRadius: "50%",
      border: "none",
      background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
      color: "white",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
      transition: "all 0.2s",
      fontSize: "16px",
    });
    optimizeBtn.onclick = handleOptimize;

    ui.appendChild(settingsBtn);
    ui.appendChild(optimizeBtn);
    containerNode.appendChild(ui);
  }

  // Initialize
  injectStyles();
  // Register Menu Command
  GM_registerMenuCommand("API Settings", createSettingsModal);

  // Initial check
  setTimeout(createUI, 1500);

  // Handle dynamic navigation (SPA)
  let lastUrl = location.href;
  new MutationObserver((mutations) => {
    // Init if URL changed
    if (location.href !== lastUrl) {
      lastUrl = location.href;
      setTimeout(createUI, 1000);
    }

    // Robust check: if button removed, re-add (e.g. React re-render)
    if (!document.getElementById("ai-optimizer-btn")) {
      createUI();
    }
  }).observe(document.body, { childList: true, subtree: true });
})();
