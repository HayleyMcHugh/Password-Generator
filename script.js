var generateBtn = document.querySelector("#generate");

var lowerLetters = "abcdefghijklmnopqrstuvwxyz"
var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = [1,2,3,4,5,6,7,8,9,0]
var symbols = "'!@#$%^&*()_+"

var splitLowerLetters = lowerLetters.split("")
var splitUpperLetters = upperLetters.split("")
var splitLowerSymbols = symbols.split("")

var all = []
var character = []
var password = []

var passwordLength = window.prompt("Please choose a password length (min 8 characters)")
var pickedLowerLetters = window.prompt("Confirm if you want lowercase letters (yes/no)")
var pickedUpperLetters = window.prompt("Confirm if you want uppercase letters (yes/no)")
var pickedNumbers = window.prompt("Confirm if you want numbers (yes/no)")
var pickedSymbols = window.prompt("Confirm if you want symbols (yes/no)")

if (passwordLength.length)
for (i = 0; i < passwordLength; i++) {
  var randomCharacter = character[Math.floor(Math.random() * character.length)];

  password.push(randomCharacter)  
}

if (pickedNumbers) {
  character = character.concat(numbers)}
  if (pickedLowerLetters){character=character.concat(splitLowerLetters)}
  if (pickedUpperLetters){character=character.concat(splitUpperLetters)}
  if (pickedSymbols){character=character.concat(splitLowerSymbols)}

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

generateBtn.addEventListener("click", writePassword);
