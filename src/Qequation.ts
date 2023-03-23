import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter the coefficient a: ', (aStr) => {
  const a = Number(aStr);
  if (isNaN(a)) {
    console.error('Invalid coefficient a');
    rl.close();
    return;
  }

  rl.question('Enter the coefficient b: ', (bStr) => {
    const b = Number(bStr);
    if (isNaN(b)) {
      console.error('Invalid coefficient b');
      rl.close();
      return;
    }

    rl.question('Enter the coefficient c: ', (cStr) => {
      const c = Number(cStr);
      if (isNaN(c)) {
        console.error('Invalid coefficient c');
        rl.close();
        return;
      }

      const discriminant = b * b - 4 * a * c;
      if (discriminant < 0) {
        console.log('No real roots');
      } else if (discriminant === 0) {
        const root = -b / (2 * a);
        console.log(`One real root: ${root}`);
      } else {
        const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        console.log(`Two real roots: ${root1}, ${root2}`);
      }

      rl.close();
    });
  });
});
