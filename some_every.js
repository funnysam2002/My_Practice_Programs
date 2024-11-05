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
    ,
    {
        Name:"Mathew",
        Score:[67,77,87],
        Rollno : 390
    },
    {
        Name:"Marcus",
        Score:[50,60,60],
        Rollno : 416
    },
    {
        Name:"sera",
        Score:[88,90,75],
        Rollno : 440
    }
    ]


// //some method

// const someMet = students.some(s => s.Rollno%10 === 0)

//some method

const everyMet = students.every(s => s.Rollno%10 === 0)
