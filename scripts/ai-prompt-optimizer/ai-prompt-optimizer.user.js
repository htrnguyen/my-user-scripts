// ==UserScript==
// @name         AI Prompt Optimizer
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Adds a button to optimize your prompt using the "Expert Prompt Engineer" template.
// @author       htrnguyen
// @match        *://chatgpt.com/*
// @match        *://claude.ai/*
// @match        *://www.perplexity.ai/*
// @match        *://gemini.google.com/*
// @icon         https://raw.githubusercontent.com/htrnguyen/my-user-scripts/main/scripts/ai-prompt-optimizer/logo.png
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  const TEMPLATE = `You are an expert prompt engineer. Improve the user's prompt to be clearer, more detailed, and effective for an LLM. Respond ONLY with the improved prompt text, in the same language as the user. Do not add introductions like "Here is the improved prompt:".\n\n{USER_PROMPT}`;

  const SELECTORS = {
    "chatgpt.com": "#prompt-textarea",
    "claude.ai": 'div[contenteditable="true"]',
    "perplexity.ai": 'textarea[placeholder*="Ask"]',
    "gemini.google.com": 'div[contenteditable="true"]',
  };

  function getHost() {
    return window.location.hostname.replace("www.", "");
  }

  function getInput() {
    const host = getHost();
    const selector = SELECTORS[host];
    if (!selector) return null;
    return document.querySelector(selector);
  }

  function optimizePrompt() {
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

    const optimizedText = TEMPLATE.replace("{USER_PROMPT}", currentText);

    // Update input value
    if (input.tagName === "TEXTAREA") {
      input.value = optimizedText;
      input.dispatchEvent(new Event("input", { bubbles: true }));
    } else {
      input.innerText = optimizedText;
      input.dispatchEvent(new Event("input", { bubbles: true }));
    }

    // Visual feedback
    const btn = document.getElementById("ai-optimizer-btn");
    if (btn) {
      const originalText = btn.innerHTML;
      btn.innerHTML = "✨ Optimized!";
      setTimeout(() => (btn.innerHTML = originalText), 1500);
    }
  }

  function createButton() {
    if (document.getElementById("ai-optimizer-btn")) return;

    const btn = document.createElement("button");
    btn.id = "ai-optimizer-btn";
    btn.innerHTML = "✨ Optimize";
    btn.title = "Wrap with Expert Prompt Engineer template";

    Object.assign(btn.style, {
      position: "fixed",
      bottom: "20px",
      right: "80px", // Next to the other button if exists
      zIndex: "9999",
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

    btn.onmouseenter = () => {
      btn.style.transform = "translateY(-2px)";
      btn.style.boxShadow = "0 6px 8px rgba(0,0,0,0.2)";
    };
    btn.onmouseleave = () => {
      btn.style.transform = "translateY(0)";
      btn.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
    };

    btn.onclick = optimizePrompt;

    document.body.appendChild(btn);
  }

  // Initialize
  createButton();

  // Handle dynamic navigation (SPA)
  let lastUrl = location.href;
  new MutationObserver(() => {
    if (location.href !== lastUrl) {
      lastUrl = location.href;
      setTimeout(createButton, 1000);
    }
  }).observe(document.body, { childList: true, subtree: true });
})();
