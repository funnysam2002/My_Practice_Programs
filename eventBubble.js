let randColor = function () {
    let r = Math.floor(Math.random()*255)+1;
    let g = Math.floor(Math.random()*255)+1;
    let b = Math.floor(Math.random()*255)+1;

    return(`rgb(${r},${g},${b})`);
}

const container = document.querySelector('div');
const colbtn = document.querySelector('#chgcol');

colbtn.addEventListener('click',function(evt){
    container.style.backgroundColor = randColor();
    evt.stopPropagation();
});

container.addEventListener('click',()=>{
    container.classList.toggle("hide");

})