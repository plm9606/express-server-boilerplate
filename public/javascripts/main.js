import '@babel/polyfill';
import { pi, power } from './lib';

console.log('main.js 입니다.');
console.log(pi);
console.log(power(pi, pi));

// polyfill이 필요한 코드
console.log(
  new Promise(resolve => {
    setTimeout(() => {
      resolve(1);
    }, 100);
  }),
);

console.log(Object({}, { x: 1 }, { y: 2 }));

console.log(Array.from([1, 2, 3], v => v + v));
