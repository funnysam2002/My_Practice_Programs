// async function greet(){

// }

// const sing = async ()=>{
//     throw "problem arised"
//     return "da da da"
// }

// sing()
// .then((data)=>{
//     console.log("promise resolved with:",data)
// })
// .catch((err)=>{
//     console.log("oh no")
//     console.log(err)
//  })

const login = async (username,password)=>{
    if(!username || !password) throw "Missing credentials"
    if(password === "corgifeetarecute") return "Welcome"
    throw 'Invald password'
}

login('ks150502','corgifeetarecute')
.then(msg=>{
    console.log("logged in")
    console.log(msg)
})
.catch(err=>{
    console.log("error!")
    console.log(err)
})