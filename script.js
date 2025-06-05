const themeButton = document.getElementById("themeButton");
const stylesheet = document.styleSheets[0];

themeButton.addEventListener("click", function() {
  // If the current URL contains "ligh-theme.css"
  if (stylesheet.cssRules[0].selectorText === "gruvbox-light.css") {
    // ... then switch it to "dark-theme.css"
    stylesheet.cssRules[0].selectorText = "gruvbox-dark.css";
  // Otherwise...
  } else {
    // ... switch it to "light-theme.css"
    stylesheet.cssRules[0].selectorText = "gruvbox-light.css";
  }
});

console.log(stylesheet.cssRules[0])




