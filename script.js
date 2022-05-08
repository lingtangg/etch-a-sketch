const container = document.getElementsByClassName('container')[0];
const gridSize = document.getElementById('grid-size');
const maxWidth = 960;
const maxHeight = 480;

function makeGrid(grids) {
    for (let y = 1; y < grids + 1; y++) { // create rows
        const row = document.createElement('div');
        row.classList.add('rows');
        row.style.display = 'flex';
        container.appendChild(row);

        for (let i = 0; i < grids; i++) { // create grids
            const rows = document.getElementsByClassName('rows')[y-1];
            const div = document.createElement('div');
            div.classList.add('grids');
            div.style.flexGrow = '1';
            div.style.width = maxWidth / grids + "px"; // fix size regardless of grids
            div.style.height = maxHeight / grids + "px";
            rows.appendChild(div);
            div.addEventListener("mouseover", () => { // hover state
                div.classList.remove("grids");
                div.classList.add("grids-hover");
            })
        }
    }
}

function chooseGridSize() {
    return parseInt(prompt("What size grid would you like?"));
}

function changeColours() {
    
}

// Choose grid size through button
gridSize.addEventListener("click", function () {
    makeGrid(chooseGridSize());
})


