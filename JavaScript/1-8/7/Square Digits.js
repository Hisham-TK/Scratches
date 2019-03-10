squareDigits=n=>+`${n}`.replace(/./g,x=>x*x);

console.log(squareDigits(9119), 811181);
console.log(squareDigits(123456), 149162536);
