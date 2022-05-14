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

let ul = document.getElementById("ingredients");
let list;
const recepy = ingredients.map((ingredient) => {
  let li = document.createElement("li");
  li.classList.add("item");

  li.textContent = `${ingredient}`;
  // li.innerHTML = ingredient;
  console.log(li);
  // li.innerHTML += li;
  // list += li;
  // console.log(list);
  // return list;

  return li;
});

ul.append(...recepy);
console.log(ul);
