// Assignment Code

var string = prompt("Enter the number of characters for desired password length");

if (string > 128) {
  
} else { alert("Password is too long")
  
}

var pass = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"


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
