// Assignment Code
var generateBtn = document.querySelector("#generate");

var caseForm = document.createElement("form");
document.body.appendChild(caseForm);

var upperCase = 










// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());
