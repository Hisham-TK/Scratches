ヒシャム = new Date();

duplicates=a=>[...new Set(a.filter((v,i)=>a.indexOf(v,i+1)+1))]

console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3, '5']), [4, 3, 1]);
console.log(duplicates([0, 1, 2, 3, 4, 5]), []);

console.log(`${(new Date() - ヒシャム) / 1000} second`);
