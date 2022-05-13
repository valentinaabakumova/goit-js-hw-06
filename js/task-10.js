function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const box = document.querySelector("#boxes");
const controls = document.querySelector("#controls");
// let amount = controls.firstChild.textContent;
const butCreate = document.querySelector("button[data-create]");
const butDestroy = document.querySelector("button[data-destroy]");
let amount = 6;
let myArr = [];

const createArray = (amount) => {
  for (let i = 0; i < amount; i += 1) {
    myArr.push((i + 3) * 10);
  }
  console.log(myArr);
  return myArr;
};

createArray(amount);

const createBox = () => {
  return `
   <div class="boxEl">
box
  </div>
  `;
};

butCreate.addEventListener("click", (amount, myArr) => {
  // console.log("gogogo");

  for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];

    const el = document.createElement("div");
    el.classList.add("boxEl");

    box.append(el);
    console.log("Amount: ", amount);
  }

  // for (let index = 0; index < amount; index++) {
  //   console.log(index);
  //   box.insertAdjacentHTML("beforeend", createBox());
  // }
});

butDestroy.addEventListener("click", () => {
  console.log("oooo");
  //// что-то не так
  box.remove();
});
