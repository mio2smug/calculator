//Let user input equal an array
let userInput = [];
let prevuserInputs = [];
let symbol = "";
let userInputToString;
let userInputToInt;
let userInputToFloat;
let isUserInputFloat = false;
let initialOperand ;
let subsequentOperand = 0;
let total ;
let counter = 0;

/*

function removeall(){
    userInput.splice(0, userInput.length);
    document.getElementById("number").innerHTML = userInput.join('');
    document.getElementById("neg").disabled = false;
    document.getElementById("float").disabled = false;
    isUserInputFloat = false;
    initialOperand = 0;
    subsequentOperand = 0;
    counter = 0;
    document.getElementById("operand").innerHTML = "";
}

*/

function remove(){
    userInput.pop();
    typeConversion();
    display();
}

function add(){
    symbol = "+";
    document.getElementById("operand").innerHTML = initialOperand + " " + symbol;
    document.getElementById("number").innerHTML = "";
}

function subtract(){
    symbol = "-";
    document.getElementById("operand").innerHTML = initialOperand + " " + symbol;
    document.getElementById("number").innerHTML = "";
}

function multiply(){
    symbol = "*";
    document.getElementById("operand").innerHTML = initialOperand + " " + symbol;
    document.getElementById("number").innerHTML = "";
}

function divide(){
    symbol = "÷";
    document.getElementById("operand").innerHTML = initialOperand + " " + symbol;
    document.getElementById("number").innerHTML = "";
}

function enter(){
    if (counter === 0){
    setInitialOperand();
    document.getElementById("operand").innerHTML = initialOperand;
    reset();
    document.getElementById("number").innerHTML = "";
    counter++
    } else {
        setSubsequentOperand();
        evaluate(symbol);
        document.getElementById("operand").innerHTML = "";
        document.getElementById("number").innerHTML = total;
        setInitialToTotal();
        reset();
    }
}

function evaluate(symbol){
    if(symbol === "+"){
        total = addition(initialOperand,subsequentOperand);
    } else if (symbol === "-"){
        total = subtraction(initialOperand,subsequentOperand);
    } else if (symbol === "*"){
        total = multiplication(initialOperand, subsequentOperand);
    } else if (symbol === "÷"){
        total = division(initialOperand, subsequentOperand);
    } else{return 0;}
}

function setInitialToTotal(){
    initialOperand = total;
}

function display(){
   if(isUserInputFloat){document.getElementById("number").innerHTML = userInputToFloat;return 0;} 
   else{
    document.getElementById("number").innerHTML = userInputToInt;
    return 0;
    }
}

function addition(x,y){
    return x+y;
}

function subtraction(x,y){
    return x - y;
}

function multiplication (x,y){
    return x*y;
}

function division (x,y){
    return x/y;
}

function setSubsequentOperand(){
    subsequentOperand = userInputToInt;;
}

function reset(){
    userInput.splice(0, userInput.length);
    userInputToInt = 0;
}

function setInitialOperand(){
    initialOperand = userInputToInt;
}

function pushOne(){
    userInput.push("1");
    typeConversion();
    display();
}

function pushTwo(){
    userInput.push("2");
    typeConversion();
    display();
}

function pushThree(){
    userInput.push("3");
    typeConversion();
    display();
}

function pushFour(){
    userInput.push("4");
    typeConversion();
    display();
}

function pushFive(){
    userInput.push("5");
    typeConversion();
    display();
}

function pushSix(){
    userInput.push("6");
    typeConversion();
    display();
}

function pushSeven(){
    userInput.push("7");
    typeConversion();
    display();
}

function pushEight(){
    userInput.push("8");
    typeConversion();
    display();
}

function pushNine(){
    userInput.push("9");
    typeConversion();
    display();
}

function pushZero(){
    userInput.push("0");
    typeConversion();
    display();
}

function typeConversion(){
    userInputToString = userInput.join('');
    if (!isUserInputFloat){ setUserInputToFloat();}
    setUserInputToInt();
}

function setUserInputToInt(){
    userInputToInt = parseInt(userInputToString);
    return 0;
}

function setUserInputToFloat(){
    userInputToFloat = parseFloat(userInputToString);
    return 0 ;
}

/*
function pushNegative(){
    userInput.push('-');
    document.getElementById("neg").disabled = "disabled";
    display();
}

function pushPeriod(){
    userInput.push('.');
    document.getElementById("float").disabled = "disabled";
    isUserInputFloat = true;
    display();
}*/

