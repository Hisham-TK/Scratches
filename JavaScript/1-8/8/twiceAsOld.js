ヒシャム = new Date();

twiceAsOld=(d,s)=>Math.abs(d-(d-s)*2);

console.log(twiceAsOld(36, 7), 22);
console.log(twiceAsOld(55, 30), 5);
console.log(twiceAsOld(42, 21), 0);
console.log(twiceAsOld(22, 1), 20);
console.log(twiceAsOld(29, 0), 29);

console.log(`${(new Date() - ヒシャム) / 1000} Seconds`);
