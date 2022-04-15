// size of grid is 512x512px

const grid = document.querySelector('.grid');
const clearGrid = document.querySelector('.clear');
const changeGridSize = document.querySelector('.changeSize');

for(let i=0; i<16; i++) {
    for(let j=0; j<16; j++) {
        const d = document.createElement('div');
        d.style.border = '1px solid black';
        d.style.width = '30px';
        d.style.height = '30px';
        d.addEventListener("mouseover", () => d.style.backgroundColor = 'black');
        grid.appendChild(d);
    }
}

clearGrid.addEventListener("click", () => gridClearing(grid));
changeGridSize.addEventListener("click", () => changeSize(grid));


function gridClearing(grid) {
    let children = grid.children;
    for(let i=0; i<children.length; i++) {
        children[i].style.backgroundColor = 'white';
    }
}

function changeSize(grid) {
    let dimension = parseInt(prompt("enter grid dimension: "));
    let dimensions = dimensions*dimensions; // total number of boxes in the grid
    let size = 512/dimension; // get height and width of each box in grid
    removeAllChildNodes(grid); // remove all current children from grid
    for(let i=0; i<dimensions; i++) { // add new children to grid
        const d = document.createElement('div');
        d.style.border = '1px solid black';
        d.style.width = size;
        d.style.height = size;
        d.addEventListener("mouseover", () => d.style.backgroundColor = 'black');
        grid.appendChild(d);
    }
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}