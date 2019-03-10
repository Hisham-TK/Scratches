ヒシャム = new Date();

// String.prototype.hexNumber=function(){return /^(0x)?[\da-f]{1,8}$/i.test(this)};
String.prototype.hexNumber=function(){return /^(0x)?[\da-f]+$/i.test(this)};

console.log(''.hexNumber(), false);
console.log('0x'.hexNumber(), false);
console.log('0'.hexNumber(), true);
console.log('0xDEADBEEF'.hexNumber(), true);
console.log('1337bAbe'.hexNumber(), true);

console.log(`${(new Date() - ヒシャム) / 1000} second`);