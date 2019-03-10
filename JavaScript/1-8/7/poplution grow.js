nbYear=(f,c,a,p,y=0)=>f>=p?y:nbYear(f+f*c/100+a,c,a,p,++y);

console.log(nbYear(1500, 5, 100, 5000), 15);
console.log(nbYear(1500000, 2.5, 10000, 2000000), 10);
console.log(nbYear(1500000, 0.25, 1000, 2000000), 94);