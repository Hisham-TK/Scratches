isDigit=s=>/^-?\d+(\.\d+)?$/.test(s);
isDigit=s=>s==parseFloat(s);

console.log(isDigit(""), false);
console.log(isDigit(" "), false);
console.log(isDigit("-0"), true);
console.log(isDigit("s2324"), false);
console.log(isDigit("-234.4"), true);
