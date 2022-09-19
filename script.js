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



const charGen = [
  function upperCase(){
    return chars.upperCase[Math.floor(Math.random * chars.upperCase.length)];
  },

  function lowerCase(){
    return chars.lowerCase[Math.floor(Math.random * chars.lowerCase.length)];
  },

  function specialChar(){
    return chars.specialChar[Math.floor(Math.random * chars.specialChar.length)];
  },

  function number(){
    return chars.number[Math.floor(Math.random * chars.number.length)];
  },
];

/* let upperYes;
let specialYes;
let numberYes;
let passLength; */
//made truthy on affirmative prompt

function generatePassword(){
  let upperYes = prompt("Use uppercase characters? \n\ny/n");
  let specialYes = prompt("Use special characters?\n\ny/n");
  let numberYes = prompt("Use numbers?\n\ny/n");
  let passwordLength;

  function lengthCheck(){
    console.log("length-check");
    let passLength = prompt("How long would you like your password to be?\n\nPlease enter a number between 8-128");

    if(isNaN(passLength)||passLength<=7||passLength>=129&&passLength!=null){
      lengthValid = false;
      alert("You entered an invalid password length! Please re-enter");
      lengthCheck();
    }
    else if(passLength == null){
      alert("You have canceled, please begin again.");
    }
    else{
      passwordLength = passLength;
    };
  }

  lengthCheck();
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
