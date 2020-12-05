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

// function to prompt user for password options
function generatePasswordCriteria() {
  let passwordLength = parseInt(
    prompt(
      "How many charaters would you like your password to be? (must be bewteen 8-128 characters"
    )
  );

  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    passwordLength = parseInt(
      prompt("Password must be a number and between 8-128 characters")
    );
  }

  let hasSpecialCharacters = confirm("Do you want special characters?");
  let hasLowerCaseCharacters = confirm("Do you want lowercase characters?");
  let hasUpperCaseCharacters = confirm("Do you want uppercase letters?");
  let hasNumbers = confirm("Do you want numbers?");

  if (
    hasSpecialCharacters === false &&
    hasLowerCaseCharacters === false &&
    hasUpperCaseCharacters === false &&
    hasNumbers === false
  ) {
    alert("Must select at least one character type");
    return;
  }

  // object to store user input
  let passwordOptions = {
    passwordLength: passwordLength,
    hasSpecialCharacters: hasSpecialCharacters,
    hasLowerCaseCharacters: hasLowerCaseCharacters,
    hasUpperCaseCharacters: hasUpperCaseCharacters,
    hasNumbers: hasNumbers,
  };
  return passwordOptions;
}

// function for getting a random element from an array
function getRandom(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  let randomElement = arr[randomIndex];
  return randomElement;
}

// function to generate password with user input
function generatePassword() {
  let options = generatePasswordCriteria();
  // variable to store password as it's being concatenated
  let result = [];
  // arr to store types of characters to include in password
  let possibleCharacters = [];
  // arr to contain one of each type of chosen charatcer to ensure each will be used
  let guaranteedCharacters = [];

  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    // push new random special character to guaranteedCharacters
    guaranteedCharacters.push(getRandom(specialCharacters));
  }

  if (options.hasLowerCaseCharacters) {
    possibleCharacters = possibleCharacters.concat(lowercaseLetters);
    guaranteedCharacters.push(getRandom(lowercaseLetters));
  }

  if (options.hasUpperCaseCharacters) {
    possibleCharacters = possibleCharacters.concat(uppercaseLetters);
    guaranteedCharacters.push(getRandom(uppercaseLetters));
  }

  if (options.hasNumbers) {
    possibleCharacters = possibleCharacters.concat(numberCharacters);
    guaranteedCharacters.push(getRandom(numberCharacters));
  }

  // For loop to iterate over the password length from the options object, selecting random indices from the array of possible characters and concatenating those characters into the result variable
  for (let i = 0; i < options.passwordLength; i++) {
    let possibleCharacter = getRandom(possibleCharacters);
    result.push(possibleCharacter);
  }

  // mix in at least one of each guaranteed character in the result
  for (let i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }
  // transform the result into a string and pass into writePassword
  return result.join("");
}

let generateBtn = document.getElementById("generate");

function writePassword() {
  let password = generatePassword();
  let passwordText = document.getElementById("password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
