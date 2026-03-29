// Function

function syMyName(){
console.log("R");
console.log("I");
console.log("T");
console.log("E");
console.log("S");
console.log("H"); 
}

// syMyName()

// function addTeoNummbers(number1,number2){
//     console.log(number1+number2)
// }


function addTeoNummbers(number1,number2){
    // let result=number1+number2
    // return result;
    return number1+number2;
    
}

 addTeoNummbers(3,4);


 function loginUserMessage(username="sam"){
    if(username === undefined){
        console.log("please enter a username")
        return 
    }
    return `${username}just logged in`
 }
//  console.log(loginUserMessage("Ritesh "));
  console.log(loginUserMessage("Ritesh "));