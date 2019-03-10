d = new Date();

digPow=(n,p)=>(r=[...n+''].reduce((t,c)=>t+(+c)**p++,0)/n)%1?-1:r;

console.log(digPow(89, 1), 1);
console.log(digPow(92, 1), -1);
console.log(digPow(695, 2), 2);
console.log(digPow(46288, 3), 51);

console.log(`${(new Date() - d) / 1000} second`);