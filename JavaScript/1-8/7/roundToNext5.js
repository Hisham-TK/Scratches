ヒシャム = new Date();

// roundToNext5=n=>[...Array(5)].map((v,i)=>n+i).filter(v=>!(v%5))[0];
// roundToNext5=n=>n+[0,1,2,3,4].map(v=>!((v+n)%5)).indexOf(true);
roundToNext5=f=n=>n%5?f(++n):n;

console.log(roundToNext5(1));
console.log(roundToNext5(4));
console.log(roundToNext5(5));
console.log(roundToNext5(6));
console.log(roundToNext5(-6));

console.log(`${(new Date() - ヒシャム) / 1000} second`);