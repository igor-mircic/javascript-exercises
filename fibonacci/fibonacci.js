const fibonacci = function (n) {
  if (typeof n === "string") n = parseInt(n);
  if (n < 0) return "OOPS";
  if (n === 0) return 0;

  let a = 1;
  let b = 1;

  for (let i = 2; i < n; i++) {
    const tmp = b;
    b = a + b;
    a = tmp;
  }
  return b;
};

module.exports = fibonacci;
