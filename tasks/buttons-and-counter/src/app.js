import { createHeader } from "./header";
import { createMainContent } from "./main";

//increments the number in a node's text
function increment(node) {
  let current = node.textContent;
  node.textContent = Number(current) + 1;
}
function decrement(node) {
  let current = node.textContent;
  node.textContent = Number(current) - 1;
}
export function App() {
  const body = document.createElement("body");

  const header = createHeader();
  body.appendChild(header);

  const mainContent = createMainContent();
  body.appendChild(mainContent);

  const incrementButton = body.querySelector("#increment");
  const decrementButton = body.querySelector("#decrement");
  const counter = body.querySelector("#counter");
  incrementButton.addEventListener("click", () => {
    increment(counter);
  });
  decrementButton.addEventListener("click", () => {
    decrement(counter);
  });
  return body;
}
