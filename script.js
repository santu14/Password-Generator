
//variables for button and check boxes
var generateBtn = document.querySelector("#generate");
var useUpperCase = document.getElementById("upper-case");
var useNumbers = document.getElementById("numbers");
var useSpecialCharacters = document.getElementById("special-characters");



//On click run logic
generateBtn.addEventListener("click", function () {

    var passwordlength = document.getElementById("password-length").value;

    //if password length meets our requirements we run our functions
    if (passwordlength > 7 && passwordlength < 128) {

        var password = "";

        //generate one random letter, number, or special character of each kind that has been selected and add to password
        function characterRandomizer() {
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
        

    
        //Run the generate password function for the legth of passwordlength
        //Note: If someone was to enter 8 as the length this would spit back 8 sets of characters of whatever type has been selected
        //If all the options were to be selected this would spit out 32 characters all one after the other
        function passwordGenerator(length) {

            for (i = 0; i < length; i++) {
                characterRandomizer();
            }

            var passwordText = document.querySelector("#password");

            //Here we split that large string of sequential characters into the correct legth and then shuffle these characters into the new password
            passwordText.value = password.substr(0, length).split('').sort(function () { return 0.5 - Math.random() }).join('');
        }

        //Run function and clear password
        passwordGenerator(passwordlength);
        password = "";

    //If password length requiremenths are not met alert the user and retun
    } else {

        alert("hey pal I said between 8 to 128...  try again... ")
        return;

    }

});


















