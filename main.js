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
function add(){
     if (counter === 0){enter(); return 0;} 
     else if (counter ===1){
        enter(); 
        total = addition(initialOperand, subsequentOperand);
        document.getElementById("operand").innerHTML = total;
        document.getElementById("number").innerHTML = "";
        console.log(initialOperand);
        return 0}
     else {
        enter();
        total = addition(initialOperand, subsequentOperand);
        document.getElementById("operand").innerHTML = total;
        document.getElementById("number").innerHTML = "";
        return 0;
     }
}


function enter(){
    if (counter === 0){ set(); return 0;}
    else if (counter === 1){
        setContinuous();
        console.log("first else if");
    }else{
        initialOperand = total;
        console.log("else")
        setContinuous();
    }
}

function setContinuous(){
    if (isUserInputFloat){
        subsequentOperand = userInputToFloat; 
        userInput.splice(0, userInput.length);
        counter++
        return 0;
    }
    subsequentOperand = userInputToInt;
    userInput.splice(0, userInput.length);
    counter++
    console.log(initialOperand,subsequentOperand);
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
    console.log(initialOperand, subsequentOperand);
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
} */

/*function add(){
    symbol = "+";
    if (counter === 0){enter(); return 0;}
    enter();
    total = addition(initialOperand,subsequentOperand);
    document.getElementById("number").innerHTML = total;
    
}

function enter(){
    /*if (counter === 0){
    setInitialOperand();
    reset();
    console.log(initialOperand, subsequentOperand);
    counter++;
    return 0;} 
    
    else if (counter === 1){
    setSubsequentOperand();
    reset();
    console.log("Am I showing?");
    counter++;
    }

    else{
        setInitialToSubsequent(total);
        setSubsequentOperand();
        reset();
        console.log(initialOperand, subsequentOperand);
    }
}*/


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

function setSubsequentOperand(){
    subsequentOperand = userInputToInt;
}

function reset(){
    userInput.splice(0, userInput.length);
}

function setInitialOperand(){
    initialOperand = userInputToInt;
}

function pushOne(){
    userInput.push("1");
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


/*

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

*/