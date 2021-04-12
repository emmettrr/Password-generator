// Assignment Code

var string = prompt("Enter the number of characters for desired password length");

var pass = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

if (prompt <= 128) {
  (Math.pass() * 128) + 8;
}

for (let i = 0; i < string.length; i++) {
  const element = pass[i];
  
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
