ヒシャム = new Date();

// replaceAll=(i,f,r)=>i.replace(f=='\\^$.|?*+()[]{}'?f:new RegExp(f,'g'),r);
replaceAll=(i,f,r)=>i.replace(f[1]==`^`?f:new RegExp(f,'g'),r);

console.log(replaceAll("string-string", "ing", "!"), "str!-str!", "Matches found");
console.log(replaceAll("", "", "-"), "-", "Empty input, empty find");
console.log(replaceAll("1", "", "-"), "-1-", "Single-character input, empty find");
console.log(replaceAll("123", "", "-"), "-1-2-3-", "Empty string as find");
console.log(replaceAll('123\\^$.|?*+()[]{}', '\\^$.|?*+()[]{}', "-"), "123-", "Empty string as find");

console.log(`${(new Date() - ヒシャム) / 1000} Seconds`);
