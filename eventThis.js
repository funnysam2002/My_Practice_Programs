const btn = document.querySelectorAll("button")
const h1s = document.querySelectorAll("h1")
const changeColor = function () {
    let r = Math.floor(Math.random()*255)+1;
    let g = Math.floor(Math.random()*255)+1;
    let b = Math.floor(Math.random()*255)+1;

    return(`rgb(${r},${g},${b})`);
}

function colorize(){
    this.style.backgroundColor =changeColor();
    this.style.color = changeColor();
}

for(let button of btn){
        button.addEventListener('click', colorize)}

for(let h1 of h1s){
    h1.addEventListener('click', colorize)}

