// Assignment Code
var generateBtn = document.querySelector("#generate");

var caseForm = document.createElement("form");
document.body.appendChild(caseForm);


const lowerArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const specArr = ["\`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", "\\", "|", ";", ":", "\’", "\”", ",", "<", ".", ">", "/", "?"]

console.log(lowerArr, upperArr, numArr, specArr);

const YYY = {
  1: lowerArr,
  2: upperArr,
  3: numArr,
  4: specArr
}

const YYN = {
  1: lowerArr,
  2: upperArr,
  3: numArr
}

const YNN = {
  1: lowerArr,
  2: upperArr
}

const YNY = {
  1: lowerArr,
  2: upperArr,
  3: specArr
}

const NYY = {
  1: lowerArr,
  2: numArr,
  3: specArr
}

const NYN = {
  1: lowerArr,
  2: numArr
}

const NNY = {
  1: lowerArr,
  2: specArr
}

const NNN = {
  1: lowerArr
}

//My code to generate the actual password

function generatePassword() {
  var passText = " ";
  
  var upperYN = confirm("Would you like uppercase letters in your password?");
  var numYN = confirm("Would you like numbers in your password?");
  var specYN = confirm("Would you like special characters? (i.e. ;?!$, etc.)");
  var lengthQ = prompt("How long would you like your password to be? Please pick a number larger than 7 and less than 129.", 15);
  while (lengthQ >= 129 || lengthQ <= 7) {
    alert("You didn't pick a valid number. Pick again.")
    lengthQ = prompt("How long would you like your password to be? Please pick a number larger than 7 and less than 129.", 15);
  }
  var lengthOf = parseInt(lengthQ);

  console.log(upperYN, numYN, specYN, lengthOf);

  if (upperYN && numYN && specYN) {
    for (let i = 0; i < lengthOf; i++) {
      passText = realGeneration();

      function realGeneration() {
        var x = Math.floor(Math.random() * 4) + 1;
        var y = Math.floor(Math.random() * 32);
        var newText = (YYY[x][y]);

        if (newText === undefined) {
          realGeneration();
        } else {
          passText = passText + newText;
        }
        return passText;
      }

      console.log(passText);
    }
  } else if (upperYN && numYN && specYN === false) {
    for (let i = 0; i < lengthOf; i++) {
      passText = realGeneration();

      function realGeneration() {
        var x = Math.floor(Math.random() * 3) + 1;
        var y = Math.floor(Math.random() * 32);
        var newText = (YYN[x][y]);

        if (newText === undefined) {
          realGeneration();
        } else {
          passText = passText + newText;
        }
        return passText;
      }

      console.log(passText);
    }
  } else if (upperYN && numYN === false && specYN === false) {
    for (let i = 0; i < lengthOf; i++) {
      passText = realGeneration();

      function realGeneration() {
        var x = Math.floor(Math.random() * 3) + 1;
        var y = Math.floor(Math.random() * 32);
        var newText = (YNN[x][y]);

        if (newText === undefined) {
          realGeneration();
        } else {
          passText = passText + newText;
        }
        return passText;
      }

      console.log(passText);
    }
  } else if (upperYN && numYN === false && specYN) {
    for (let i = 0; i < lengthOf; i++) {
      passText = realGeneration();

      function realGeneration() {
        var x = Math.floor(Math.random() * 3) + 1;
        var y = Math.floor(Math.random() * 32);
        var newText = (YNY[x][y]);

        if (newText === undefined) {
          realGeneration();
        } else {
          passText = passText + newText;
        }
        return passText;
      }

      console.log(passText);
    }
  } else if (upperYN === false && numYN && specYN) {
    for (let i = 0; i < lengthOf; i++) {
      passText = realGeneration();

      function realGeneration() {
        var x = Math.floor(Math.random() * 3) + 1;
        var y = Math.floor(Math.random() * 32);
        var newText = (NYY[x][y]);

        if (newText === undefined) {
          realGeneration();
        } else {
          passText = passText + newText;
        }
        return passText;
      }

      console.log(passText);
    }
  } else if (upperYN === false && numYN && specYN === false) {
    for (let i = 0; i < lengthOf; i++) {
      passText = realGeneration();

      function realGeneration() {
        var x = Math.floor(Math.random() * 2) + 1;
        var y = Math.floor(Math.random() * 32);
        var newText = (NYN[x][y]);

        if (newText === undefined) {
          realGeneration();
        } else {
          passText = passText + newText;
        }
        return passText;
      }

      console.log(passText);
    }
  } else if (upperYN === false && numYN === false && specYN) {
    for (let i = 0; i < lengthOf; i++) {
      passText = realGeneration();

      function realGeneration() {
        var x = Math.floor(Math.random() * 2) + 1;
        var y = Math.floor(Math.random() * 32);
        var newText = (NNY[x][y]);

        if (newText === undefined) {
          realGeneration();
        } else {
          passText = passText + newText;
        }
        return passText;
      }

      console.log(passText);
    }
  } else if (upperYN === false && numYN === false && specYN === false) {
    for (let i = 0; i < lengthOf; i++) {
      passText = realGeneration();

      function realGeneration() {
        var x = Math.floor(Math.random() * 1) + 1;
        var y = Math.floor(Math.random() * 32);
        var newText = (NNN[x][y]);

        if (newText === undefined) {
          realGeneration();
        } else {
          passText = passText + newText;
        }
        return passText;
      }

      console.log(passText);
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
generateBtn.addEventListener("click", writePassword)
