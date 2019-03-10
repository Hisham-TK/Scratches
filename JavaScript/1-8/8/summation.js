summation=n=>[...Array(++n).keys()].reduce((p,c)=>p+c);
summation=n=>n*++n/2;

console.log(summation(1), 1);
console.log(summation(8), 36);