// // Assignment Code
var generateBtn = document.querySelector("#generate");
// //Declare variables, objects and arrays to be used
// ​
// // Write password to the #password input
function writePassword() {
    console.log("Is this workin?!")
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
passwordText.value = password;};
// ​};
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var UpperCC = arrayCodes(65,90);
var LowerCharCodes = arrayCodes(97,122);
// ​var UpperCharCodes = arrayCodes(65,90);
var NumberCharCodes = arrayCodes(48,57);
var SpecialCharCodes = arrayCodes(33,47).concat(arrayCodes(58,64)).concat(arrayCodes(91,96)).concat(arrayCodes(123,126));

var choiceUpperCase = ""; 
var choiceLowerCase = ""; 
var choiceNum = ""; 
var choiceSpecialChar = "";


// var userChar = characterChoice();

function generatePassword(){
    console.log("Is this GP workin?!");
    var choiceLength = parseInt(prompt("Enter desired number of characters for Your password between 8 and 128"));
    if (choiceLength <= 7 || choiceLength >= 129 || isNaN(choiceLength))
 {    alert("Please choose a number between 8 and 128")
  }
//  else { var choiceUpperCase = confirm("Would you like to add upper case letters? Yes or No "); 
else{
 var choiceUpperCase = confirm("Would you like to add lower case letters? Yes or No "); 
 var choiceLowerCase = confirm("Would you like to add numbers? Yes or No ");
 var choiceNum = confirm("Would you like to add numbers? Yes or No ");
 var choiceSpecialChar = confirm("Would you like to add special characters? Yes or No ");


}

// function generatePassword(choiceLength, choiceUpperCase, choiceLowerCase, choiceNum, choiceSpecialChar){
    var charCodes=[];
    if (choiceSpecialChar) charCodes = charCodes.concat(SpecialCharCodes);  
    if (choiceLowerCase) charCodes = charCodes.concat(LowerCharCodes);
    if (choiceUpperCase) charCodes = charCodes.concat(UpperCC);
    if (choiceNum) charCodes = charCodes.concat(NumberCharCodes);
    var passwordCharacter=[];
    for (let i=0; i < choiceLength; i++){
        var characterCode = charCodes[Math.floor(Math.random()*charCodes.length)];
        passwordCharacter.push(String.fromCharCode(characterCode));
    }
    console.log(passwordCharacter.join(""));
    return passwordCharacter.join("");
}

function arrayCodes(min,max){
    var array = [];
    for ( let i = min; i <= max; i++){
        array.push(i);
    }
    return array;
}

