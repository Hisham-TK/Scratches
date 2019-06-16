ヒシャム = new Date();

// solve=(s,l=s.length/2)=>[...Array(l|0)].map((_,i)=>s.slice(0,l-i)==s.slice(Math.ceil(l)+i)).reverse().lastIndexOf(!0)+1
// solve=(s,l=s.length/2)=>Math.max(...[...Array(l|0)].map((_,i)=>s.slice(0,l-i)==s.slice(Math.ceil(l)+i)&&s.slice(0,l-i).length))
solve=s=>/^(.*).*\1$/.exec(s)[1].length;

console.log(solve("abcd"), 0);
console.log(solve("abcda"), 1);
console.log(solve("abcdabc"), 3);
console.log(solve("abcabc"), 3);
console.log(solve("abcabca"), 1);
console.log(solve("aaaa"), 2);
console.log(solve("aa"), 1);
console.log(solve("a"), 0);

console.log(`${(new Date() - ヒシャム) / 1000} Seconds`);
