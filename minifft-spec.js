import { ComplexNumber, miniFFT } from './minifft.js';
const fft = new miniFFT(8);
let arr = [0,0,2,3,4,0,0,0];
const res = fft.analyze(arr);

const ans = [
  new ComplexNumber(9, 0),
  new ComplexNumber(-6.121320343559642,  -4.1213203435596455),
  new ComplexNumber(1.9999999999999996,  2.9999999999999996),
  new ComplexNumber(-1.8786796564403567, -0.12132034355964372),
  new ComplexNumber(3, -3.6739403974420594e-16),
  new ComplexNumber(-1.8786796564403576,  0.1213203435596415),
  new ComplexNumber(2.000000000000001,  -3.0000000000000004),
  new ComplexNumber(-6.121320343559644, 4.12132034355964)
]
const eps = 1e-8;
res.map((c, i) => {
  if (!c.eq(ans[i], eps)) {
    console.error(`Test failed: ${c} is not equal to ${ans[i]}.`);
    process.exit(1);
  }
});
console.log('All tests finished');

