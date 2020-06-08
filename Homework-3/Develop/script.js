var specialChars = ["@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", "."];
var numericChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCasedChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCasedCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function getPasswordOptions() {
  
  var passwordLength = parseFloat(prompt("How many characters would you like your password to contain?"));
    if (isNaN(passwordLength)) {
        alert("Please enter a number between 8 and 128."); 
      } else if (passwordLength < 8) {
        alert("You've entered a number less than 8. Please enter a number between 8 and 128.");
      } else if (passwordLength > 128) {
        alert("You've entered a number greater than 8. Please enter a number between 8 and 128."); 
      } else {
        var userSpecialCharactersOption = confirm("Would you like your password to contain special characters?");
        var userNumericCharactersOption = confirm("Would you like your password to contain numerals?");
        var userLowerCasedCharactersOption = confirm("Would you like your password to contain lower-cased letters?");
        var userUpperCasedCharactersOption = confirm("Would you like your password to contain upper-cased letters?");
        }
        
    if (userSpecialCharactersOption === false, userNumericCharactersOption === false, userLowerCasedCharactersOption === false, userUpperCasedCharactersOption === false) {
        alert("You must select at least one type of character for your password!");
        } 
         
        var passwordOptions = {
          length: passwordLength,
          hasSpecialCharacters: userSpecialCharactersOption,
          hasNumericCharacters: userNumericCharactersOption,
          hasLowerCasedCharacters: userLowerCasedCharactersOption,
          hasUpperCasedCharacters: userUpperCasedCharactersOption
        }
      return passwordOptions
}

/*   var minimumCount = 0;
  var minimumSpecialChars = "";
  var minimumNumericChars = "";
  var minimumLowerCasedChars = "";
  var minimumUpperCasedChars = "";
        
var characterTypes = {
  getSpecialChars: function() {
  return SpecialChars[Math.floor(Math.random() * specialChars.length)]
},
  getNumericChars: function() {
  return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
},
  getLowerCasedChars: function() {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
},
  getUpperCasedChars: function() {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
}
};

if (userSpecialCharactersOption === true) {
minimumSpecialChars = characterTypes.getSpecialChars(); minimumCount++;
}
if (userNumericCharactersOption === true) {
minimumNumericChars = characterTypes.getNumericChars(); minimumCount++;
}
if (userLowerCasedCharactersOption === true) {
minimumUpperCasedChars = characterTypes.getLowerCasedChars(); minimumCount++;
}
if (userUpperCasedCharactersOptions === true) {
minimumLowerCasedChars = characterTypes.getUpperCasedChars(); minimumCount++;
}

var generatePassword = "";

for (let i =0; i < (parseInt(passwordLength) - minimumCount); i++) {
  randomSelection = Math.floor(Math.random() * 4); generatePassword += randomSelection;
}

randomSelection += minimumSpecialChars;
randomSelection += minimumNumericChars;
randomSelection += minimumLowerCasedChars;
randomSelection += minimumUpperCasedChars; */

// Function to generate password with user input */
function generatePassword() {
  var options = getPasswordOptions();

  var result = [];

  //Complete your function here...
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);