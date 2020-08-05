import { createElement } from "../utils/element.js";

export function createToggleButton() {
  const toggleButton = createElement("button", {
    classname: "toggle",
    innerHTML: "toggle",
  });
  let root = document.documentElement;
  let isDark = true;

  toggleButton.addEventListener("click", () => {
    if (isDark) {
      root.style.setProperty("--main-bg-color", "white");
      root.style.setProperty("--main-text-color", "black");
    } else {
      root.style.setProperty("--main-bg-color", "black");
      root.style.setProperty("--main-text-color", "white");
    }
    isDark = !isDark;
  });
  return toggleButton;
}
