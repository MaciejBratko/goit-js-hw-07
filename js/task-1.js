const items = document.querySelectorAll("li.item");

console.log(`Number of categories: ${items.length}`);

items.forEach((item) => {
  const category = item.firstElementChild.textContent;
  const categoryElementsCount = item.lastElementChild.children.length;
  console.log(`Category: ${category}`);
  console.log(`Elements: ${categoryElementsCount}`);
});
