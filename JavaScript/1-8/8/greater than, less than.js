greaterThanLessThan=(a,b,c)=>a<b<c;

console.log(greaterThanLessThan(Number(null), 0, 1),true);
console.log(greaterThanLessThan(700000000001, 700000000002, -1),false);
console.log(greaterThanLessThan(-9, -8, 7),true);
console.log(greaterThanLessThan(-9, -8, -7),false);