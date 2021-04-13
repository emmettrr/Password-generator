// Assignment Code
var generateBtn = document.querySelector('#generate');
var random = ""
var newPass = "";


function generatePassword () {
  var string = prompt("Enter the number of characters for desired password length between 8 and 128.");
 

if (string < 8 || string > 128) {
  alert("That is an invalid number. Try again!")
  
}

if (string => 8 && string <= 128) {
  low = confirm("Do you want lower case letters within your password?")
  cap = confirm("Do you want capitalized letters in your password?")
  num = confirm("Do you want numbers in your password?")
  char = confirm("Do you want special characters in your password?")
  
  if (low == true) {
     charactersL = "abcdefghijklmnopqrstuvwxyz" }
    else {
       charactersL = ""
    }
    
    if (cap == true) {
      charactersUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" }
      else {
         charactersUp = ""
      }

      if (num == true) {
         numbers = "0123456789"}
        else {
           numbers = ""
        }

        if (char == true) {
           specChar = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~" }
          else {
             specChar = ""
          }
    
         //  if (char, num, cap, low != true) {
         // }else alert("You need to make a selection. Try again!")
          

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
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
