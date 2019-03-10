century=y=>(y/100)%1?(y/100|0)+1:y/100;
century=(y,x=~~(y/100))=>y%100?++x:x;
century=(y,x=y/100|0)=>y%100?++x:x;
century=y=>Math.ceil(y/100);

console.log(century(1705), 18);
console.log(century(1900), 19);
console.log(century(1601), 17);
console.log(century(2000), 20);
console.log(century(89), 1);