const getNumberOfCategories = () => {
  const items = document.querySelectorAll("ul#categories .item");
  return `Number of categories: ${items.length}`;
};

console.log(getNumberOfCategories());

const getLists = () => {
  const list = document.querySelector("ul#categories");
  const includings = list.querySelectorAll(".item");

  includings.forEach((element) => {
    const title = element.querySelector("h2");
    console.log(`Category: ${title.textContent}`);
    const refUl = element.querySelector("ul");
    console.log(`Elements: ${refUl.children.length}`);
  });
};

getLists();

// Для кожного елемента li.item у списку
// ul#categories знайде й виведе в консоль текст заголовка
// елемента(тегу < h2 >) і кількість елементів
//  у категорії(усіх < li >, вкладених у нього).
