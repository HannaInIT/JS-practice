/**
 * Credit to https://adventofcode.com/ for this exercise

In the list below you have an array of numbers. The goal is to find the three numbers that add up to 2020.

Once you have found those numbers, multiply the numbers and store the result of that in the result variable.
 */


const list = [1721, 979, 366, 299, 675, 1456];
let result = 0;
const sum = 2020;
let found = false;

for (let i = 0; i < list.length; i++){
  for (let j = 1 + i; j < list.length; j++){
    for (let k = 1 + j; k < list.length; k++){

      const a = list[i];
      const b = list[j];
      const c = list[k];

      if ((a + b + c) === sum) {
        result = a * b * c;
        found = true;
        break;
      }
    }    
    if (found) break;
    
  }
  if (found) break;
  
}



// TEST CODE, do not change
console.assert(result === 241861950, `The result is not correct, it is ${result}, but should be 241861950`);