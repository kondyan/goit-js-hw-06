const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");

const listener = inputRef.addEventListener("input", (ev) => {
  outputRef.textContent = ev.currentTarget.value;
});
