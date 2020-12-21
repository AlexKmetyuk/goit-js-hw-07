const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const listRef = document.querySelector("#ingredients");

const createNewItem = (ingredient) => {
  const itemRef = document.createElement("li");
  itemRef.textContent = ingredient;
  return itemRef;
};

listRef.append(...ingredients.map((ingredient) => createNewItem(ingredient)));
