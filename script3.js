// Assignment Code
var generateBtn = document.querySelector("#generate");

//Password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
passwordText.value = password;};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Variables and arrays to be used
var UpperCharCodes = arrayCodes(65,90);
var LowerCharCodes = arrayCodes(97,122);
// ​var UpperCharCodes = arrayCodes(65,90);
var NumberCharCodes = arrayCodes(48,57);
var SpecialCharCodes = arrayCodes(33,47).concat(arrayCodes(58,64)).concat(arrayCodes(91,96)).concat(arrayCodes(123,126));

var choiceUpperCase = ""; 
var choiceLowerCase = ""; 
var choiceNum = ""; 
var choiceSpecialChar = "";


// Function for generating a password according to criterias user had picked 
function generatePassword(){
    var choiceLength = parseInt(prompt("Enter desired number of characters for Your password between 8 and 128"));
    if (choiceLength <= 7 || choiceLength >= 129 || isNaN(choiceLength))
 {    alert("Please choose a number between 8 and 128")
  }

  else{
 var choiceUpperCase = confirm("Would you like to add upper case letters? Yes or No "); 
 var choiceLowerCase = confirm("Would you like to add lower case letters? Yes or No ");
 var choiceNum = confirm("Would you like to add numbers? Yes or No ");
 var choiceSpecialChar = confirm("Would you like to add special characters? Yes or No ");

}

// Creating array of all character codes to randomly choose one each time 
    var charCodes=[];
    if (choiceSpecialChar) charCodes = charCodes.concat(SpecialCharCodes);  
    if (choiceLowerCase) charCodes = charCodes.concat(LowerCharCodes);
    if (choiceUpperCase) charCodes = charCodes.concat(UpperCharCodes);
    if (choiceNum) charCodes = charCodes.concat(NumberCharCodes);
    var passwordCharacter=[];
    for (let i=0; i < choiceLength; i++){
        var characterCode = charCodes[Math.floor(Math.random()*charCodes.length)];
        passwordCharacter.push(String.fromCharCode(characterCode));
    }
    return passwordCharacter.join("");
}

// Generating array from ASCII codes
function arrayCodes(min,max){
    var array = [];
    for ( let i = min; i <= max; i++){
        array.push(i);
    }
    return array;
}

