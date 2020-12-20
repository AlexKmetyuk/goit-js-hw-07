const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const createNewItem = (ingredient) => {
  const itemRef = document.createElement("li");
  itemRef.textContent = ingredient;
  return itemRef;
};

const mapped = ingredients.map((ingredient) => createNewItem(ingredient));

console.log(mapped);

const listRef = document.querySelector("#ingredients");

listRef.append(...mapped);
