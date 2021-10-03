var generateBtn = document.querySelector("#generate");

var lowerLetters = "abcdefghijklmnopqrstuvwxyz"
var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
var symbols = "!@#$%^&*()_+"

var splitLowerLetters = lowerLetters.split("")
var splitUpperLetters = upperLetters.split("")
var splitLowerSymbols = symbols.split("")

var passwordLength
var pickedLowerLetters
var pickedUpperLetters
var pickedNumbers
var pickedSymbols


function generatePassword() {
  var character = []
  var password = []
  if (pickedNumbers) {
    character = character.concat(numbers)}

  if (pickedLowerLetters) { character = character.concat(splitLowerLetters) }
  if (pickedUpperLetters) { character = character.concat(splitUpperLetters) }
  if (pickedSymbols) { character = character.concat(splitLowerSymbols) }
  if (passwordLength !== undefined)
    console.log(passwordLength)
    for (i = 0; i < passwordLength; i++) {
      var randomCharacter = Math.floor(Math.random() * character.length);

      password = password.concat(character[randomCharacter])
    }
    return password;
}

function writePassword() {
  passwordLength = window.prompt("Please choose a password length (min 8 characters)")
  pickedLowerLetters = window.confirm("Confirm if you want lowercase letters")
  pickedUpperLetters = window.confirm("Confirm if you want uppercase letters")
  pickedNumbers = window.confirm("Confirm if you want numbers")
  pickedSymbols = window.confirm("Confirm if you want symbols")
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.textContent = password.join("");
}

generateBtn.addEventListener("click", writePassword);


