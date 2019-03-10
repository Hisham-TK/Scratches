amIWilson=p=>!(([...Array(p-1)].reduce((p,c,i)=>p*++i,1)+1)/(p*p)%1);

console.log(amIWilson(5), true);
console.log(amIWilson(9), false);
console.log(amIWilson(6), false);