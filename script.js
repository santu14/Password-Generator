var generateBtn = document.querySelector("#generate");

var passwordlength = prompt("How Long Should the password be? choose from 6 to 100 characters");
var useUpperCase = confirm("would you like to include uppercase letters?");
var useNumbers = confirm("would you like to include numbers?");
var useSpecialCharacters = confirm("would you like to include special characters?");
var userLowerCase = true;

var password = "";


parseInt(passwordlength);

const randomize = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    special: getRandomSpecial

};


function getRandomLower() {
    password += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
    password += String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
    password += String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSpecial() {
    const specialCharacters = "!@#$%^&*-_=+<>?[]{};:,.|~";
    password += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
}



function generatePassword() {

    randomize.lower();

    if (useUpperCase) {
        randomize.upper();

    } if (useNumbers) {
        randomize.number();

    } if (useSpecialCharacters) {
        randomize.special();

    }

}



function writePassword(length) {

    for (i = 0; i < length; i++) {
        generatePassword();
    }

    var passwordText = document.querySelector("#password");
    passwordText.value = password.substr(0, length).split('').sort(function(){return 0.5-Math.random()}).join('');

}


generateBtn.addEventListener("click", writePassword(passwordlength));
















