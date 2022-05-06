const container = document.getElementsByClassName('container')[0];

function makeGrid() {
    let grids = 16;
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
            rows.appendChild(div);
            div.addEventListener("mouseover", () => { // hover state
                div.classList.remove("grids");
                div.classList.add("grids-hover");
            })
        }
    }
}



window.onload = function() {
    makeGrid();
};