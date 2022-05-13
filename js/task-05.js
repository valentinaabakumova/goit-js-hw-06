let nameIn = document.querySelector("#name-input");
let nameOut = document.querySelector("#name-output");

nameIn.addEventListener("input", () => {
  if (nameIn.value != "") {
    nameOut.textContent = nameIn.value;
  } else {
    nameOut.textContent = "Anonymous";
  }
});
