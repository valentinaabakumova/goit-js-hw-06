let counterValue = 0;

const dec = document.querySelector('[data-action="decrement"]');
let value = document.querySelector("#value");
const inc = document.querySelector('[data-action="increment"]');

dec.addEventListener("click", () => {
  counterValue -= 1;
  value.textContent = counterValue;
});

inc.addEventListener("click", () => {
  counterValue += 1;
  value.textContent = counterValue;
});
