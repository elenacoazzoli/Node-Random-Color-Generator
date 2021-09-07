/*
// Using two loops and taking out the break from the terminal
for (let i = 0; i < 3; i++) {
  let hashes = '';
  for (let j = 0; j < 31; j++) {
    hashes = hashes + '#';
  }
  console.log(hashes);
}
*/

const chalk = require('chalk');
const randomColor = require('randomcolor');

// const args = process.argv;
// console.log(args);

// console.log(color);

// console.log(colorText('TEST TEXT'));

// Using the String repeat method
const hash = '#';
const space = ' ';
let color;

// If I receive hue or luminosity, then I have to pass that input as argument to randomColor()
if (process.argv[2]) {
  color = randomColor({
    hue: process.argv[2],
  });
  if (process.argv[3]) {
    color = randomColor({
      hue: process.argv[2],
      luminosity: process.argv[3],
    });
  }
} else {
  color = randomColor();
}

const colorText = chalk.hex(color);
for (let i = 0; i < 3; i++) {
  console.log(colorText(hash.repeat(31)));
}
console.log(colorText(hash.repeat(5) + space.repeat(21) + hash.repeat(5)));
console.log(
  colorText(
    hash.repeat(5) + space.repeat(7) + color + space.repeat(7) + hash.repeat(5),
  ),
);
console.log(colorText(hash.repeat(5) + space.repeat(21) + hash.repeat(5)));
for (let i = 0; i < 3; i++) {
  console.log(colorText(hash.repeat(31)));
}
