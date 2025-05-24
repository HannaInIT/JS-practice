/**
 * Credit to https://adventofcode.com/ for this exercise

In the list below you have an array of numbers. The goal is to find the two numbers that add up to 2020.

Once you have found those numbers, multiply the numbers and store the result of that in the result variable.
 */

const list = [1721, 979, 366, 299, 675, 1456];
const sum = 2020;
let result = 0;
let found = false;

for (let i = 0; i < list.length; i++) {
  for (let j = 1 + i; j < list.length; j++) {
    const a = list[i];
    const b = list[j];

    if (a + b === sum) {
      result = a * b;
      found = true;
      break;
    }
  }

  if (found) {
    break;
  }
}

// TEST CODE, do not change
console.assert(
  result === 514579,
  `The result is not correct, it is ${result}, but should be 514579`
);
