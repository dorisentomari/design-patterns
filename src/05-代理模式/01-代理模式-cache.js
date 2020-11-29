function multi(n) {
  if (n <= 1) {
    return 1;
  }
  return n * multi(n - 1);
}

function sum(n) {
  let result = 0;
  for (let i = 0; i < n; i++) {
    result += multi(n);
  }
  return result;
}

console.log(sum(20));
