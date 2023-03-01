let container = document.querySelector('.container');

// Add 16 divs
for (let i = 1; i < (257+16); i++) {
  let div = document.createElement('div');
  container.appendChild(div).className='smallSquares';
  div.addEventListener('mouseover', () => {
    div.style.backgroundColor = 'black';
  })
}
