const container = document.querySelector(".container");
const lowButton = document.querySelector(".low-button");
const medButton = document.querySelector(".medium-button");
const highButton = document.querySelector(".high-button");
const colorButtons = document.querySelectorAll(".color-option");
const clearButton = document.querySelector(".clear-button");
let color = "black";

// default grid size on load
createGrid(64);

// create grid
function createGrid(num) {
  pixelReset();
  for (i = 0; i < num * num; i++) {
    const createDiv = document.createElement("div");
    container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${num}, 1fr)`;
    container.appendChild(createDiv);
  }
  const div = container.querySelectorAll("div");
  div.forEach((pixel) => pixel.addEventListener("mouseover", colorPixel));
}

// color the pixel
function colorPixel() {
  if (color == "red") {
    this.style.backgroundColor = "red";
  } else if (color == "white") {
    this.style.backgroundColor = "white";
  } else {
    this.style.backgroundColor = "black";
  }
}

// clicked color
function colorOption(e) {
  if (e.target.dataset.color == "red") {
    color = "red";
  } else if (e.target.dataset.color == "white") {
    color = "white";
  } else {
    color = "black";
  }
}

// reset pixel size
function pixelReset() {
  let pixels = container.querySelectorAll("div");
  pixels.forEach((pixel) => pixel.remove());
}

//  event listeners
colorButtons.forEach((colorButton) =>
  colorButton.addEventListener("click", colorOption)
);
