export default [
  { input: [1, 2, 3], expected: 2 },
  { input: [1, 2, [2, 4]], expected: 2 },
  {
    input: [1, 2, "3 doors down"],
    expected: 2
  },
  { input: [0.4, "1.6"], expected: 1 },
  {
    input: [0.4, [1, [2, 4, 6, [8, 9]]]],
    expected: 1.73125
  },
  {
    input: [1, 2, 3, ["3", ["2 doors", 9, ["1.6"]]]],
    expected: 2.4
  },
  {
    input: [5, 9, 4, [12, 10, ["12", 14, [16, 16, 16]]]],
    expected: 7.5
  },
  { input: [], expected: 0 }
].map((test) => ({
  ...test,
  exec: () => test.input.average?.() 
}));
