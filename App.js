
function random(number) {
    return Math.floor(Math.random()*number) ;
}


creategrid(16);             //run it when open the project first time

const button = document.querySelector('#button');
button.addEventListener("click", function () {
    let n = prompt("Please enter n", 16)
    creategrid(n)
});



function creategrid(n) {
    const parent_square = document.getElementById("parent_square");
    const parent_square_width = parent_square.offsetWidth;
    const parent_square_height = parent_square.offsetHeight;
    parent_square.innerText = '';
    for (let i = 0; i < n; i++) {   
        const row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < n; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");

            cell.style.width = `${parent_square_width / n}px`;
            cell.style.height = `${parent_square_height / n}px`;
            row.appendChild(cell);
        }
        parent_square.appendChild(row);
    }

    const cells = document.getElementsByClassName("cell");

    for (let cell of cells) {
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = `rgb(${random(256)},${random(256)},${random(256)})`;
            //console.log(cell.style.backgroundColor);
        })
    }

}








