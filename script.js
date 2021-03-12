// Assignment Code
var generateBtn = document.querySelector("#generate");

var letters = "abcdefghijklmnopqrstuvwxyz";
var allNumbers = "0123456789"
var allSymbols = "!@#$%^&*()"

// creates array from string values above
var symbols = allSymbols.split("");
var numbers = allNumbers.split("");
var lowerCase = letters.split("");
var upperCase = lowerCase.map(lower => lower.toUpperCase());  // converts lowercase letters to uppercase letters

// function results are stored in these variables
var password = "";
var randomArray = []; 
var parsNumber = "";




// ask the user how many charcters to include in password

function askUserCharPref(){
  
  var characterCount = prompt("How many characters?");

  parsNumber = parseInt(characterCount)

    if ( parsNumber < 8 || parsNumber > 128 || isNaN(parsNumber) ){

      alert("Please enter a number between 8 and 128")
      askUserCharPref();
    } 

    else {
      
      askUserLower(); // This sends the user to the next prompt
     }   
  }


function askUserLower(){
  
  var includeLowerCase = confirm("Allow lower case characters?");

  if (includeLowerCase){
    randomArray = randomArray.concat(lowerCase);
    console.log(randomArray);

    askUserUpper();
  
  }else {
    askUserUpper();
  } 
}

function askUserUpper(){
  var includeUpperCase = confirm("Allow upper case characters?");      
    if (includeUpperCase){
       randomArray = randomArray.concat(upperCase);
      console.log(randomArray);

      askUserNumbers();

    }else {
      askUserNumbers();
    }
}


function askUserNumbers(){
  var includeNumbers = confirm("Allow numbers?"); 
  if (includeNumbers){
     randomArray = randomArray.concat(numbers);
    console.log(randomArray);

    askUserSymbols();

  } else{
    askUserSymbols();
  }                    
}

function askUserSymbols(){
  var includeSpecialCharacters = confirm("Allow special characters?"); 
  if (includeSpecialCharacters){
     randomArray = randomArray.concat(symbols);
    console.log(randomArray);

    charCounter();

  }else {
    charCounter();
  }
}


function charCounter(){
  for (let i = 1; i <= parsNumber; i++){
    
    var randomIndex = Math.floor(Math.random() * randomArray.length);
  
    password += randomArray[randomIndex]
  
   

  }  
}


function generatePassword(){
  
  askUserCharPref();
  
  return password
   
  
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
