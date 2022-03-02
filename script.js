// These arrays are the seperate collections of character types used in the project
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "/", ".", ",", "<", ">", ";", ":", "'", "~","[", "]", "{", "}"]
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var numeric = [1,2,3,4,5,6,7,8,9,0]

// This variable gets the button from the HTML and allows us to add to it much easier

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// This tells the writePassword function to start once the "generate password" button is clicked on
generateBtn.addEventListener("click", writePassword); { 
};

// This is the main function that does the entire process of making the password

function generatePassword() {
  // These variables are all necessary for this specific function so they all fit within this local scope
  var password = []
  var cPassword = []
  var choiceMade = false

  let numberOfChars = prompt("How many characters did you want to have in the password?")

// This function checks to make sure the length requested is within the permitted parameters

  function validateCharLength (i) {
    if (i < 8 || i > 128) {
      i = 0
      alert("Please enter a number between 8 and 128");
      return generatePassword()
    } 
    return numberOfChars
  }

  // This calls the above function on the users input to make sure it fits within the parameters

  validateCharLength(numberOfChars);

  // These variables are what asks the user what kind of characters they want and also put the specific array into a bigger array which the function later uses to make the password

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

    // This if statement checks to make sure a character type was selected and if not then it tells the user and restarts the process

  if (choiceMade === false) {
    alert("You didn't make any choices so the password is empty! click OK to start over!")
    return generatePassword();
  }

// This is what actually takes the combined character types the user selected and makes them into the password

for (var i = 0; i < parseInt(numberOfChars); i++) {
  var random = Math.floor(Math.random()*cPassword.length);
  password +=cPassword[random]
}

return password
}