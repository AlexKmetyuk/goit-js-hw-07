const value = document.querySelector("#value");
const btnDecrement = value.previousElementSibling;
const btnIncrement = value.nextElementSibling;

let counterValue = 0;

const increment = () => {
  counterValue -= 1;
  value.textContent = counterValue;
};
const decrement = () => {
  counterValue += 1;
  value.textContent = counterValue;
};

btnDecrement.addEventListener("click", () => increment());
btnIncrement.addEventListener("click", () => decrement());
