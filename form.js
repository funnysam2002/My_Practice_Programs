const subForm = document.querySelector("form");
const input = document.querySelector("#dogName");
const list = document.querySelector("#dogs");
subForm.addEventListener('submit',function(e){
    e.preventDefault()
    const dogName = input.value;
    const newLi = document.createElement("li")
    newLi.innerText = dogName;
    console.log(newLi);
    dogs.append(newLi)
    input.value = "";
})