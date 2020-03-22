// Assignment Code
var generateBtn = document.querySelector("#generate");

//variables for password characters
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacters = ['!', '?', '@', '#', '$', '%', '^', '&', '*', '(', ')', '<', '>', '~', '`'];
var numberCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

//array for all characters
var allCharacters = [];

//assign length to prompt
var length = Number(prompt("How many characters would you like your password to be? Choose between 8 and 128 characters"));

// will repeat prompt if length does not meet requirements.
while (isNaN(length) || length < 8 || length > 128)
    length = Number(prompt("Length must be 8-128 characters. How many characters would you like your password to be?"));

//alert user they must select at least one character
while (allCharacters.length === 0) {
    var uppercase = confirm("Would you like to use uppercase letters?");
    if (uppercase) {
        allCharacters.push(uppercaseLetters);
    }
    var lowercase = confirm("Would you like to use lowercase letters?");
    if (lowercase) {
        allCharacters.push(lowercaseLetters);
    }
    var numbers = confirm("Would you like to use numbers?");
    if (numbers) {
        allCharacters.push(numberCharacters);
    }
    var special = confirm("Would you like to use special characters?");
    if (special) {
        allCharacters.push(specialCharacters);
    }
    if (allCharacters.length === 0) {
        alert("choose at least one!");
    }

}

//function to generatePassword
function generatePassword() {
    var password = "";

    for (var i = 0; i < length; i++) {
        var randomNumber = Math.floor(Math.random() * allCharacters.length);
        var tempArr = allCharacters[randomNumber];
        var randomNumber2 = Math.floor(Math.random() * tempArr.length);
        var newCharacter = tempArr[randomNumber2];

        password += newCharacter;
    }

    console.log(password);

    var textArea = document.getElementById("password");
    textArea.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
