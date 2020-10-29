let generateBtn = document.querySelector("#generate");
// variables for password requirements
let lowercaseLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let uppercaseLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
let specialCharacters = [
  "!",
  "?",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "<",
  ">",
  "~",
  "`",
];
let numberCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// array for all characters
let allCharacters = [];

// assign length to prompt
let length = prompt(
  "How many characters would you like your password to be? Choose between 8 and 128 characters"
);

// will repeat prompt if length does not meet requirements.
while (isNaN(length) || length < 8 || length > 128)
  length = prompt(
    "Length must be 8-128 characters. How many characters would you like your password to be?"
  );

while (allCharacters.length === 0) {
  let uppercase = confirm("Would you like to use uppercase letters?");
  if (uppercase) {
    allCharacters.push(uppercaseLetters);
  }
  let lowercase = confirm("Would you like to use lowercase letters?");
  if (lowercase) {
    allCharacters.push(lowercaseLetters);
  }
  let numbers = confirm("Would you like to use numbers?");
  if (numbers) {
    allCharacters.push(numberCharacters);
  }
  let special = confirm("Would you like to use special characters?");
  if (special) {
    allCharacters.push(specialCharacters);
  }
  if (allCharacters.length === 0) {
    alert("choose at least one!");
  }
}

function generatePassword() {
  let password = "";

  for (let i = 0; i < length; i++) {
    let randomNumber = Math.floor(Math.random() * allCharacters.length);
    let tempArr = allCharacters[randomNumber];
    let randomNumber2 = Math.floor(Math.random() * tempArr.length);
    let newCharacter = tempArr[randomNumber2];

    password += newCharacter;
  }

  let textArea = document.getElementById("password");
  textArea.value = password;
}

generateBtn.addEventListener("click", generatePassword);
