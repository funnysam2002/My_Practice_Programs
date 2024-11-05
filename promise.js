//creating promises
const requestUrl = (url)=>{
    return new Promise((resolve,reject)=>{
        const rand = Math.random();
        setTimeout(()=>{
            if(rand>0.5){
                resolve("Your fake data");
            }
            reject("Request error")
            
        },1000)
    })
}

requestUrl("book.com/")
.then((data)=>{
    console.log("done with the promise")
    console.log("data is:",data)
})
.catch((err)=>{
    console.log("connection lost",err);
})
