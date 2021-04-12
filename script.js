// Assignment Code
var lowLet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var upLet = "abcdefghijklmnopqrstuvwxyz"
var num = "0123456789"
var spec = "!@#$%^&*"

var generateBtn = document.querySelector('#generate');
function generatePassword() {
  return 'yourpassword';
}
// Write password to the #password input
function writePassword() {
  console.log('writing password');
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);