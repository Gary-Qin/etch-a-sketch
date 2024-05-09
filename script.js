const container = document.querySelector(".container");
const resetButton = document.querySelector(".reset");
const dimensionButton = document.querySelector(".change-dimension");
const dimensionSlider = document.querySelector("#size-input");
const dimensionValue = document.querySelectorAll(".size");
let tiles;

container.addEventListener("load", setGrid(16));
resetButton.addEventListener("click", () => clearGrid());
dimensionButton.addEventListener("click", () => removeGrid());

dimensionValue.forEach(node => {node.textContent = dimensionSlider.value})
dimensionSlider.addEventListener("input", (e) => {
    dimensionValue.forEach(node => {
        node.textContent = e.target.value;
    })
})

function setGrid(num) {
    console.log(num);

    const containerWidth = container.offsetWidth - 6;
    const containerHeight = container.offsetHeight - 6;

    console.log(containerHeight);
    console.log(containerWidth);

    for(let i = 0; i < num ** 2; i++) {
        const tile = document.createElement("div");
        tile.className = "tile";
        tile.setAttribute("style", 
            `background-color:#FFFFFF;
            width:${containerWidth / num}px;
            height:${containerHeight / num}px;`);
        tile.addEventListener("mouseover", () => {
            tile.style.backgroundColor = "#0070F0";
        })
        tile.addEventListener("mouseout", () => {
            tile.style.backgroundColor = "#0047F0";
        })
        container.appendChild(tile);
    }
    tiles = document.querySelectorAll(".tile");
    console.log(tiles);
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