// Assignment Code
var generateBtn = document.querySelector('#generate');
var random = ""
var newPass = "";


function generatePassword () {
  var string = prompt("Enter the number of characters for desired password length between 8 and 128");
 

if (string < 8 || string > 128) {
  alert("That is an invalid number. Try again!")
  
}
if (string => 8 && string <= 128) {
  low = confirm("Do you want lower case letters within your password?")
  cap = confirm("Do you want capitalized letters in your password?")
  num = confirm("Do you want numbers in your password?")
  char = confirm("Do you want special characters in your password?")
  
  if (low == true) {
    var charactersL = "abcdefghijklmnopqrstuvwxyz" }
    else {
      var charactersL = ""
    }
    
    if (cap == true) {
      var charactersUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" }
      else {
        var charactersUp = ""
      }

      if (num == true) {
        var numbers = "0123456789"}
        else {
          var numbers = ""
        }


        if (char == true) {
          var specChar = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~" }
          else {
            var specChar = ""
          }
    
          random = (charactersL + charactersUp + numbers + specChar)

    for (let i = 0, n = random.length; i < string; ++i) {
    newPass += random.charAt(Math.floor(Math.random() * n));
    
    }





  }
 

return newPass;
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
