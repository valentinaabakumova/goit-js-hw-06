function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let text = document.querySelector(".color");
let btn = document.querySelector(".change-color");

btn.addEventListener("click", (event) => {
  let newColor = getRandomHexColor();

  document.querySelector("body").style.backgroundColor = newColor;
  text.textContent = newColor;
});
