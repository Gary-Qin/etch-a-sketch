const container = document.querySelector(".container");

container.addEventListener("load", fillGrid(16));

function fillGrid(num) {
    console.log(num);

    const containerWidth = container.offsetWidth - 6;
    const containerHeight = container.offsetHeight - 6;

    console.log(containerHeight);
    console.log(containerWidth);

    for(let i = 0; i < num ** 2; i++) {
        const tile = document.createElement("div");
        tile.className = "tile";
        tile.setAttribute("style", 
            `background-color:#0047F0;
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
}