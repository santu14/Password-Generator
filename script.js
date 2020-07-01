var generateBtn = document.querySelector("#generate");

var passwordlength = document.getElementById("password-length").value;
var useUpperCase = document.getElementById("upper-case");
var useNumbers = document.getElementById("numbers");
var useSpecialCharacters = document.getElementById("special-characters");


console.log(useNumbers.value);

generateBtn.addEventListener("click",function(){
    passwordlength = document.getElementById("password-length").value;

    if (passwordlength > 7 && passwordlength < 128){
    
        var password = "";
    
        function generatePassword() {
            password += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
        
            if (useUpperCase.checked) {
                password += String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    
            } if (useNumbers.checked) {
                password += String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    
            } if (useSpecialCharacters.checked) {
                const specialCharacters = "!@#$%^&*-_=+<>?[]{};:,.|~";
                password += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
        
            }
            return password;
        }
        console.log(useNumbers);
    
        function writePassword(length) {
        
            for (i = 0; i < length; i++) {
                generatePassword();
            }
            
            var passwordText = document.querySelector("#password");
            passwordText.value = password.substr(0, length).split('').sort(function(){return 0.5-Math.random()}).join(''); 
        }
    
        writePassword(passwordlength);
        password = "";
    
    } else {
        alert("hey pal we said between 8 to 128 characters...  try again... ")
        return;
    }

});


















