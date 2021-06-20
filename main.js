const container = document.querySelector(".container");

function createGrid(num) {
  pixelSize();
  // create grid
  for (i = 0; i < num * num; i++) {
    const createDiv = document.createElement("div");
    container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${num}, 1fr)`;
    container.appendChild(createDiv);
  }
  const div = container.querySelectorAll("div");
  div.forEach((pixel) => pixel.addEventListener("mouseover", pixelColor));
}

// reset pixel size
function pixelSize() {
  let pixels = container.querySelectorAll("div");
  pixels.forEach((pixel) => pixel.remove());
}

// pixel color
function pixelColor() {
  this.style.backgroundColor = "red";
}
