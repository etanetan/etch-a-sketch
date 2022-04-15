const grid = document.querySelector('.grid');

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
