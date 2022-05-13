const inputEL = document.querySelector("#validation-input");
const CORRECT = inputEL.getAttribute("data-length");

inputEL.addEventListener("blur", () => {
  let amount = inputEL.value.length;
  console.log("fdf", amount);

  if (amount === Number(CORRECT)) {
    inputEL.classList.add("valid");
    inputEL.classList.remove("invalid");
  } else {
    inputEL.classList.add("invalid");
    inputEL.classList.remove("valid");
  }
});
