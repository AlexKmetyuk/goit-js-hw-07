const items = [...document.querySelectorAll("li.item")];
console.log(`В списке ${items.length} категории.`);

const mapped = items
  .map((item) => {
    return {
      title: item.querySelector("h2").textContent,
      count: item.querySelectorAll("ul li").length,
    };
  })
  .forEach((item) => {
    console.log(
      `Категория: ${item.title} \r\nКоличество элементов: ${item.count} `
    );
  });
