const stringGenerator = (stringLength, stringType) => {
  let stringSize = Number(stringLength);
  let lowerLetters = [
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
  let upperLetters = [
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
  let alphabet = "";
  for (let i = 0; i < stringSize; i++) {
    if (stringType === "true") {
      alphabet += upperLetters[i];
      alphabet?.toLowerCase();
    }
    if (stringType === "true") {
      alphabet += lowerLetters[i];
      alphabet?.toUpperCase();
    }
    if (stringType === "true") {
      let numbersarray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
      alphabet += numbersarray[i];
    }
    if (stringType === "true") {
      let symbolsArray = ["!", "@", "#", "$", "%", "&", "*"];
      alphabet += symbolsArray[i];
    }
    if (stringType === "true") {
      let arr = ["apple", "mango", "apple", "orange", "mango", "mango"];

      function removeDuplicates() {
        let unique = [];
        arr.forEach((ele) => {
          if (!unique.includes(ele)) {
            unique.push(element);
          }
        });
        return unique;
      }
      console.log(removeDuplicates());
  }
  return alphabet;
};
}

const passwordGenerator1 = (
  passwordLength,
  lowerCase,
  upperCase,
  uniqueCharacters,
  numberCount,
  symbolCount,
  specialKey
) => {
  let passwordSize = Number(passwordLength);
  let lowercaseLength = Number(lowerCase);
  let uppercaseLength = Number(upperCase);
  let numberSize = Number(numberCount);
  let uniqueCharacterslength = Number(uniqueCharacters);
  let symbolSize = Number(symbolCount);
  let specialkeyLength = String(specialKey);

  let a = stringGenerator(lowercaseLength, "lowerCase");
  let b = stringGenerator(uppercaseLength, "upperCase");
  let c = stringGenerator(numberSize, "Numbers");
  let d = stringGenerator(symbolSize, "Symbols");
  let e = stringGenerator(uniqueCharacterslength, "uniqueCharacters");
  let f = stringGenerator(passwordSize,"passwordLength");
  let g = stringGenerator(specialkeyLength,"specialKey");

  let password=a+b+c+d+e+f+specialKey;
  return password;
};
///////////////////////////////////////////////////////////////////////////////////////////

let generatedPassword = passwordGenerator1(3,4,2,2,1)
console.log(generatedPassword,"generatedPassword")