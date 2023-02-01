//Let user input equal an array
let userInput = [];
let userInputToString;
let userInputToInt;
let userInputToFloat;
let isUserInputFloat = false;
let initialOperator ;
let subsequentOperator ; 

/*function clear(){
    userInput [0] = "0" ;
    display();
}*/

function remove(){
    userInput.pop();
    display();
}

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
}

function pushOne(){
    userInput.push("1");
    display();
}

function pushTwo(){
    userInput.push("2");
    display();
}

function pushThree(){
    userInput.push("3");
    display();
}

function pushFour(){
    userInput.push("4");
    display();
}

function pushFive(){
    userInput.push("5");
    display();
}

function pushSix(){
    userInput.push("6");
    display();
}

function pushSeven(){
    userInput.push("7");
    display();
}

function pushEight(){
    userInput.push("8");
    display();
}

function pushNine(){
    userInput.push("9");
    display();
}

function pushZero(){
    userInput.push("0");
    display();
}

function display(){
    userInputToString = userInput.join('');

   if(isUserInputFloat == true){
        userInputToFloat = parseFloat(userInputToString)
        document.getElementById("number").innerHTML = userInputToFloat;
        console.log("Here we are");
        return 0;
    } else{
    userInputToInt = parseInt(userInputToString);
    document.getElementById("number").innerHTML = userInputToInt;
    console.log("hello");
    return 0;}
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

