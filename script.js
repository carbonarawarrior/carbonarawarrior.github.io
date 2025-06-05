function toggleTheme() {
  const stylesheet = document.getElementById("stylesheet");
  const currentTheme = stylesheet.getAttribute("href");
  
  if (currentTheme === "gruvbox-light.css") {
    stylesheet .setAttribute("href", "gruvbox-dark.css");
  } else {
    stylesheet .setAttribute("href", "gruvbox-light.css");
  }
}

