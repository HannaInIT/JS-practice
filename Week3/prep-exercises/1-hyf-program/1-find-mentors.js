import { modules, students, mentors, classes } from "./hyf.js";

/**
 * Tjebbe would like help to get a list of possible mentors for a module.
 * Fill in this function that finds all the mentors that can teach the given module.
 *
 * It should return an array of names. So something like:
 *  ['John', 'Mary']
 */

const possibleMentorsForModule = (moduleName) => {
  const result = [];

  for (let i = 0; i < mentors.length; i++) {
    const mentor = mentors[i];

    if (mentor.canTeach.includes(moduleName)) {
      result.push(mentor.name);
    }
  }

  return result;
};
// You can uncomment out this line to try your function
// console.log(possibleMentorsForModule('using-apis'));

/**
 * Tjebbe wants to make it even easier for himself.
 * Fill in this function that chooses a random mentor to teach the given module.
 *
 * It should return a single name.
 */
const findMentorForModule = (moduleName) => {
  const names = possibleMentorsForModule(moduleName);

  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
};
// You can uncomment out this line to try your function
console.log(findMentorForModule("javascript"));
