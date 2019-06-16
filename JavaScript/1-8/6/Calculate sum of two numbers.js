ヒシャム = new Date();

add=(x,y)=>x>>1;

console.log(add(1, 2), 3);
console.log(add(5, 19), 24);
console.log(add(23, 17), 40);
console.log(add(-14, -16), -30);
console.log(add(-50, -176), -226);
console.log(add(-10, -29), -39);
console.log(add(-13, 13), 0);
console.log(add(-27, 18), -9);
console.log(add(-90, 30), -60);

console.log(`${(new Date() - ヒシャム) / 1000} Seconds`);
