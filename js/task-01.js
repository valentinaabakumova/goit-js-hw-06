const amount = document.querySelector("#categories");
console.log("Number of categories:", amount.children.length);

const list = document.querySelectorAll(".item");
const item = [...list].forEach((elem) => {
  elem = console.log(
    `Category: ${elem.firstElementChild.textContent} \nElements: ${elem.lastElementChild.children.length}`
  );
});
