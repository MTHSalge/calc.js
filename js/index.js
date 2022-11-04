// Imports
import calculate from "./calculate.js";
import copyToClipboard from "./copyToClipboard.js";
import { handleClearBtn, handlePressBtn, handleTyping } from "./keyHandler.js";
import themeSwitch from "./themeSwitch.js";

const input = document.getElementById("input");

// Making the calc's buttons work
document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", handlePressBtn);
});

// Adding "Clear" content
document.getElementById("clear").addEventListener("click", handleClearBtn);
// Identify specified & non-specified keys
document.getElementById("input").addEventListener("keydown", handleTyping);
// Adding "=" content to calculate operations
document.getElementById("equal").addEventListener("click", calculate);
// Copy to clipboard (button) content
document
  .getElementById("copyToClipboard")
  .addEventListener("click", copyToClipboard);
// Theme Switcher Dark / Light
document.getElementById("themeSwitcher").addEventListener("click", themeSwitch);
