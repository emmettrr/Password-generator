// Assignment Code
var pass = "abcdefghijklmnopqrstuvwxyz"
var low = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var num = "0123456789"
var char = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

var string = prompt("Enter the number of characters for desired password length between 8 and 128");

if (string > 8 || string > 128) {
  
} else { prompt ("That is an invalid number. Try again!")
  
}



var generateBtn = document.querySelector('#generate');
function generatePassword() {
  return;
}

// Write password to the #password input
function writePassword() {
  console.log('writing password');
  var pass = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
