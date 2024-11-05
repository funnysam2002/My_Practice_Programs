// const values = [1,4,77,213,56,80,4,5,100];

// //const redVal = values.reduce((accumulator,currentvalue) => currentvalue)


// const maxValue = values.reduce((max,ele) => {
//     if(max>ele){
//         return max;
//     }
//     return ele;
// })

const students = [
    {
        Name:"Sam",
        Score:[90,89,80],
        Rollno : 405
    },
    {
        Name:"Guna",
        Score:[85,88,87],
        Rollno: 410
    },
    {
        Name:"Harry",
        Score:[100,91,70],
        Rollno:420
    },
    
    {
        Name:"Silly",
        Score:[79,90,60],
        Rollno : 401
    },
    {
        Name:"Mary",
        Score:[92,90,81],
        Rollno : 404
    }
    ]


const hiscore = arr =>{
    let sc = 0;
    for(let m of arr.Score){
        sc += m;
    }
    return sc;
}


const highroll= students.map(hiscore).reduce((acc,cv) => {
    if(acc>cv){return acc;}
    return cv;
})

// (reduce((roll,number) => {
//     if(roll>number){
//         return roll;
//     }
//     return number;

// })
