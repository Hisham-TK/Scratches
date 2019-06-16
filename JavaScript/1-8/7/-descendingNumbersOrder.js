ヒシャム = new Date();

descendingOrder=n=>+[...n+''].sort().reverse().join``;

console.log(descendingOrder(0), 0);
console.log(descendingOrder(1), 1);
console.log(descendingOrder(145263), 654321);
console.log(descendingOrder(123456789), 987654321);

console.log(`${(new Date() - ヒシャム) / 1000} Seconds`);
