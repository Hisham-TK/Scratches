distinct=a=>[...new Set(a)];

console.log(distinct([1]), [1]);
console.log(distinct([1,2]), [1,2]);
console.log(distinct([1,1,2]), [1,2]);
console.log(distinct([1,1,2,2,3]), [1,2,3]);