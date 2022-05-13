const sizeEL = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

sizeEL.addEventListener("input", () => {
  let sizeInTime = sizeEL.value;
  let newSize = sizeInTime + "px";
  textEl.style.fontSize = newSize;
});
