//Let user input equal an array
let userInput = [];
let prevuserInputs = [];
let userInputToString;
let userInputToInt;
let userInputToFloat;
let isUserInputFloat = false;
let initialOperand ;
let subsequentOperand ;
let symbol = "";
let counter = 0;

/*function add(){
    if (isUserInputFloat) {initialOperator = userInputToFloat;}
    if (!isUserInputFloat) {initialOperator = userInputToInt;}
    symbol = "+"
    console.log(addition(initialOperator, 2.1 ));
}

function subtract(){
    symbol = "-"
    console.log(symbol);
}

function multiply(){
    symbol = "*"
    console.log(symbol);
}

function divide(){
    symbol = "/"
    console.log(symbol);
}*/



/*What should happen when this function calls?
user has already inputed a number
when user presses enter

*/

/*function enter(){
     (isUserInputFloat){
        initialOperand = userInputToFloat;
        document.getElementById("operand").innerHTML = initialOperand;
        userInput.splice(0, userInput.length);
        document.getElementById("number").innerHTML = userInput.join('');
        return 0;
    }
    initialOperand = userInputToInt;
    document.getElementById("operand").innerHTML = initialOperand;
    userInput.splice(0, userInput.length);
    document.getElementById("number").innerHTML =  userInput.join('');
    return 0;
}*/

/*when user enters, counter will be at 0 by default, this means that it will go to set
function where it will set our initial Operator. Lets test using console log = Working.


*/

function add(){
    if (counter === 0){ enter();return 0;}
    setContinuous();
    document.getElementById("number").innerHTML = addition(initialOperand,subsequentOperand);
    
}

function enter(){
    if (counter === 0){ set(); return 0;}
    else{
        setContinuous();
    }
}

function setContinuous(){
    if (isUserInputFloat){subsequentOperand = userInputToFloat; return 0;}
    subsequentOperand = userInputToInt;
    return 0;
}

function set (){
    if (isUserInputFloat){ 
        initialOperand = userInputToFloat; 
        document.getElementById("operand").innerHTML = initialOperand;
        userInput.splice(0, userInput.length);
        document.getElementById("number").innerHTML =  userInput.join('');
        counter++;
        return 0;
    }
    initialOperand = userInputToInt; 
    document.getElementById("operand").innerHTML = initialOperand;
    userInput.splice(0, userInput.length);
    document.getElementById("number").innerHTML =  userInput.join('');
    counter++
    return 0;
}



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
   if(isUserInputFloat){
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

