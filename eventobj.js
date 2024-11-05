document.querySelector("button").addEventListener('click',function(evt){
    console.log(evt);
})

// const ip = document.querySelector("input");
// ip.addEventListener('keydown',function(evt){
//     console.log(evt.code);
//     console.log(evt.key)
// })
// ip.addEventListener('keyup',function(){
//     console.log("Keyup");
// })

window.addEventListener('keydown',function(evt){
    switch(evt.code){
        case "ArrowUp":
            console.log("Up");
            break;
        case "ArrowDown":
            console.log("Down");
            break; 
        case "ArrowLeft":
            console.log("Left");
            break;  
        case "ArrowRight":
            console.log("Right");
            break; 

        default:
            console.log("Invalid key");
    }
})