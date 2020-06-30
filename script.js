var generateBtn = document.querySelector("#generate");


var passwordlength = parseInt(prompt("How Long Should the password be? choose from 8 to 128 characters"));
// var useUpperCase = document.;
// var useNumbers = 
// var useSpecialCharacters = 


if (passwordlength > 7 && passwordlength < 128){

   
   
    var useUpperCase = confirm("would you like to include uppercase letters?");
    var useNumbers = confirm("would you like to include numbers?");
    var useSpecialCharacters = confirm("would you like to include special characters?");
    var userLowerCase = true;
    
    var password = "";
    
    
 
    
    function generatePassword() {
        password += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    
        if (useUpperCase) {
            password += String.fromCharCode(Math.floor(Math.random() * 26) + 65);

        } if (useNumbers) {
            password += String.fromCharCode(Math.floor(Math.random() * 10) + 48);

        } if (useSpecialCharacters) {
            const specialCharacters = "!@#$%^&*-_=+<>?[]{};:,.|~";
            password += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
    
        }
    
    }
    
    
    function writePassword(length) {
    
        for (i = 0; i < length; i++) {
            generatePassword();
        }
        console.log(password);
        
        var passwordText = document.querySelector("#password");
        passwordText.value = password.substr(0, length).split('').sort(function(){return 0.5-Math.random()}).join('');
    
        

    }

    

} else {
    alert("hey pal we said between 8 to 128 characters...  try again... ")
    location.reload();
}


generateBtn.addEventListener("click",function(){writePassword(passwordlength);});
















