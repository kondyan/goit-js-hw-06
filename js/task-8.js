const refBall = document.querySelector(".ball");
const refField = document.querySelector(".field");
const refBallTwo = document.querySelector(".ball-two");
const refFieldTwo = document.querySelector(".field-two");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

refField.addEventListener("click", (event) => {
  const { layerX, layerY, currentTarget, target } = event;

  if (currentTarget !== target) {
    refBall.style.backgroundColor = getRandomHexColor();
    return;
  }

  refBall.style.top = `${layerY - refBall.offsetHeight / 2}px`;
  refBall.style.left = `${layerX - refBall.offsetWidth / 2}px`;
});

let x = 0;
let y = 0;

refBallTwo.addEventListener("mousedown", (event) => {
  x = event.layerX;
  y = event.layerY;
  refBallTwo.classList.add("ball-shadow-on");
  refFieldTwo.addEventListener("mousemove", handleMouseMove);
  refBallTwo.addEventListener("mouseup", handleMouseUp, { once: true });
});

function handleMouseUp() {
  refBallTwo.classList.remove("ball-shadow-on");
  refFieldTwo.removeEventListener("mousemove", handleMouseMove);
}

function handleMouseMove(event) {
  const { pageX, pageY } = event;
  const { top, left } = refFieldTwo.getBoundingClientRect();
  const newY = pageY - top - y;
  const newX = pageX - left - x;

  if (
    newY >= 0 &&
    newX >= 0 &&
    newY <= refFieldTwo.clientHeight - refBallTwo.clientHeight &&
    newX <= refFieldTwo.clientWidth - refBallTwo.clientWidth
  ) {
    refBallTwo.style.top = `${newY}px`;
    refBallTwo.style.left = `${newX}px`;
  }
}
