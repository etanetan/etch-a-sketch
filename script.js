// size of grid is 560x560px

const grid = document.querySelector('.grid');
const clearGrid = document.querySelector('.clear');
const changeGridSize = document.querySelector('.changeSize');

// start original 16x16 grid
for(let i=0; i<256; i++) {
        const d = document.createElement('div');
        d.style.width = '35px'; // 560px divided by 16 rows is 35px
        d.style.height = '35px';
        d.style.backgroundColor = 'white'; // set background color to white to have contrast
        d.addEventListener("mouseover", () => d.style.backgroundColor = 'black');
        grid.appendChild(d);
}
// add event listeners to clear the grid when this button is clicked
// and to change the grid size to the desired size
clearGrid.addEventListener("click", () => gridClearing(grid));
changeGridSize.addEventListener("click", () => changeSize(grid));

// sets the background color of each cell in the grid to white, clearing the grid
function gridClearing(grid) {
    let children = grid.children;
    for(let i=0; i<children.length; i++) {
        children[i].style.backgroundColor = 'white';
    }
}

// asks the user for the size of the grid, decide the size in px of each cell, clear the grid, 
// remove all children from the grid container div in the HTML, then add all of the new cells to the grid, 
// initializing the background color and having the correct size
function changeSize(grid) {
    let dimension = 0;
    while(dimension < 16 || dimension > 100) { // have the user select a dimension between 16x16 and 100x100
        dimension = parseInt(prompt("How many rows do you want? (between 16 and 100) "));
    }
    let dimensions = dimension*dimension; // total number of boxes in the grid
    let size = 560/dimension;
    gridClearing(grid);
    removeAllChildNodes(grid); // remove all current children from grid
    for(let i=0; i<dimensions; i++) { // add new children to grid, using the same initialization as the 16x16 grid
        const d = document.createElement('div');
        d.style.width = `${size}px`;
        d.style.height = `${size}px`;
        d.style.backgroundColor = 'white';
        d.addEventListener("mouseover", () => d.style.backgroundColor = 'black');
        grid.appendChild(d);
    }
}
// this function unassigns all children from the grid, allowing for a new grid to be made
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}