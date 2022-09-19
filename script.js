// Assignment Code
var generateBtn = document.querySelector("#generate");
/* const alphaCharList = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"] */
/* const specialCharList = ["\ ","!","\""] */
const chars = {
  specialChar: "!@#$%^&*()_+~`|}{[]:;?><,./-=",
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  number: "1234567890"
}//Object containing strings of all password chars

var password;


let currentCharType;
const charGen = [
  function upperCase(){
    let index = Math.floor(Math.random() * chars.upperCase.length)
    currentCharType = "upper";
    let value = chars.upperCase.charAt(index);
    console.log(value)
    return value;
  },

  function lowerCase(){
    let index = Math.floor(Math.random() * chars.lowerCase.length)
    currentCharType = "lower";
    let value = chars.lowerCase.charAt(index);
    return value;
  },

  function specialChar(){
    let index = Math.floor(Math.random() * chars.specialChar.length)
    currentCharType = "special";
    let value = chars.specialChar.charAt(index);
    return value;
  },

  function number(){
    let index = Math.floor(Math.random() * chars.number.length)
    currentCharType = "number";
    let value = chars.number.charAt(index);
    return value;
  },
];

/* let upperYes;
let specialYes;
let numberYes;
let passLength; */
//made truthy on affirmative prompt
var genPassword = "";
var upperYes;
var specialYes;
var numberYes;
var lowerYes = "y";
var passwordLength;

function generatePassword(){
  upperYes = prompt("Use uppercase characters? \n\ny/n");
  specialYes = prompt("Use special characters?\n\ny/n");
  numberYes = prompt("Use numbers?\n\ny/n");
  lowerYes = "y";

  function lengthCheck(){
    console.log("length-check");
    let passLength = prompt("How long would you like your password to be?\n\nPlease enter a number between 8-128");
    console.log(passLength);

    if(isNaN(passLength)||passLength<=7||passLength>=129&&passLength!=null){
      lengthValid = false;
      alert("You entered an invalid password length!");
      return;
    }
    else{
      return passLength;
    };
  };

  passwordLength = lengthCheck();
  if(passwordLength == null){
    alert("Operation canceled, please begin again.");
    return;
  };
  
  genMath();
 
}

function genMath(){
  
  while(genPassword.length<passwordLength){

  console.log("loop");

  function charToAdd(){
    
    let rdmFunc = charGen[Math.floor(Math.random() * charGen.length)];

    return rdmFunc();

  }
  let newChar = charToAdd();
  console.log(newChar);
  if(currentCharType=="upper"&&upperYes=="y"){
    genPassword += newChar;
  }
  else if(currentCharType=="number"&&numberYes=="y"){
    genPassword += newChar;
  }
  else if(currentCharType=="special"&&specialYes=="y"){
    genPassword += newChar;
  }
  else if(currentCharType=="lower"&&lowerYes=="y"){
    genPassword += newChar;
  }
  
  console.log(genPassword);
}
password = genPassword; //assign generated password to global password
return;
};

function writePassword() {
  generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
