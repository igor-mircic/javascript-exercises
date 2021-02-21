const palindromes = function (string = "") {
  // * Conver to lower case, remove sapces, and punctuation * //
  string = string.toLowerCase(); // Convert to lower case
  string = string.split(" ").join(""); // Remove spaces
  const punctRE = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g; // regx for punctuation
  string = string.replace(punctRE, ""); // remove punctuation

  // * Reverse string * //
  let reversedString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  // * Check if string is palindrom * //
  return string === reversedString ? true : false;
};

module.exports = palindromes;
