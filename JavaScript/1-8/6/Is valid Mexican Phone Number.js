ヒシャム = new Date();

// isValidMXPhoneNumber=n=>!(n.replace(/[^()]/g,'').length%2)&&/^\(?5[56]\)?( ?\d\d){3}$/.test(n);
isValidMXPhoneNumber=n=>/^((5[56])|\(5[56]\))( ?\d\d){3}$/.test(n);

console.log(isValidMXPhoneNumber('(56) 84 65 52'), true);
console.log(isValidMXPhoneNumber('99956485'), false);
console.log(isValidMXPhoneNumber('abcdefgh'), false);
console.log(isValidMXPhoneNumber('(56) 84 6 552'), false);

console.log(`${(new Date() - ヒシャム) / 1000} Seconds`);
