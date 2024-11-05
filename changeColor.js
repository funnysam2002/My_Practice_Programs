const btn = document.querySelector("button");

btn.addEventListener('click',() => {
    const bgColor = changeColor();
    document.body.style.backgroundColor = bgColor;
    document.querySelector('h1').innerText = bgColor;
})

function changeColor() {
    let r = Math.floor(Math.random()*255)+1;
    let g = Math.floor(Math.random()*255)+1;
    let b = Math.floor(Math.random()*255)+1;

    return(`rgb(${r},${g},${b})`);
}