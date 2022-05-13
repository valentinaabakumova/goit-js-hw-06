let nameIn = document.querySelector("#name-input");
let nameOut = document.querySelector("#name-output");

// nameIn.addEventListener("input", () => {
//   if (nameIn.value != "") {
//     nameOut.textContent = nameIn.value;
//   } else {
//     nameOut.textContent = "Anonymous";
//   }
// });

/////// second option

nameIn.addEventListener("input", (event) => {
  if (event.currentTarget.value != "") {
    nameOut.textContent = event.currentTarget.value;
  } else {
    nameOut.textContent = "Anonymous";
  }
});
