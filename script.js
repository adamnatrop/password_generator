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



//var characterCount = "";

//var newPassword = "";

//displays arrays in console 

// console.log(upperCase);
// console.log(lowerCase);
// console.log(symbols);
// console.log(numbers);


// stores a random character in the variable 
var randomUpperCaseLetter = randomUpperCase(upperCase);
//console.log(randomUpperCaseLetter);

var randomLowerCaseLetter = randomLowerCase(lowerCase);
//console.log(randomLowerCaseLetter);

var randomNumber = randomNumber(numbers);
//console.log(randomNumber);

var randomSymbol = randomSymbol(symbols);
//console.log(randomSymbol);



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



//prompt user for character count - store input into a global variable characterCount
//prompt user to use lowercase
    // if true add lowercase into empty array called randomArray
        //if false continue
//prompt user to use uppercase
    // if true add uppercase array into randomArray
        //if false continue
//prompt user to use numbers
    //if true add numbers array into randomArray
        // if false continue
//prompt user to use symbols
    //if true add symbols array into randomArray
        //if false continue

// run character count loop set by the user input stored in variable characterCount
  //each time the loop runs add one character pulled from the randomArray and store it in new variable newPassword
  // need to generate random index using the mathfloor mathrandom and add that to the string each time the loop runs


// if yes to lower add lowercase array to empty array
    // if no then dont add array
// if yes to upper add uppercase array to empty array
// if yes to symbols add symbols array to empty array 

// the new empty array will be the array the character count loop will pull characters from

// run a character count for loop based on user input number

// each time the loop runs add the result into an empty string value
//that string value will be the generated password














function generatePassword(){
  var password = "";

  var randomArray = []; // ask gary why this needs to be inside the function to work otherwise it gives concat error on first if statement

  askUser()

  function askUser(){
    var characterCount = prompt("How many characters?");
      if ( characterCount < 8 || characterCount > 128 ){
  
        alert("Please enter a number between 8 and 128")
        askUser();
      } 
    
      else {
     
      return characterCount
       }   
    
    }
  var includeLowerCase = confirm("Allow lower case characters?");
     if (includeLowerCase){
       var randomArray = randomArray.concat(lowerCase);
       console.log(randomArray);
     }       

  var includeUpperCase = confirm("Allow upper case characters?");      
    if (includeUpperCase){
      var randomArray = randomArray.concat(upperCase);
      console.log(randomArray);
    }
  var includeNumbers = confirm("Allow numbers?"); 
    if (includeNumbers){
      var randomArray = randomArray.concat(numbers);
      console.log(randomArray);
    }                     
 
  var includeSpecialCharacters = confirm("Allow special characters?"); 
    if (includeSpecialCharacters){
      var randomArray = randomArray.concat(symbols);
      console.log(randomArray);
    }
     
    console.log(characterCount)
    charCounter(characterCount);
    



    function charCounter(){
      for (let i = 1; i <= characterCount; i++){
        
        var randomIndex = Math.floor(Math.random() * randomArray.length);
      
        //console.log(randomIndex);
      
        password += randomArray[randomIndex]
      
        console.log(password)
      }
      
    }
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
