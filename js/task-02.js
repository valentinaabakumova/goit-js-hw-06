const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// const ingredientsEL = document.querySelector("#ingredients");

// const createListItem = (text) => {
//   const li = document.createElement("li");
//   li.textContent = text;
//   li.classList.add("item");
//   ingredientsEL.append(li);
//   /// a little bit styles:   ////
//   li.style.color = "blue";
//   li.style.listStyleType = "square";
// };

// ingredients.forEach((ingredient) => createListItem(ingredient));

//////////

let list = document.getElementById("ingredients");
const recepy = ingredients.forEach((ingredient) => {
  let item = document.createElement("li");
  item.classList.add("item");
  item.textContent = ingredient;
  item.innerHTML = ingredient;
  list.append(item);
});
