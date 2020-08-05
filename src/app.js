import { createToggleButton } from "./components/toggleButton.js";
import { createTitle } from "./components/title.js";

const toggleButton = createToggleButton();
const title = createTitle();

document.body.append(title);
document.body.append(toggleButton);
