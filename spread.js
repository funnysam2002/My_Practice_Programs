const arr = [1,2,3,4,5,6,7]

const obj1 = {
    name:"Harry",
    age:26,
    color:"white"
}

const obj2 = {
    flower:"sunflower",
    age:30,
    color:"yellow",
    area:"australia"
}
//function call
let fSpread = Math.max(...arr)

//Spread in array
const aSpread = [...arr];

//spread in oject literals
const oSpread = {...obj1,...obj2};