import { createToggleButton } from "./components/toggleButton.js";
import { createTitle } from "./components/title.js";
import "./global.css";

const toggleButton = createToggleButton();
const title = createTitle();

fetch("http://api.tvmaze.com/shows/1849")
  .then((res) => res.json())
  .then((data) => console.log(data));

document.body.append(title);
document.body.append(toggleButton);
