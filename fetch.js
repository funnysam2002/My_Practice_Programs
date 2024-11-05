fetch("https://swapi.dev/api/people/2/")

.then((res)=>{
    console.log("resolved",res);
    return res.json();   
})
.then((data)=>console.log("JSON DONE",data))
.catch((err)=>{
    console.log("error",err )
}) 