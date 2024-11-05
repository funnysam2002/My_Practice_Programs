const students = [
    {
        Name:"Sam",
        Score:[90,89,80]
    },
    {
        Name:"Guna",
        Score:[85,88,87]
    },
    {
        Name:"Harry",
        Score:[100,91,70]
    }
    ]
    
// function printStudents(stu){
//     console.log("Student Name   Marks Scored");
//       for (let i of Object.keys(stu)){
//         console.log(`${i} scored ${stu[i]}`);
//       }
// }

const printStudents = students.map(stu =>( `${stu.Name} scored ${stu.Score}`))
