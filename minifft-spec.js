import { ComplexNumber, miniFFT } from './minifft.js';

const testCases = [{
  s: 8,
  q: [0, 0, 2, 3, 4, 0, 0, 0],
  a: [
    [9, 0],
    [-6.121320343559642,  -4.1213203435596455],
    [1.9999999999999996,  2.9999999999999996],
    [-1.8786796564403567, -0.12132034355964372],
    [3, -3.6739403974420594e-16],
    [-1.8786796564403576,  0.1213203435596415],
    [2.000000000000001,  -3.0000000000000004],
    [-6.121320343559644, 4.12132034355964]
  ]
}];

testCases.forEach(t => {
  const eps = 1e-8;
  const fft = new miniFFT(t.s);
  const res = fft.analyze(t.q);
  res.map((c, i) => {
    const a = new ComplexNumber(t.a[i][0], t.a[i][1]);
    if (!c.eq(a, eps)) {
      console.error(`Test failed: ${c} is not equal to ${a}.`);
      process.exit(1);
    }
  });
});
console.log('All tests finished');
