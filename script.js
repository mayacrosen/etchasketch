const container = document.querySelector(".container")
const enter = document.querySelector("button");
const input = document.querySelector("input");
let gridSize = 0;

function drawGrid() {
    const temp = parseInt(input.value);
    if (temp < 100) {
        gridSize = temp;
    }
    for (let i=0; i<gridSize; i++) {
        const row = document.createElement("div");
        row.className = "row";
        container.appendChild(row);
        for (let n=0; n<gridSize; n++) {
            const item = document.createElement("div");
            item.className = "square";
            item.addEventListener("mouseover", function(){item.style.backgroundColor = "black";});
            row.appendChild(item);
        }
    }
} 



enter.addEventListener("click", drawGrid);