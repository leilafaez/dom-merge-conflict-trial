export function createMainContent() {
  const mainContent = document.createElement("main");
  mainContent.innerHTML = `
   <p id="counter" data-testid="counter">0</p>
    <button id="increment">Increment</button>
    <button id="decrement">Decrement</button>
  `;
  return mainContent;
}


