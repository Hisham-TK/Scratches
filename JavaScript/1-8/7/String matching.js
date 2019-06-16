ヒシャム = new Date();

solve=(a,b)=>RegExp(`^${a.replace('*','.*')}$`).test(b);

console.log(solve("code*s","codewars"),true);
console.log(solve("codewar*s","codewars"), true);
console.log(solve("code*warrior","codewars"),false);
console.log(solve("c","c"),true);
console.log(solve("*s","codewars"),true);
console.log(solve("*s","s"), true);
console.log(solve("s*","s"),true);
console.log(solve("aa","aaa"), false);
console.log(solve("aa*","aaa"), true);
console.log(solve("aaa","aa"), false);
console.log(solve("aaa*","aa"), false);
console.log(solve("*","codewars"),true);

console.log(`${(new Date() - ヒシャム) / 1000} Seconds`);
