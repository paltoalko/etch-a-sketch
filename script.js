//DOM selectors
const grid = document.querySelector('#container');
const colorpck = document.querySelector("#pickclr")
const blackclr = document.querySelector("#blackclr")
const rgbclr = document.querySelector("#rgbclr")
const eraser = document.querySelector("#eraser")
const newGrid = document.querySelector("#newgrid")
const gridSize = document.querySelector(".slider")

let currentSize = 10;

function setupGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
  
    for (let i = 0; i < size * size; i++) {
        let square = document.createElement("div");
        square.classList.add('grid-item');
        container.appendChild(square);
    }
    
    chooseColor ();
    changeColor();
    clearGrid ();
  }

function chooseColor () {
    if (rgbclr.addEventListener ('click', function () {
        color = "rgb"
    })) {return color}
    else if (blackclr.addEventListener('click', function () {
        color = "black"
    })) {return color}
    else if (eraser.addEventListener('click', function () {
        color = "eraser"
    })) {return color}
    else if (colorpck.addEventListener('input', function () {
        color = "colorpck.value";
    })) {return color}
    else {
        color = "black"
        return color
    }
}

function changeColor() {
  let items = document.querySelectorAll('.grid-item');
  items.forEach(item => {
    item.addEventListener('mouseover', () => {
        switch (true) {
            case (color === "black"):
            item.style.backgroundColor = "black";
            break;
            
            case (color === "eraser"):
                item.style.backgroundColor = "white";
            break;

            case (color === "rgb"):
                item.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            break;

            case (color === "colorpck.value"):
                item.style.backgroundColor = colorpck.value;
            break;
        }
    });
  });
}

function clearGrid () {
   newGrid.addEventListener('click', function () {
    container.innerHTML = ''
    setupGrid (currentSize);
   })
}
function changeSize () {
    gridSize.addEventListener('input', function () {
        size = parseInt(gridSize.value)
        container.innerHTML = ''
        setupGrid (size);
        
    })


}

changeSize ();
setupGrid (currentSize);


