// Assignment Code
var generateBtn = document.querySelector("#generate");

var caseForm = document.createElement("form");
document.body.appendChild(caseForm);



var lowerArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specArr = ["\`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", "\\", "|", ";", ":", "\’", "\”", ",", "<", ".", ">", "/", "?"]

console.log(lowerArr, upperArr, numArr, specArr);

var YYY = {
  lowerArr,
  upperArr,
  numArr,
  specArr
}






var upperYN = confirm("Would you like uppercase letters in your password?");
var numYN = confirm("Would you like numbers in your password?");
var specYN = confirm("Would you like special characters? (i.e. ;?!$, etc.)");
var lengthQ = prompt("How long would you like your password to be? Please pick a number larger than 7 and less than 129.", 10);
var length = parseInt(lengthQ);

console.log(upperYN, numYN, specYN, length);

var passText = " Hello world";




//My code to generate the actual password

function generatePassword() {

    if (upperYN && numYN && specYN) {
      for (let i = 0; i < length; i++) {
        
        //const element = array[index];
        
      }
    }



  return passText;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());
