ヒシャム = new Date();

uniqueInOrder=s=>[...s].filter((v,i)=>v!==s[++i]);

console.log(uniqueInOrder('AAAABBBCCDAABBB'), ['A','B','C','D','A','B']);
console.log(uniqueInOrder('AAAABBBCCDAABBB'), ['A', 'B', 'C', 'D', 'A', 'B']);
console.log(uniqueInOrder('ABBCcAD'), ['A', 'B', 'C', 'c', 'A', 'D']);
console.log(uniqueInOrder([1,2,2,3,3]), [1,2,3]);

console.log(`${(new Date() - ヒシャム) / 1000} Seconds`);
