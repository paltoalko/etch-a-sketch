//DOM selectors
const grid = document.querySelector('#container');


function setupGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
  
    for (let i = 0; i < size * size; i++) {
        let square = document.createElement("div");
        square.classList.add('grid-item');
        container.appendChild(square);
    }
    hoverColor();
  }

function hoverColor() {
  let items = document.querySelectorAll('.grid-item');
  items.forEach(item => {
    item.addEventListener('mouseover', () => {
    //   item.style.backgroundColor = "pink";
    console.log("dupcia");
    
    });
  });
}




setupGrid(4);