const container = document.querySelector('.container');

// Add 16 divs
for (let i = 1; i < (257+16); i++) {
  const div = document.createElement('div');
  container.appendChild(div);
}
