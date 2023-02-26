const fs = require('fs');

function solveEquation(a, b, c) {
  const discriminant = (-b) ** 2 - 4 * a * c;

  const equationString = `(${a})*x^2 + (${b})*x + (${c}) = 0`;
  console.log(equationString);
  if (discriminant < 0) {
    console.log(`There are 0 roots`);
  } else if (discriminant === 0) {
    const x = -b / (2 * a);
    console.log(`There are 1 root x = ${x.toFixed(2)}`);
  } else {
    const discriminant = (-b) ** 2 - 4 * a * c;
    const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    console.log(`There are 2 roots x1 = ${x1.toFixed(2)} x2 = ${x2.toFixed(2)}`);
  }
}

function checkPath() {
  return !!process.argv[2];
}

function readFile() {
  const file = fs.readFileSync(process.argv[2]).toString();
  const firstLine = file.split(/\r?\n/)[0];
  if (!firstLine) {
    throw new Error('There is no line or separator on the first line');
  }
  console.log(firstLine)
  const numbers = firstLine.split(/\s+/).map((s) => +s);
  console.log(numbers)
  if (numbers.some((n) => isNaN(n)) || numbers[0] === 0 || numbers.length !== 3) {
    throw new Error('There are wrong numbers in the file');
  }
  solveEquation(...numbers);
}

function main() {
  try {
    if (checkPath()) {
      readFile();
    } else {

    }
  } catch (e) {
    console.log(e.message);
  }
}
main();
