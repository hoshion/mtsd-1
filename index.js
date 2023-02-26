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


function main() {

}
main();
