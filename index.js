const chalk = require('chalk');
const randomColor = require('randomcolor');

// Using the String repeat method
const hash = '#';
const space = ' ';

// If I receive hue or luminosity, then I have to pass that input as argument to randomColor()
const color = randomColor({
  hue: process.argv[2],
  luminosity: process.argv[3],
});

// Generate block of hashes displaying hex color
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
