sd=x=>+(x+'').replace(/./g,x=>x*x);

console.log(sd(0), 0);
console.log(sd(1111), 1111);
console.log(sd(3212), 9414);
console.log(sd(2112), 4114);
console.log(sd(159),12581);
console.log(sd(77455754),4949162525492516);
console.log(sd(99999999),8181818181818181);