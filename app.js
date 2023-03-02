const containerDiv = document.querySelector('.container');

createGrid();
// Add 16 divs
function createGrid () {
for (let i = 1; i < (257+16); i++) {
  let div = document.createElement('div');
  containerDiv.appendChild(div).className='smallSquares';
  div.addEventListener('mouseover', () => {
    div.style.backgroundColor = 'black';
  })
  }
};

// Resize Grid Button
function selectGrid() {
  
}



// Reset Button
function clearGrid() {

  }


// Erasor Button
function eraserColour() {

}

// Colour Button
function colourSelector() {
  
}
// Rainbow Colour button
function rainbowColour() {
  
}



// Buttons
  selectBtn.addEventListener('click', selectGrid)
  clearBtn.addEventListener('click', clearGrid);
  rainbowBtn.addEventListener('click', rainbowColour);
  colourBtn.addEventListener('click', colourSelector);
  eraserBtn.addEventListener('click', eraserColour);