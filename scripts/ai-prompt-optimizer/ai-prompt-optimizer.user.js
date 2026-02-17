// ==UserScript==
// @name                AI Prompt Optimizer (Groq)
// @namespace           https://github.com/htrnguyen
// @version             1.0.1
// @author              htrnguyen
// @icon                https://raw.githubusercontent.com/htrnguyen/my-user-scripts/main/scripts/ai-prompt-optimizer/logo__ai_prompt_optimizer.gif
// @license             CC-BY-NC-ND-4.0
// @copyright           2026 htrnguyen. All Rights Reserved.
// @description         Refine and optimize your AI prompts using Groq directly in any AI composer. Professional, minimalist, and effective.
// @match               *://poe.com/*
// @match               *://grok.com/*
// @match               *://arena.ai/*
// @match               *://claude.ai/*
// @match               *://chat.z.ai/*
// @match               *://image.z.ai/*
// @match               *://chatglm.cn/*
// @match               *://labs.google/*
// @match               *://chatgpt.com/*
// @match               *://longcat.chat/*
// @match               *://chat.qwen.ai/*
// @match               *://www.kimi.com/*
// @match               *://www.doubao.com/*
// @match               *://ernie.baidu.com/*
// @match               *://chat.mistral.ai/*
// @match               *://build.nvidia.com/*
// @match               *://www.perplexity.ai/*
// @match               *://chat.deepseek.com/*
// @match               *://gemini.google.com/*
// @match               *://arena.ai4bharat.org/*
// @match               *://yuanbao.tencent.com/*
// @match               *://aistudio.google.com/*
// @match               *://dreamina.capcut.com/*
// @match               *://jimeng.jianying.com/*
// @match               *://copilot.microsoft.com/*
// @match               *://notebooklm.google.com/*
// @match               *://www.google.com/search?*udm=50*
// @connect             api.groq.com
// @grant               GM_getValue
// @grant               GM_setValue
// @grant               GM_xmlhttpRequest
// @grant               GM_getResourceText
// @grant               GM_registerMenuCommand
// @run-at              document-end
// @noframes
// ==/UserScript==

(function () {
  "use strict";

  const AI_SETTINGS_KEY = "AIConfig";
  const DEFAULT_AI_CONFIG = {
    apiKeyGroq: "",
    keyIndexGroq: 0,
    model: "llama-3.3-70b-versatile",
    systemPrompt:
      "You are a professional prompt engineer. Your task is to refine and optimize the user's prompt to be more precise, detailed, and effective for high-quality LLM responses. Respond ONLY with the improved prompt text, maintaining the original language used by the user. Do not include any introductions, explanations, or conversational filler.",
  };

  let currentAIConfig = { ...DEFAULT_AI_CONFIG };
  let settingsModal = null;

  // --- Trusted Types & UI Helpers ---
  let scriptPolicy = null;
  if (window.trustedTypes && window.trustedTypes.createPolicy) {
    try {
      scriptPolicy = window.trustedTypes.createPolicy("AIPromptPolicy", {
        createHTML: (input) => input,
      });
    } catch (e) {}
  }

  function setSafeInnerHTML(element, html) {
    if (!element) return;
    if (scriptPolicy) element.innerHTML = scriptPolicy.createHTML(html);
    else element.innerHTML = html;
  }

  const ICONS = {
    magic: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>`,
    loading: `<svg viewBox="0 0 50 50" style="width:100%;height:100%;"><circle cx="25" cy="25" r="20" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-dasharray="80" stroke-dashoffset="20"><animateTransform attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.8s" repeatCount="indefinite" /></circle></svg>`,
  };

  const platformSelectors = {
    chatgpt: "#prompt-textarea",
    deepseek: "textarea.ds-scroll-area",
    googleaistudio: "textarea",
    qwen: ".message-input-textarea",
    zai: "textarea#chat-input",
    gemini: 'div.ql-editor[contenteditable="true"]',
    arena: 'textarea[name="message"]',
    kimi: 'div.chat-input-editor[contenteditable="true"]',
    claude: 'div.ProseMirror[contenteditable="true"]',
    grok: 'div.tiptap.ProseMirror[contenteditable="true"], textarea',
    perplexity: "#ask-input",
    longcat: "div.tiptap.ProseMirror",
    mistral: ".ProseMirror",
    yuanbao: 'div.ql-editor[contenteditable="true"]',
    chatglm: "textarea.scroll-display-none",
    poe: 'textarea[class*="GrowingTextArea_textArea"]',
    googleModoIA: "textarea.ITIRGe",
    notebooklm: "textarea.query-box-input",
    doubao: 'textarea[data-testid="chat_input_input"]',
    copilot: '#userInput, textarea[data-testid="composer-input"]',
    glmimage: "textarea.flex.w-full",
    whisk: "textarea.sc-18deeb1d-8, textarea.DwQls, textarea",
    ernie: 'div[contenteditable="true"][role="textbox"].editable__QRoAFgYA',
    dreamina:
      'textarea.lv-textarea.textarea-xle6zp.prompt-textarea-zqvueo, [contenteditable="true"]',
    jimengJianying: 'textarea[class*="prompt-textarea"]',
    nvidiaNim:
      'textarea.nv-text-area-element[data-testid="nv-text-area-element"]',
    indicArena: 'textarea[data-testid="rt-input-component"]',
  };

  // --- Config Management ---
  async function loadAIConfig() {
    const saved = await GM_getValue(AI_SETTINGS_KEY);
    if (saved) {
      currentAIConfig = { ...DEFAULT_AI_CONFIG, ...saved };
      if (
        currentAIConfig.systemPrompt &&
        currentAIConfig.systemPrompt.includes("Bạn là một chuyên gia")
      ) {
        currentAIConfig.systemPrompt = DEFAULT_AI_CONFIG.systemPrompt;
        await saveAIConfig(currentAIConfig);
      }
    }
  }

  async function saveAIConfig(newConfig) {
    currentAIConfig = { ...currentAIConfig, ...newConfig };
    await GM_setValue(AI_SETTINGS_KEY, currentAIConfig);
  }

  async function resetAIConfig() {
    currentAIConfig = { ...DEFAULT_AI_CONFIG };
    await GM_setValue(AI_SETTINGS_KEY, currentAIConfig);
  }

  function getRotatingApiKey() {
    const raw = currentAIConfig.apiKeyGroq;
    if (!raw) return null;
    const keys = raw.split(/[,\s]+/).filter((k) => k.trim());
    if (keys.length === 0) return null;
    let idx = currentAIConfig.keyIndexGroq || 0;
    if (idx >= keys.length) idx = 0;
    const key = keys[idx];
    currentAIConfig.keyIndexGroq = (idx + 1) % keys.length;
    saveAIConfig({ keyIndexGroq: currentAIConfig.keyIndexGroq });
    return key;
  }

  // --- AI API Core ---
  async function callAI_API(promptText, apiKey) {
    if (!apiKey) throw new Error("API Key missing!");

    return new Promise((resolve, reject) => {
      GM_xmlhttpRequest({
        method: "POST",
        url: "https://api.groq.com/openai/v1/chat/completions",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        data: JSON.stringify({
          model: currentAIConfig.model,
          messages: [
            {
              role: "system",
              content:
                currentAIConfig.systemPrompt || DEFAULT_AI_CONFIG.systemPrompt,
            },
            { role: "user", content: promptText },
          ],
          temperature: 0.7,
        }),
        onload: (res) => {
          if (res.status === 200) {
            try {
              const data = JSON.parse(res.responseText);
              resolve(data.choices[0].message.content.trim());
            } catch (e) {
              reject(new Error("Failed to process AI response."));
            }
          } else {
            reject(new Error(`Groq Error (${res.status})`));
          }
        },
        onerror: () => reject(new Error("API connection failed.")),
      });
    });
  }

  // --- UI Components ---
  function injectGlobalStyles() {
    const style = document.createElement("style");
    style.id = "ap-global-styles";
    setSafeInnerHTML(
      style,
      `
    :root {
      --mp-primary: #4361ee;
      --mp-primary-gradient: linear-gradient(135deg, #4361ee 0%, #3a0ca3 100%);
      --mp-bg: #ffffff;
      --mp-surface: #f8f9fa;
      --mp-text: #2b2d42;
      --mp-text-light: #8d99ae;
      --mp-border: #edf2f4;
      --mp-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
      --mp-shadow-hover: 0 8px 30px rgba(67, 97, 238, 0.15);
    }

    .mp-modal { 
      position:fixed; top:0; left:0; width:100%; height:100%; 
      background: rgba(0, 0, 0, 0.1); 
      display:flex; align-items:center; justify-content:center; 
      opacity:0; pointer-events:none; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); 
      z-index:100001; text-align: left;
      backdrop-filter: blur(8px);
    }
    .mp-modal.visible { opacity:1; pointer-events:auto; }
    
    .mp-modal-content { 
      background: var(--mp-bg) !important; 
      padding:24px !important; border-radius:24px !important; 
      width:90% !important; max-width:650px !important; 
      box-shadow: var(--mp-shadow) !important; 
      color: var(--mp-text) !important; 
      font-family: 'Inter', -apple-system, sans-serif !important; 
      box-sizing: border-box !important; position: relative !important;
      border: 1px solid var(--mp-border) !important;
      transform: scale(0.95) translateY(10px);
      transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    .mp-modal.visible .mp-modal-content { transform: scale(1) translateY(0); }

    .mp-modal-close {
      position: absolute !important; top: 20px !important; right: 20px !important;
      width: 28px !important; height: 28px !important; border-radius: 50% !important;
      display: flex !important; align-items: center !important; justify-content: center !important;
      cursor: pointer !important; background: var(--mp-surface) !important; color: var(--mp-text-light) !important;
      border: none !important; font-size: 16px !important; 
      transition: all 0.2s !important;
    }
    .mp-modal-close:hover { background: #fee2e2 !important; color: #ef4444 !important; }

    .mp-input-group { margin-bottom:16px !important; }
    .mp-input-group label { 
      display:block !important; margin-bottom:6px !important; 
      font-weight:600 !important; font-size:12px !important; 
      color: var(--mp-text-light) !important; text-transform: uppercase; letter-spacing: 0.5px;
    }
    .mp-input-group input, .mp-input-group textarea { 
      width:100% !important; padding:12px 16px !important; 
      border: 2px solid var(--mp-border) !important; border-radius:12px !important; 
      background: var(--mp-surface) !important; color: var(--mp-text) !important; 
      font-family:inherit !important; font-size: 14px !important;
      transition: all 0.2s !important; outline: none !important;
    }
    .mp-input-group input:focus, .mp-input-group textarea:focus { 
      border-color: var(--mp-primary) !important; 
      background: #fff !important;
    }

    .mp-btn { 
      padding:10px 20px !important; border-radius:12px !important; 
      cursor:pointer !important; font-weight:600 !important; border:none !important; 
      transition: all 0.2s !important; font-size: 14px !important;
    }
    .mp-btn:active { transform: scale(0.98); }
    .mp-btn-primary { 
      background: var(--mp-primary-gradient) !important; 
      color:#fff !important; 
    }
    .mp-btn-primary:hover { opacity: 0.95; transform: translateY(-1px); }
    
    .mp-diff-container { display: flex !important; gap: 16px !important; margin-bottom: 20px !important; }
    .mp-diff-col { flex: 1 !important; min-width: 0 !important; }
    .mp-diff-box { 
      background: var(--mp-surface) !important; padding:16px !important; border-radius:16px !important; 
      font-size:13px !important; max-height:300px !important; overflow:auto !important; 
      white-space:pre-wrap !important; border:1px solid var(--mp-border) !important;
      line-height: 1.6;
    }
    
    #ap-trigger-fixed {
      position:fixed !important; bottom:20px !important; right:20px !important; 
      width:36px !important; height:36px !important; 
      background: var(--mp-bg) !important;
      color: var(--mp-primary) !important;
      border-radius:50% !important; display:flex !important; align-items:center !important; justify-content:center !important; 
      cursor:pointer !important; z-index:100000 !important; 
      box-shadow: 0 4px 15px rgba(0,0,0,0.1) !important;
      transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
      border: 1px solid var(--mp-border) !important;
    }
    #ap-trigger-fixed:hover { 
      transform: rotate(15deg) scale(1.1) !important;
      border-color: var(--mp-primary) !important;
      box-shadow: var(--mp-shadow-hover) !important;
    }
    #ap-trigger-fixed svg { width:18px; height:18px; }

    #ap-loading {
      position:fixed !important; top:0 !important; left:0 !important; width:100% !important; height:100% !important;
      background: rgba(255, 255, 255, 0.8) !important;
      backdrop-filter: blur(4px) !important;
      z-index: 1000000 !important;
      display: none !important;
      flex-direction: column !important;
      align-items: center !important;
      justify-content: center !important;
      gap: 15px !important;
      color: var(--mp-primary) !important;
      font-family: 'Inter', -apple-system, sans-serif !important;
    }
    #ap-loading.visible { display:flex !important; }
    #ap-loading .spinner { width: 40px; height: 40px; }
    #ap-loading .loading-text { font-weight: 600; font-size: 14px; letter-spacing: 0.5px; }

    .ap-helper-text { font-size: 11px; color: var(--mp-text-light); margin-top: 4px; }
    .ap-link { color: var(--mp-primary); text-decoration: none; font-weight: 500; }
    .ap-link:hover { text-decoration: underline; }
    `,
    );
    document.head.appendChild(style);
  }

  function createSettingsModal() {
    const modal = document.createElement("div");
    modal.className = "mp-modal";
    const content = document.createElement("div");
    content.className = "mp-modal-content";

    setSafeInnerHTML(
      content,
      `
    <div style="display:flex; align-items:center; gap:12px; margin-bottom:24px;">
      <img src="https://raw.githubusercontent.com/htrnguyen/my-user-scripts/main/scripts/ai-prompt-optimizer/logo__ai_prompt_optimizer.gif" style="width:40px; height:40px; border-radius:10px; box-shadow: var(--mp-shadow);" alt="Logo">
      <div style="flex:1;">
        <h2 style="margin:0; font-size:20px; font-weight:800;">AI Optimizer</h2>
        <div style="font-size:12px; color:var(--mp-text-light);">
          v1.0.1 | Author: <a href="https://github.com/htrnguyen" target="_blank" class="ap-link">htrnguyen</a>
        </div>
      </div>
    </div>
    
    <div class="mp-input-group">
      <label>Groq API Key</label>
      <input type="text" id="ap-key" value="${currentAIConfig.apiKeyGroq}" placeholder="gsk_...">
      <div class="ap-helper-text">Get your free key at <a href="https://console.groq.com/keys" target="_blank" class="ap-link">Groq Console</a></div>
    </div>
    
    <div class="mp-input-group">
      <label>Model Selector</label>
      <input type="text" id="ap-model" value="${currentAIConfig.model}">
    </div>
    
    <div class="mp-input-group">
      <label>System Core Prompt</label>
      <textarea id="ap-sys" rows="4">${currentAIConfig.systemPrompt}</textarea>
    </div>
    
    <div style="display:flex; gap:12px; justify-content:space-between; margin-top:30px; padding-top:20px; border-top:1px solid var(--mp-border);">
      <button id="ap-reset" class="mp-btn" style="background:#fff !important; border:1px solid #ddd !important; color:#666 !important;">Reset to Default</button>
      <div style="display:flex; gap:12px;">
        <button id="ap-close" class="mp-btn" style="background:var(--mp-surface); color:var(--mp-text);">Close</button>
        <button id="ap-save" class="mp-btn mp-btn-primary">Save Changes</button>
      </div>
    </div>
  `,
    );

    content.querySelector("#ap-save").onclick = async () => {
      await saveAIConfig({
        apiKeyGroq: content.querySelector("#ap-key").value.trim(),
        model: content.querySelector("#ap-model").value.trim(),
        systemPrompt: content.querySelector("#ap-sys").value.trim(),
      });
      hideModal(modal);
    };

    content.querySelector("#ap-reset").onclick = async () => {
      if (
        confirm(
          "Reset ALL settings to default? This will clear your API Key and custom prompt.",
        )
      ) {
        await resetAIConfig();
        content.querySelector("#ap-key").value = currentAIConfig.apiKeyGroq;
        content.querySelector("#ap-model").value = currentAIConfig.model;
        content.querySelector("#ap-sys").value = currentAIConfig.systemPrompt;
      }
    };
    content.querySelector("#ap-close").onclick = () => hideModal(modal);

    modal.appendChild(content);
    document.body.appendChild(modal);
    return modal;
  }

  function showAIDiffModal(original, enhanced, onAccept) {
    const modal = document.createElement("div");
    modal.className = "mp-modal visible";
    const content = document.createElement("div");
    content.className = "mp-modal-content";

    setSafeInnerHTML(
      content,
      `
      <button class="mp-modal-close" id="diff-close">&times;</button>
      <h2 style="margin:0 0 15px 0 !important; font-size: 20px !important; font-weight: bold !important;">Prompt Comparison</h2>
      <div class="mp-diff-container">
        <div class="mp-diff-col">
          <label style="font-weight:bold !important; display:block !important; margin-bottom:5px !important; color: #333 !important;">Original:</label>
          <div class="mp-diff-box">${original}</div>
        </div>
        <div class="mp-diff-col">
          <label style="font-weight:bold !important; display:block !important; margin-bottom:5px !important; color:#7c3aed !important;">Optimized:</label>
          <div class="mp-diff-box mp-diff-box-enhanced" id="enhanced-box">${enhanced}</div>
        </div>
      </div>
      <div style="display:flex !important; gap:12px !important; justify-content:center !important;">
        <button id="diff-cancel" class="mp-btn" style="flex:1 !important; background:#eee !important; color: #333 !important;">Cancel</button>
        <button id="diff-regen" class="mp-btn mp-btn-regen" style="flex:1 !important;">Regenerate</button>
        <button id="diff-ok" class="mp-btn mp-btn-primary" style="flex:1 !important;">Apply</button>
      </div>
    `,
    );

    content.querySelector("#diff-close").onclick = () => hideModal(modal);
    content.querySelector("#diff-cancel").onclick = () => hideModal(modal);
    content.querySelector("#diff-ok").onclick = () => {
      onAccept(content.querySelector("#enhanced-box").innerText);
      hideModal(modal);
    };
    content.querySelector("#diff-regen").onclick = async () => {
      const btn = content.querySelector("#diff-regen");
      const box = content.querySelector("#enhanced-box");
      const apiKey = getRotatingApiKey();
      if (!apiKey) return alert("API Key missing!");

      btn.disabled = true;
      btn.innerText = "...";
      try {
        const newVal = await callAI_API(original, apiKey);
        box.innerText = newVal;
      } catch (e) {
        alert("Error: " + e.message);
      } finally {
        btn.disabled = false;
        btn.innerText = "Regenerate";
      }
    };

    modal.appendChild(content);
    document.body.appendChild(modal);
  }

  function showModal(m) {
    if (m) m.classList.add("visible");
  }
  function hideModal(m) {
    if (m) {
      m.classList.remove("visible");
      setTimeout(() => m.remove(), 300);
    }
  }

  function showLoading() {
    let l = document.getElementById("ap-loading");
    if (!l) {
      l = document.createElement("div");
      l.id = "ap-loading";
      setSafeInnerHTML(
        l,
        `
        <div class="spinner">${ICONS.loading}</div>
        <div class="loading-text">Optimizing...</div>
      `,
      );
      document.body.appendChild(l);
    }
    requestAnimationFrame(() => l.classList.add("visible"));
  }
  function hideLoading() {
    const l = document.getElementById("ap-loading");
    if (l) l.classList.remove("visible");
  }

  // --- Interaction Logic ---
  async function handleOptimizer() {
    const selector = platformSelectors[detectPlatform()];
    if (!selector) return;
    const editor = document.querySelector(selector);
    if (!editor) return;

    let text =
      editor.tagName === "TEXTAREA" || editor.tagName === "INPUT"
        ? editor.value
        : editor.innerText || editor.textContent;
    if (!text || !text.trim()) {
      alert("Please enter some content first!");
      return;
    }

    const apiKey = getRotatingApiKey();
    if (!apiKey) {
      if (
        confirm(
          "API Key missing! Would you like to open the settings panel now?",
        )
      ) {
        if (settingsModal) hideModal(settingsModal);
        settingsModal = createSettingsModal();
        showModal(settingsModal);
      }
      return;
    }

    showLoading();
    try {
      const enhanced = await callAI_API(text, apiKey);
      hideLoading();
      showAIDiffModal(text, enhanced, (val) => {
        if (editor.tagName === "TEXTAREA" || editor.tagName === "INPUT") {
          editor.value = val;
        } else {
          editor.innerText = val;
        }
        editor.dispatchEvent(new Event("input", { bubbles: true }));
      });
    } catch (e) {
      hideLoading();
      alert("Error: " + e.message);
    }
  }

  function detectPlatform() {
    const h = window.location.hostname;
    for (const id in platformSelectors) if (h.includes(id)) return id;
    return null;
  }

  async function initUI() {
    if (document.getElementById("ap-trigger-fixed")) return;
    const btn = document.createElement("div");
    btn.id = "ap-trigger-fixed";
    btn.title = "Optimize Prompt (Alt+E)";
    setSafeInnerHTML(btn, ICONS.magic);
    btn.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      handleOptimizer();
    };

    // Right-click context for settings directly on button
    btn.oncontextmenu = (e) => {
      e.preventDefault();
      if (settingsModal) hideModal(settingsModal);
      settingsModal = createSettingsModal();
      showModal(settingsModal);
    };

    document.body.appendChild(btn);
  }

  async function start() {
    await loadAIConfig();
    injectGlobalStyles();
    initUI();

    // Observer to ensure button exists (some SPA might clear body)
    new MutationObserver(() => {
      if (!document.getElementById("ap-trigger-fixed")) initUI();
    }).observe(document.body, { childList: true });

    GM_registerMenuCommand("⚙️ Groq AI Settings", () => {
      if (settingsModal) hideModal(settingsModal);
      settingsModal = createSettingsModal();
      showModal(settingsModal);
    });

    window.addEventListener("keydown", (e) => {
      if (e.altKey && e.key.toLowerCase() === "e") {
        e.preventDefault();
        handleOptimizer();
      }
    });
  }

  start();
})();
