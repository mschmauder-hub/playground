import { createToggleButton } from "./components/toggleButton.js";
import { createTitle } from "./components/title.js";
import "./global.css";

const toggleButton = createToggleButton();
const title = createTitle();

document.body.append(title);
document.body.append(toggleButton);
