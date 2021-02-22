const caesar = function (string = "", shiftBy = 1) {
  let encodedString = "";
  for (let i = 0; i < string.length; i++) {
    const char = string.charCodeAt(i);
    if (shiftBy > 26) {
      shiftBy = shiftBy - Math.floor(shiftBy / 26) * 26;
    }
    if (char >= 65 && char <= 90) {
      if (char + shiftBy > 90) {
        encodedString += String.fromCharCode(64 + (char + shiftBy - 90));
      } else if (char + shiftBy < 65) {
        encodedString += String.fromCharCode(90 - (64 - (char + shiftBy)));
      } else {
        encodedString += String.fromCharCode(char + shiftBy);
      }
    } else if (char >= 97 && char <= 122) {
      if (char + shiftBy > 122) {
        encodedString += String.fromCharCode(96 + (char + shiftBy - 122));
      } else if (char + shiftBy < 97) {
        encodedString += String.fromCharCode(122 - (96 - (char + shiftBy)));
      } else {
        encodedString += String.fromCharCode(char + shiftBy);
      }
    } else {
      encodedString += String.fromCharCode(char);
    }
  }
  return encodedString;
};

console.log(caesar("D", -5));

module.exports = caesar;
