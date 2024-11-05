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


const totalScore = arr => {
      let sum1=0;
      for(mark of arr.Score){
        sum1+=mark;
      }
      return sum1

}    

 const farr= students.filter(s => totalScore(s)>=260);