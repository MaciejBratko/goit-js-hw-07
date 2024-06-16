function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.getElementById("controls");
const input = controls.querySelector("input");
const createButton = controls.querySelector("[data-create]");
const destroyButton = controls.querySelector("[data-destroy]");
const boxesContainer = document.getElementById("boxes");

createButton.addEventListener("click", handleCreateButtonClick);
destroyButton.addEventListener("click", destroyBoxes);

function handleCreateButtonClick() {
  const numberOfBoxes = parseInt(input.value);
  if (!isNaN(numberOfBoxes) && numberOfBoxes >= 1 && numberOfBoxes <= 100) {
    createBoxes(numberOfBoxes);
    1;
  }
}

function createBoxes(amount) {
  destroyBoxes();

  const boxesArray = Array.from({ length: amount }, (_, i) => {
    const box = document.createElement("div");
    const size = 30 + i * 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    return box;
  });

  boxesContainer.append(...boxesArray);

  input.value = "";
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}
