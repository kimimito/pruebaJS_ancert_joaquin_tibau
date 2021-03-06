export default [
  { input: ["turn on 10,10 through 10,10"], expected: 1 },
  { input: ["turn on 0,0 through 999,999"], expected: 1000000 },
  { input: ["turn on 499,499 through 500,500"], expected: 4 },
  {
    input: ["toggle 0,0 through 999,0", "toggle 0,0 through 0,999"],
    expected: 1998
  },
  {
    input: [
      "turn on 489,959 through 759,964",
      "turn off 820,516 through 871,914",
      "turn off 427,423 through 929,502",
      "turn on 774,14 through 977,877",
      "turn on 410,146 through 864,337",
      "turn on 931,331 through 939,812",
      "turn off 756,53 through 923,339",
      "turn off 313,787 through 545,979",
      "turn off 12,823 through 102,934",
      "toggle 756,965 through 812,992",
      "turn off 743,684 through 789,958",
      "toggle 120,314 through 745,489",
      "toggle 692,845 through 866,994",
      "turn off 587,176 through 850,273",
      "turn off 674,321 through 793,388",
      "toggle 749,672 through 973,965",
      "turn on 943,30 through 990,907",
      "turn on 296,50 through 729,664",
      "turn on 212,957 through 490,987",
      "toggle 171,31 through 688,88"
    ],
    expected: 448325
  }
];
