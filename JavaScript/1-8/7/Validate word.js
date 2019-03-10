// validateWord=s=>Math.max(...(x=Object.values([...s.toLowerCase()].reduce((p,c)=>(p[c]=(p[c]||0)+1)&&p,{}))))==Math.min(...x);
// validateWord=s=>(x=Object.values([...s.toLowerCase()].reduce((p,c)=>(p[c]=(p[c]||0)+1)&&p,{})).sort())[0]==x[x.length-1];
validateWord=s=>!((z=s.toLowerCase()).length%new Set(z).size);

console.log(validateWord("abcabc"),true);
console.log(validateWord("abc123"),true);
console.log(validateWord("abc!abc!"),true);
console.log(validateWord("Abcabc"),true);
console.log(validateWord("abcabcd"),false);
console.log(validateWord("abc:abc"),false);