import {MarkdownBlock, MarkdownSpan, MarkdownElement} from "https://md-block.verou.me/md-block.js";

function toggleTheme() {
  const stylesheet = document.getElementById("stylesheet");
  const currentTheme = stylesheet.getAttribute("href");
  const toggleButton = document.getElementById("toggleButton")
  
  if (currentTheme === "gruvbox-light.css") {
    stylesheet.setAttribute("href", "gruvbox-dark.css");
    toggleButton.innerHTML = "Dark"
  } else {
    stylesheet.setAttribute("href", "gruvbox-light.css");
    toggleButton .innerHTML = "Light"
  }
}

