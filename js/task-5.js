function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const page = document.querySelector("body");
const changeClrBtn = document.querySelector(".change-color");
const textStuff = changeClrBtn.previousElementSibling;

changeClrBtn.addEventListener("click", () => {
  const randomColor = getRandomHexColor();

  page.style.backgroundColor = randomColor;
  textStuff.children[0].textContent = randomColor;
  // console.log("the button was clicked");
});
