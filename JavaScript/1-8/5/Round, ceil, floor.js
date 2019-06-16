ヒシャム = new Date();

Math.floor=n=>n|0;
Math.round=n=>0.5+n|0;
Math.ceil=n=>n%1?++n|0:n;


console.log(Math.round(0.4), 0);
console.log(Math.round(19.9999), 20);
console.log(Math.round(0.5), 1);
console.log(Math.ceil(0.4), 1);
console.log(Math.ceil(7.5), 8);
console.log(Math.ceil(7.0), 7);
console.log(Math.ceil(0.5), 1);
console.log(Math.floor(0.4), 0);
console.log(Math.floor(0.5), 0);

console.log(`${(new Date() - ヒシャム) / 1000} Seconds`);
