let num1 = parseFloat(prompt("Enter your first number"));
let num2 = parseFloat(prompt("Enter your second number"));

let operation = prompt("Enter the operator");

switch(operation){
    case "+":
        console.log(num1+num2);
        break;
    case "-":
        console.log(num1-num2);
        break;
    case "*":
        console.log(num1*num2);
        break;
    case "/":
        console.log(num1/num2);
        break;
    case "%":
        console.log(num1%num2);
        break;
}