function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const box = document.querySelector("#boxes");
const controls = document.querySelector("#controls");
// let amount = controls.firstChild.textContent;
const butCreate = document.querySelector("button[data-create]");
const butDestroy = document.querySelector("button[data-destroy]");

butCreate.addEventListener("click", () => {
  console.log("gogogo");
});

butDestroy.addEventListener("click", () => {
  console.log("oooo");
});
