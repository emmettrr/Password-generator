// Assignment Code
var low = "abcdefghijklmnopqrstuvwxyz"
var cap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var num = "0123456789"
var char = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
var newPass = "";


function generatePassword () {
  var string = prompt("Enter the number of characters for desired password length between 8 and 128");
 

if (string < 8 || string > 128) {
  alert("That is an invalid number. Try again!")
  
}
if (string => 8 && string <= 128) {
  low = confirm("Do you want lower case letters within your password?")
} 

return newPass;
}






var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  console.log('writing password');
  var pass = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
