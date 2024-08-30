const stringGenerator = (stringLength, Stringtype) => {
  let stringSize = Number(stringLength);
  let letters = [
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

  let alphabets = "";
  for (let i = 0; i < stringSize; i++) {
    if (Stringtype === "words") {
      alphabets += letters[i];
    }

    if (Stringtype === "numbers") {
      let numbersarray = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      alphabets += numbersarray[i];
    }
    if (Stringtype === "symbols") {
      let stringArray = ["!", "@", "#", "$", "%", "&", "*"];
      alphabets += stringArray[i];
    }
  }

  return alphabets;
};

const passwordGenerator = (
  passwordLength,
  symbolCount,
  numberCount,
  specialKey
) => {
  let passswordSize = Number(passwordLength);
  let symbolSize = Number(symbolCount);
  let numberSize = Number(numberCount);
  let userKey = String(specialKey);

  let a = stringGenerator(2, "words");
  let b = stringGenerator(numberSize, "numbers");
  let c = stringGenerator(symbolSize, "symbols");

  let password = a + b + c + userKey;
  return password;
};
/////////////////////////////////////////////////////////

let generatedPassword = passwordGenerator(3, 4, 2, 1);
console.log(generatedPassword, "generated password");
