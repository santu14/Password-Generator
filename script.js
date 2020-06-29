var generateBtn = document.querySelector("#generate");

var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = lowerCase.toUpperCase();
var numbers = "0123456789";
var specialCharacters ="!@#$%^&*-_=+<>?[]{};:,.|~";

var passwordlength = prompt("How Long Should the password be? choose from 6 to 100 characters");
var useUpperCase = confirm("would you like to include uppercase letters?");
var useNumbers = confirm("would you like to include numbers?");
var useSpecialCharacters = confirm("would you like to include special characters?");

var password = " ";

var randomstring = Math.random().toString(36).slice(-passwordlength);

var selectedCharacters = lowerCase;



function characterSelector(){

  if (useUpperCase && useNumbers && useSpecialCharacters){
    selectedCharacters += upperCase + numbers + specialCharacters;
  
  } else if (!useUpperCase && useNumbers && useSpecialCharacters) {
    selectedCharacters += numbers +specialCharacters;

  } else if (!useUpperCase && !useNumbers && useSpecialCharacters){

    selectedCharacters += specialCharacters;

  }  else if (useUpperCase && useNumbers && !useSpecialCharacters){
    selectedCharacters += upperCase + numbers;

  } else if (useUpperCase && !useNumbers && !useSpecialCharacters){
    selectedCharacters += upperCase;

  }else if (!useUpperCase && useNumbers && !useSpecialCharacters){
    selectedCharacters += numbers;

  }else if (useUpperCase && !useNumbers && useSpecialCharacters){
    selectedCharacters += upperCase + specialCharacters;

  }

  return selectedCharacters;
}


function generatePassword(length){

  for(i = 0; i < length; i++){
    password += selectedCharacters.charAt(Math.floor(Math.random() * selectedCharacters.length));
  
  }
  return password;
}

  

function writePassword() {
  characterSelector();
  generatePassword(passwordlength);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


generateBtn.addEventListener("click", writePassword);




console.log(passwordlength);
console.log(selectedCharacters);
console.log(password);
console.log(randomstring);
