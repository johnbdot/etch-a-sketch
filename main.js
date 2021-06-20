const grid = document.querySelector("#grid");

function createCells(num) {
  for (i = 0; i < num * num; i++) {
    const newDiv = document.createElement("div");
    newDiv.className = "cell";
    grid.appendChild(newDiv);
  }
  grid.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "red";
  });
}
