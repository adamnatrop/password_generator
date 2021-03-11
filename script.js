// Assignment Code
var generateBtn = document.querySelector("#generate");

var letters = "abcdefghijklmnopqrstuvwxyz";
var allNumbers = "0123456789"
var allSymbols = "!@#$%^&*()"

// creates array from string values above
var symbols = allSymbols.split("");
var numbers = allNumbers.split("");
var lowerCase = letters.split("");

// converts lowercase letters to uppercase letters
var upperCase = lowerCase.map(lower => lower.toUpperCase());

//displays arrays in console 

// console.log(upperCase);
// console.log(lowerCase);
// console.log(symbols);
// console.log(numbers);


// stores a random character in the variable 
var randomUpperCaseLetter = randomUpperCase(upperCase);
console.log(randomUpperCaseLetter);

var randomLowerCaseLetter = randomLowerCase(lowerCase);
console.log(randomLowerCaseLetter);

var randomNumber = randomNumber(numbers);
console.log(randomNumber);

var randomSymbol = randomSymbol(symbols);
console.log(randomSymbol);



// Selects random item from the given array 
function randomNumber (numbers){
  return numbers[Math.floor(Math.random()*numbers.length)];
}

function randomLowerCase (lowerCase){
  return lowerCase[Math.floor(Math.random()*lowerCase.length)];
}

function randomUpperCase (upperCase){
  return upperCase[Math.floor(Math.random()*upperCase.length)];
}

function randomSymbol (symbols){
  return symbols[Math.floor(Math.random()*symbols.length)];
}

//Check to make sure functions work properly

// console.log(randomNumber(numbers));
// console.log(randomLowerCase(lowerCase));
// console.log(randomUpperCase(upperCase));
// console.log(randomSymbol(symbols));








// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
