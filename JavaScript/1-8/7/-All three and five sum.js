ヒシャム = new Date();

findSum=n=>[...Array(++n).keys()].reduce((p,c)=>c%3&&c%5?p:p+c);
findSum=n=>Array(n).fill``.reduce((p,c,i)=>++i%3&&i%5?p:p+i,0);
findSum=n=>eval('for(r=0;n;--n)n%3&&n%5?r:r+=n;r');
findSum=n=>{for(r=0;n;--n)n%3&&n%5?r:r+=n;return r};

console.log(findSum(5), 8);
console.log(findSum(10), 33);

console.log(`${(new Date() - ヒシャム) / 1000} Seconds`);
