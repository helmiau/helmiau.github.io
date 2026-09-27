let copy = (textId) => {
  const el = document.getElementById(textId);
  if (!el) return;
  el.select();
  document.execCommand("copy");
};

(function initCodeCopy() {
  if (!document.querySelectorAll) return;
  document.querySelectorAll("pre").forEach((pre) => {
    const btn = document.createElement("button");
    btn.className = "copy-btn";
    btn.textContent = "Copy";
    btn.type = "button";
    btn.addEventListener("click", async () => {
      const code = pre.querySelector("code");
      const text = code ? code.innerText : pre.innerText;
      try {
        await navigator.clipboard.writeText(text);
        btn.textContent = "Copied!";
        setTimeout(() => { btn.textContent = "Copy"; }, 1500);
      } catch (e) {
        btn.textContent = "Failed";
        setTimeout(() => { btn.textContent = "Copy"; }, 1500);
      }
    });
    pre.style.position = "relative";
    pre.appendChild(btn);
  });
})();
