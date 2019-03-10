multiply=(a,b)=>a*b;
multiply=(...n)=>n.reduce((p,c)=>p*c,1);

console.log(multiply(5, 6), 30);
console.log(multiply(7, 8), 56);
console.log(multiply(6, 6), 36);
console.log(multiply(3, 4), 12);
console.log(multiply(15, 10), 150);