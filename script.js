const container = document.querySelector(".container");
const resetButton = document.querySelector(".reset");
const dimensionButton = document.querySelector(".change-dimension");
const dimensionSlider = document.querySelector("#size-input");
const colourPicker = document.querySelector("#pen");
const dimensionValue = document.querySelectorAll(".size");
let tiles;

let mouseDown = 0;
document.body.onkeydown = function() { 
    penDown(tiles, colourPicker.value);
}
document.body.onkeyup = function() {
    penUp();
}
document.body.onmousedown = function() { 
    penDown(tiles, colourPicker.value);
}
document.body.onmouseup = function() { 
    penUp();
}

container.addEventListener("load", setGrid(16));
resetButton.addEventListener("click", () => clearGrid());
dimensionButton.addEventListener("click", () => removeGrid());
colourPicker.addEventListener("input", (e) => {
    console.log(e.target.value);
    setColour(tiles, e.target.value);
})

dimensionValue.forEach(node => {node.textContent = dimensionSlider.value})
dimensionSlider.addEventListener("input", (e) => {
    dimensionValue.forEach(node => {
        node.textContent = e.target.value;
    })
})

function setGrid(num) {
    const containerWidth = container.offsetWidth - 6;
    const containerHeight = container.offsetHeight - 6;

    for(let i = 0; i < num ** 2; i++) {
        const tile = document.createElement("div");
        tile.className = "tile";
        tile.setAttribute("style", 
            `background-color:#FFFFFF;
            width:${containerWidth / num}px;
            height:${containerHeight / num}px;`);
        container.appendChild(tile);
    }
    tiles = document.querySelectorAll(".tile");
}

function penDown(tiles, colour) {
    tiles.forEach(tile => {
        tile.addEventListener("mouseover", () => {
            tile.style.backgroundColor = colour;
        })
    })
    console.log("pen down");
}

function penUp() {
    // tiles = document.querySelectorAll(".tile");
    tiles.forEach(tile => {
        const oldTile = tile;
        const newTile = oldTile.cloneNode(true);
        oldTile.parentNode.replaceChild(newTile, oldTile);
    })
    tiles = document.querySelectorAll(".tile");
    console.log("pen up");
}


function clearGrid() {
    console.log("Reset");
    tiles.forEach(tile => {
        tile.style.backgroundColor = "#FFFFFF";
    });
}

function removeGrid() {
    container.replaceChildren();
    setGrid(dimensionSlider.value);
}