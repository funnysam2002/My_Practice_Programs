// const displayColor= (color,delay)=>{
//     return new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//         document.body.style.backgroundColor=color;
//         resolve();
//        },delay)
//     })
// }

// // displayColor('red',1000)
// // .then(()=> displayColor('orange',1000))
// // .then(()=> displayColor('yellow',1000))
// // .then(()=> displayColor('green',1000))
// // .then(()=> displayColor('blue',1000))
// // .then(()=> displayColor('purple',1000))

// async function rainbow(){
//     await displayColor('red',1000)
//     await displayColor('orange',1000)
//     await displayColor('yellow',1000)
//     await displayColor('green',1000)
//     await displayColor('blue',1000)
//     await displayColor('purple',1000)
// }

// rainbow()
// .then(()=>{
//     console.log("End of rainbow!")
// })

const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

async function makeTwoRequests (){
    try{
        let data1 = await fakeRequestPromise('/page1');
        console.log(data1);
        let data2 = await fakeRequestPromise('/page2');
        console.log(data2);
    }
    catch(e){
        console.log("caught an error")
        console.log(e)
    }
    
}