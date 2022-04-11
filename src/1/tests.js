export default [
  { input: [1, 2, 3, 3, 2, 1, 4], expected: 4 },
  {
    input: [null, 3, 4, 1, 0, 4, 0, 1, null, 3, 8],
    expected: 8
  },
  {
    input: [9, -23, 0, 5, 9, null, 48, "", 3, 0, "", 48, -23, 3, 5],
    expected: null
  },
  { input: [0], expected: 0 },
  {
    input: [
      "nine",
      -12,
      18,
      -1,
      -1,
      23,
      24,
      35,
      "nine",
      35,
      undefined,
      0,
      undefined,
      24,
      0,
      18,
      23
    ],
    expected: -12
  },
  {
    input: [
      false,
      true,
      "car",
      1,
      "truck",
      null,
      0,
      null,
      false,
      0,
      true,
      "truck",
      1
    ],
    expected: "car"
  }
];
