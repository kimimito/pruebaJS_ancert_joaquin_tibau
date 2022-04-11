export default [
  { input: "six(times(five()))", expected: 30 },
  { input: "three(plus(nine()))", expected: 12 },
  { input: "seven(minus(one()))", expected: 6 },
  { input: "six(dividedBy(two()))", expected: 3 },
  { input: "four(times(six()))", expected: 24 },
  { input: "eight(dividedBy(five()))", expected: 1 },
  { input: "zero(dividedBy(one()))", expected: 0 },
  { input: "nine(plus(zero()))", expected: 9 }
].map((test) => ({
  ...test,
  exec: (solution) => {
      const [fn1, fn2, fn3] = test.input.split("(");
      return solution?.[fn1]?.(solution?.[fn2]?.(solution?.[fn3]?.()));
  }
}));
