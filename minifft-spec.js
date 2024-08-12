import miniFFT from './minifft.js';
const fft = new miniFFT(8);
let arr = [0,0,2,3,4,0,0,0];
const res = fft.analyze(arr);
console.log(res);
console.log('res =' + res);
console.log('All tests finished');
