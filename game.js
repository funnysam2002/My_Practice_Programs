let maximum=parseInt(prompt("Enter a maximum number"));
while(!maximum){
    maximum=parseInt(prompt("Enter a valid number..."));
}
const targetNum=parseInt(Math.floor(Math.random()*maximum)+1);
let userInput=prompt("Enter a number...(Type 'q' to quit)");
let attempts=1;

while(userInput!==targetNum){
    if(userInput=='q'){break;}
    userInput=parseInt(userInput);
    if (userInput>targetNum){
        userInput=prompt("The number is too big. Enter another number...");
        attempts++;
    }
    else if (userInput<targetNum){
        userInput=prompt("The number is too less. Enter another number...");
        attempts++;
    }
    else if(userInput===targetNum){break;}
    else{
        userInput=prompt("Invalid user. Enter a valid number...");
    }
}
if(userInput=='q'){
    alert("You gave your best");
}
else{alert(`You guessed it right! It took you ${attempts} guess(es)`);
}
