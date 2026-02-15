// ==UserScript==
// @name         Scribd Free Reader
// @namespace    http://tampermonkey.net/
// @version      2.1
// @description  Mở tài liệu Scribd ở chế độ xem đầy đủ (Embed Mode) một cách đơn giản và nhẹ nhàng.
// @author       htrnguyen
// @match        https://www.scribd.com/document/*
// @match        https://www.scribd.com/doc/*
// @icon         https://raw.githubusercontent.com/htrnguyen/my-user-scripts/main/scripts/scribd-free-reader/logo.png
// @updateURL    https://raw.githubusercontent.com/htrnguyen/my-user-scripts/main/scripts/scribd-free-reader/scribd-free-reader.user.js
// @downloadURL  https://raw.githubusercontent.com/htrnguyen/my-user-scripts/main/scripts/scribd-free-reader/scribd-free-reader.user.js
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  const ICON_READ = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>`;

  const createButton = () => {
    if (document.getElementById("scribd-free-reader-btn")) return;

    const btn = document.createElement("button");
    btn.id = "scribd-free-reader-btn";
    btn.innerHTML = ICON_READ;
    btn.title = "Đọc Full Màn Hình";

    Object.assign(btn.style, {
      position: "fixed",
      bottom: "20px",
      right: "20px",
      zIndex: "9999",
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      border: "none",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "transform 0.2s, box-shadow 0.2s",
    });

    btn.onmouseenter = () => {
      btn.style.transform = "translateY(-2px)";
      btn.style.boxShadow = "0 6px 8px rgba(0,0,0,0.2)";
    };
    btn.onmouseleave = () => {
      btn.style.transform = "translateY(0)";
      btn.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
    };

    btn.onclick = () => {
      const match = window.location.href.match(/(?:document|doc)\/(\d+)/);
      if (match && match[1]) {
        const embedUrl = `https://www.scribd.com/embeds/${match[1]}/content`;
        window.open(embedUrl, "_blank");
      } else {
        alert("Không tìm thấy ID tài liệu.");
      }
    };

    document.body.appendChild(btn);
  };

  // Init
  createButton();

  // Handle SPA navigation
  let lastUrl = location.href;
  new MutationObserver(() => {
    if (location.href !== lastUrl) {
      lastUrl = location.href;
      setTimeout(createButton, 1000);
    }
  }).observe(document.body, { childList: true, subtree: true });
})();
