// function add(...arr){
//     let sumArr = 0;
//     for(let x of arr){
//          sumArr += x;
//     }
//     return sumArr;
// }

function add(...arr){
    return arr.reduce((sum,el) => sum+el )
}