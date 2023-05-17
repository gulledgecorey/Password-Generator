// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specialCharacters = "!@#$%-?";
  var numbers = "0123456789";
  var characterBase = "";
  var password = "";
  var length = prompt("choose length between 8-128 characters");
  if (length < 8|| length > 128) {
    alert("Must choose between 8-128 characters!");
    return generatePassword();
  }
  if (confirm("would you like to have lowercase letters?")) {
    characterBase += lowercaseLetters;
  }
  if (confirm("Would you to have uppercase letters?")) {
    characterBase += uppercaseLetters;
  }
  if (confirm("Would you like to have special characters?")) {
    characterBase += specialCharacters;
  }
  if (confirm("Would you like to have numbers?")) {
    characterBase += numbers;
  }
  if (characterBase.length < 1) {
    alert("Must choose at least one character type");
    return generatePassword();
  }
  for (let i = 0; i < length; i++) {
    password += characterBase.charAt(Math.floor(Math.random()*characterBase.length));
   
  }
  return password;
}
