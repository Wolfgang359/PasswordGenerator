// Assignment Code
var generateBtn = document.querySelector("#generate");

var caseForm = document.createElement("form");
document.body.appendChild(caseForm);



var x = "abcdefghijklmnopqrstuvwxyz" .split(" ");
var y = "0123456789" .split(" "); 
var x1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" .split(" ");
var z = ["\`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", "\\", "|", ";", ":", "\’", "\”", ",", "<", ".", ">", "/", "?"]


console.log(z)
console.log(y)






// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());
