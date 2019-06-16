ヒシャム = new Date();

// sequenceSum=(b,e,s)=>{for($=0;b<=e;b+=s)$+=b;return $};
sequenceSum=(b,e,s)=>eval('for($=0;b<=e;b+=s)$+=b;$')
sequenceSum=(b,e,s)=>b>e?0:(b+b+s*(s=(e-b)/s|0))*++s/2

console.log(sequenceSum(2,2,2), 2); // 2
console.log(sequenceSum(12,10,2), 2); // 2
console.log(sequenceSum(2, 6, 2), 12); // 2 + 4 + 6
console.log(sequenceSum(1, 5, 1), 15); // 1 + 2 + 3 + 4 + 5
console.log(sequenceSum(1, 5, 3), 5); // 1 + 4

console.log(`${(new Date() - ヒシャム) / 1000} Seconds`);
