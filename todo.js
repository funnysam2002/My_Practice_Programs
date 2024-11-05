let input = prompt("What do you want to do..");
const todo = ["watering plants","studying"];

while(input !== "quit" && input !== "q"){
    if(input === "list"){
        console.log("*********");
        for(let i=0;i<todo.length;i++){
            console.log(`${i} : ${todo[i]}`);
        }
        console.log("********");
    }
    else if(input === "new"){
        let newToDo=prompt("Enter your Todo");
        todo.push(newToDo);
        console.log(`${newToDo} added to the list`);
    }
    else if(input === "delete"){
        let index = parseInt(prompt("Enter the index you want to delete"));
        if(!Number.isNaN(index)){
            let deleteToDo=todo.splice(index,1);
            console.log(`Deleted ${deleteToDo}`);
        }
        else{
            console.log("Invalid index");
        }
        
    }
    input=prompt("What do you want to do..")
}
console.log("quit the app")
