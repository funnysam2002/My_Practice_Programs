// setTimeout(()=>{
//     document.body.style.backgroundColor="red";
//     setTimeout(()=>{
//         document.body.style.backgroundColor="orange";
//         setTimeout(()=>{
//             document.body.style.backgroundColor="yellow";
//         },1000);
//     },1000);
// },1000);


// const delayedColor = (newColor,delay,donext)=>{
//     setTimeout(()=>{
//       document.body.style.background = newColor;
//       donext();
//     },delay)
// }

// delayedColor('red',1000,()=>{
//     delayedColor('orange',1000,()=>{
//         delayedColor('yellow',1000,()=>{
//             delayedColor('green',1000,()=>{
//                 delayedColor('blue',1000,()=>{
//                     delayedColor('purple',1000,()=>{
//                          console.log("inside callback")
//                     })

//                 })

//             })
 
//         })

//     })
    
// })

const displayColor = (color,delay)=>{
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        document.body.style.backgroundColor=color;
        resolve();
       },delay)
    })
}

displayColor('red',1000)
.then(()=> displayColor('orange',1000))
.then(()=> displayColor('yellow',1000))
.then(()=> displayColor('green',1000))
.then(()=> displayColor('blue',1000))
.then(()=> displayColor('purple',1000))
