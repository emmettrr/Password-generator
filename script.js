// Assignment Code
var generateBtn = document.querySelector('#generate');
var random = ""
var newPass = "";


//Function to generate random password

function generatePassword () {
  var pass = prompt("Enter the number of characters for desired password length between 8 and 128.")

   if (pass < 8 || pass > 128) {
   alert("That is an invalid number. Try again!")
   return generatePassword ();
   }
      if (isNaN(pass)) {
      return "You can only choose a number. Try again!"}

   if (pass => 8 && pass <= 128) {
      low = confirm("Do you want lower case letters within your password?")
      cap = confirm("Do you want capitalized letters in your password?")
      num = confirm("Do you want numbers in your password?")
      char = confirm("Do you want special characters in your password?")
   
      if (low === false && cap === false && num === false && char === false) {
         alert("You need to make a selection. Try again!");
         return generatePassword();
      }

      if (low == true) {
         charactersL = "abcdefghijklmnopqrstuvwxyz" 
      }
      else {
         charactersL = ""
      }
      
      if (cap == true) {
         charactersUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" 
      }
      else {
         charactersUp = ""
      }

      if (num == true) {
         numbers = "0123456789"
      }
      else {
         numbers = ""
      }

      if (char == true) {
         specChar = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~" 
      } 
      else {
         specChar = ""
      }
            

      random = (charactersL + charactersUp + numbers + specChar)

      for (let i = 0; i < pass; ++i) {
         newPass += random.charAt(Math.floor(Math.random() * random.length));
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