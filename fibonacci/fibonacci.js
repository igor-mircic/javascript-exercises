const fibonacci = function (n) {
  if (typeof n === "string") n = parseInt(n);
  if (n < 0) return "OOPS";
  if (n === 0) return 0;

  //   let f = [1, 1];

  let a = 1;
  let b = 1;

  for (let i = 2; i < n; i++) {
    const tmp = b;
    b = a + b;
    a = tmp;
    // f[i + 1] = f[i] + f[i - 1];
  }
  return b;
};

module.exports = fibonacci;
