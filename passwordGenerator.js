const stringGenerator = (stringLength, stringType) => {
  const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
  const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%&*";
  let availableChars = "";

  switch (stringType) {
      case "lowerCase":
          availableChars = lowerLetters;
          break;
      case "upperCase":
          availableChars = upperLetters;
          break;
      case "Numbers":
          availableChars = numbers;
          break;
      case "Symbols":
          availableChars = symbols;
          break;
      default:
          availableChars = "";
  }

  let result = "";
  for (let i = 0; i < stringLength; i++) {
      result += availableChars.charAt(Math.floor(Math.random() * availableChars.length));
  }
  return result;
};

const generatePassword = () => {
  const passwordLength = parseInt(document.getElementById('passwordLength').value, 10);
  const lowerCase = parseInt(document.getElementById('lowerCase').value, 10);
  const upperCase = parseInt(document.getElementById('upperCase').value, 10);
  const numberCount = parseInt(document.getElementById('numberCount').value, 10);
  const symbolCount = parseInt(document.getElementById('symbolCount').value, 10);
  const specialKey = document.getElementById('specialKey').value;

  let password = "";
  password += stringGenerator(lowerCase, "lowerCase");
  password += stringGenerator(upperCase, "upperCase");
  password += stringGenerator(numberCount, "Numbers");
  password += stringGenerator(symbolCount, "Symbols");
  
  // Add special key at the end if provided
  password += specialKey;

  // Shuffle the final password to ensure randomness
  password = password.split('').sort(() => 0.5 - Math.random()).join('');

  // Display the password
  document.getElementById('passwordOutput').textContent = password;
};
