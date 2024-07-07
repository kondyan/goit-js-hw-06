const refs = {
  controls: document.querySelector("#controls"),
  container: document.querySelector("#boxes"),
  form: document.querySelector("#form"),
  input: controls.children[0],
  btnCreate: controls.children[1],
  btnDestroy: controls.children[2],
};

refs.form.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = refs.input.value;
  if (value <= 100 && value >= 1) {
    createBoxes(value);
  }
});

refs.btnCreate.addEventListener("click", () => {
  const value = refs.input.value;
  if (value <= 100 && value >= 1) {
    createBoxes(value);
  }
});

refs.btnDestroy.addEventListener("click", () => {
  refs.container.innerHTML = "";
  refs.input.value = 0;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const array = [];
  for (let i = 1; i <= amount; i++) {
    const randomColor = getRandomHexColor();
    const myDiv = document.createElement("div");
    myDiv.style.backgroundColor = randomColor;
    myDiv.style.width = `${30 + i * 10}px`;
    myDiv.style.height = `${30 + i * 10}px`;
    array.push(myDiv);
  }
  refs.container.append(...array);
}
