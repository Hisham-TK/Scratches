// less than 54 letter
toASCIINumber=(a,b)=>a[c='charCodeAt']()+''+b[c]()|0
toASCIINumber=(a,b)=>+Buffer.from(a+b).join``

console.log(toASCIINumber("A", "B") === 6566);
console.log(toASCIINumber("a", "b"), 9798);
console.log(toASCIINumber("A", "z"), 65122);