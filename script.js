const container = document.querySelector(".container")

    for (let i=0; i<16; i++) {
        const row = document.createElement("div");
        row.className = "row";
        container.appendChild(row);
        for (let n=0; n<16; n++) {
            const item = document.createElement("div");
            item.className = "square";
            item.addEventListener("mouseover", function(){item.style.backgroundColor = "black";});
            row.appendChild(item);
        }
    }