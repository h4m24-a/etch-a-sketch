const container = document.querySelector(".container");
const userInput = document.getElementById("quantity");
let color = "black";

// Buttons
const selectBtn = document.getElementById("selectGrid");
const clearBtn = document.getElementById("clear");
const screenVal = document.querySelector(".value");

createGrid = () => {
  for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("smallSquares");
    container.appendChild(div);
    div.addEventListener("mouseover", colorSquare);
    div.style.backgroundColor = "";
  }
};

updateGrid = () => {
  container.innerHTML = "";
  container.style.setProperty(
    "grid-template-columns",
    `repeat(${userInput.value}, 2fr)`
  );
  container.style.setProperty(
    "grid-template-rows",
    `repeat(${userInput.value}, 2fr)`
  );
  for (let i = 0; i < userInput.value * userInput.value; i++) {
    const div = document.createElement("div");
    div.classList.add("smallsquares");
    container.appendChild(div);
    div.addEventListener("mouseover", colorSquare);
    div.style.backgroundColor = "";
  }
};

// Colours
function colorSquare() {
  if (color === "color") {
    let newColor = document.getElementById("color").value;
    this.style.backgroundColor = newColor;
  } else if (color === "rainbow") {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  } else {
    this.style.backgroundColor = color;
  }
}

function changeColor(choice) {
  color = choice;
}

// Slider for Grid
quantity.addEventListener("input", function () {
  let val = userInput.value;
  screenVal.textContent = val;
});

userInput.addEventListener("change", updateGrid);

// Clear Button
clearBtn.addEventListener("click", clearGrid);
function clearGrid() {
  container.childNodes.forEach((div) => (div.style.backgroundColor = "white"));
}

createGrid();
