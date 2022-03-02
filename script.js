// Assignment Code

var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "/", ".", ",", "<", ">", ";", ":", "'", "~","[", "]", "{", "}"]
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var numeric = [1,2,3,4,5,6,7,8,9,0]

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword); { 
};

function generatePassword() {
  var password = []
  var cPassword = []
  var choiceMade = false

  let numberOfChars = prompt("How many characters did you want to have in the password?")

  function validateCharLength (i) {
    if (i < 8 || i > 128) {
      i = 0
      alert("Please enter a number between 8 and 128");
      return generatePassword()
    } 
    return numberOfChars
  }

  validateCharLength(numberOfChars);

  var isCapital = confirm("Do you want uppercase letters in it?")
    if (isCapital === true) {
    cPassword = cPassword.concat(upperCase)
    choiceMade = true
  }

  var isLowercase = confirm("Did you want lower case letters in it?")
    if (isLowercase === true) {
      cPassword = cPassword.concat(lowerCase)
      choiceMade = true
    }

  var isNumeric = confirm("How about numbers?")
    if (isNumeric === true) {
      cPassword = cPassword.concat(numeric)
      choiceMade = true
    }

  var isSpecialCharaters = confirm("Did you want special characters to be included in it?")
    if (isSpecialCharaters === true) {
      cPassword = cPassword.concat(specialChar)
      choiceMade = true
    }

  if (choiceMade === false) {
    alert("You didn't make any choices so the password is empty! click OK to start over!")
    return generatePassword();
  }

for (var i = 0; i < parseInt(numberOfChars); i++) {
  var random = Math.floor(Math.random()*cPassword.length);
  password +=cPassword[random]
}

return password
}