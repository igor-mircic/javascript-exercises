const palindromes = function (string = "") {
  // * Conver to lower case, remove sapces, and punctuation * //
  string = string.toLowerCase().replace(/[^A-Za-z]/g, "");

  // * Reverse string * //
  reversedString = string.split("").reverse().join("");

  // * Check if string is palindrom * //
  return string === reversedString ? true : false;
};

module.exports = palindromes;
