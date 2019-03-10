reverseSeq=n=>Array.from({length:n},(v,i)=>++i).reverse();
reverseSeq=n=>[...Array(++n).keys()].slice(1).reverse();
reverseSeq=n=>[...Array(n)].map((v,i)=>++i).reverse();

console.log(reverseSeq(5), [5, 4, 3, 2, 1]);
