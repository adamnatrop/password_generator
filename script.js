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


var password = "";

var randomArray = []; 

//var charCount = askUserCharPref();

var charNumber = "";





function askUserCharPref(){
  

  var characterCount = prompt("How many characters?");

  charNumber = parseInt(characterCount)
    if ( characterCount < 8 || characterCount > 128 ){

      alert("Please enter a number between 8 and 128")
      askUserCharPref();
    } 

    else {
      
      askUserLower();
    
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
  for (let i = 1; i <= charNumber; i++){
    
    var randomIndex = Math.floor(Math.random() * randomArray.length);
  
    //console.log(randomIndex);
  
    password += randomArray[randomIndex]
  
    console.log(password)

  }
  
}


function generatePassword(){
  
  askUserCharPref();

  
    
  return password
   
  
}


 //generatePassword();






// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
