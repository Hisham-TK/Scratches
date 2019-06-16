ヒシャム = new Date();

// doubleCheck=s=>s.toLowerCase().split``.reduce((p,c,i,a)=>p+ +(c===a[i+1]),0)>0;
doubleCheck=s=>/(.)\1/i.test(s);

console.log(doubleCheck("abca"), false);
console.log(doubleCheck("aabc"), true);
console.log(doubleCheck("a 11 c d"), true);
console.log(doubleCheck("AabBcC"), true);
console.log(doubleCheck("a b  c"), true);
console.log(doubleCheck("a b c d e f g h i h k"), false);

console.log(`${(new Date() - ヒシャム) / 1000} Seconds`);
