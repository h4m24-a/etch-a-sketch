const container = document.querySelector(".container");
const userInput = document.getElementById("quantity");
let color = "black";

// Buttons
const selectBtn = document.getElementById("selectGrid");
const clearBtn = document.getElementById("clear");
const rainbowBtn = document.getElementById("rainbow");
const colourBtn = document.getElementById("colour");
const eraserBtn = document.getElementById("eraser");


createGrid = () => {
  for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("smallsquares");
    container.appendChild(div);
    div.addEventListener('mouseover', colorSquare);
      div.style.backgroundColor = '';
    }
  }


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
    div.addEventListener('mouseover', colorSquare);
      div.style.backgroundColor = '';
    }
  };


// Colours
function colorSquare () {
  if (color === 'rainbow'){
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  } else {
  this.style.backgroundColor = color;
  }
};

function changeColor(choice){
  color = choice
};



userInput.addEventListener("change", updateGrid);

createGrid();




// Clear Button
clearBtn.addEventListener("click", function () {
  container.innerHTML = "";
  userInput.value = "";
  container.style.setProperty("grid-template-columns", `repeat(16, 2fr)`);
  container.style.setProperty("grid-template-rows", `repeat(16, 2fr)`);
  createGrid();
});
