//Destructing arrays

// const scores = [151,232,431,567,890]

// const [nick,olie,kiddo]=scores.map(x =>{
//     if(x>200){
//         return x;
//     }
// }).sort()
// const s = scores.map(x=>{
//     if(x>200){
//         return x;
//     }
// })


//destructing objects

// const person = {
//     name:"Harry",
//     lastName:"Potter",
//     house:"Gryffindor",
//     details: function (){
//         return(`${this.name} ${this.lastName} is from the house of ${this.house}`);
//     } ,
//     born:1997,
//     school:"Hogwards",
//     parents:"James and Lily Potter"
// }

// const {name,lastName,born:birthYear,school:university} = person;


//destructing params

// const students = [
//     {
//         Name:"Sam",
//         Score:[90,89,80],
//         Rollno : 405
//     },
//     {
//         Name:"Guna",
//         Score:[85,88,87],
//         Rollno: 410
//     },
//     {
//         Name:"Harry",
//         Score:[100,91,70],
//         Rollno:420
//     },
    
//     {
//         Name:"Silly",
//         Score:[79,90,60],
//         Rollno : 401
//     },
//     {
//         Name:"Mary",
//         Score:[92,90,81],
//         Rollno : 404
//     }
//     ,
//     {
//         Name:"Mathew",
//         Score:[67,77,87],
//         Rollno : 390
//     },
//     {
//         Name:"Marcus",
//         Score:[50,60,60],
//         Rollno : 316
//     },
//     {
//         Name:"sera",
//         Score:[88,90,75],
//         Rollno : 340
//     }
//     ]

// const gg = students.filter(({Rollno}) => Rollno>350)
