const sumAll = function (firstNum, secoundNum) {
  let smallNum;
  let bigNum;
  let sum = 0;

  const errorCheck =
    firstNum < 0 ||
    secoundNum < 0 ||
    typeof firstNum !== "number" ||
    typeof secoundNum !== "number";

  if (errorCheck) {
    return "ERROR";
  }

  if (firstNum < secoundNum) {
    smallNum = firstNum;
    bigNum = secoundNum;
  } else {
    smallNum = secoundNum;
    bigNum = firstNum;
  }

  for (let i = smallNum; i <= bigNum; i++) {
    sum += i;
  }
  return sum;
};

module.exports = sumAll;
