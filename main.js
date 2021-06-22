const container = document.querySelector(".container");
const pixelButtons = document.querySelectorAll(".pixel-option");
const colorButtons = document.querySelectorAll(".color-option");
const clearButton = document.querySelector(".clear-button");
let color;

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
  div.forEach((pixel) => (pixel.style.backgroundColor = "white"));
}

// color the pixel

function colorPixel() {
  if (color == "red") {
    this.style.backgroundColor = "red";
  } else if (color == "rainbow") {
    this.style.backgroundColor = `rgb(${rainbow()},${rainbow()},${rainbow()})`;
  } else if (color == "white") {
    this.style.backgroundColor = "white";
  } else {
    this.style.backgroundColor = "black";
  }
}

function rainbow() {
  const value = Math.floor(Math.random() * 255);
  return value;
}

// pixel size
function pixelOption(e) {
  if (e.target.dataset.pixel == "32px") {
    createGrid(32);
  } else if (e.target.dataset.pixel == "64px") {
    createGrid(64);
  } else if (e.target.dataset.pixel == "128px") {
    createGrid(128);
  }
}

// clicked color
function colorOption(e) {
  if (e.target.dataset.color == "red") {
    color = "red";
  } else if (e.target.dataset.color == "rainbow") {
    color = "rainbow";
  } else if (e.target.dataset.color == "white") {
    color = "white";
  } else {
    color = "black";
  }
}

//  clear canvas
function clearCanvas() {
  const div = container.querySelectorAll("div");
  div.forEach((pixel) => (pixel.style.backgroundColor = "white"));
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

pixelButtons.forEach((pixelButton) =>
  pixelButton.addEventListener("click", pixelOption)
);

clearButton.addEventListener("click", clearCanvas);
