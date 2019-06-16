ヒシャム = new Date();

// authList=a=>a.reduce((p,c)=>p+=(/\d/.exec(c)&&/[a-z]/.exec(c)&&/^[a-z\d]{6,10}$/.test(c)),0);
authList=a=>!a.some(v=>!(/\d/.exec(v)&&/[a-z]/.exec(v)&&/^[a-z\d]{6,10}$/.test(v)));

console.log(authList(['john123', 'alex222', 'sandra1']), true);
console.log(authList(['john123', 'alex222', 'sandraW']), false);
console.log(authList(['john_123', 'alex222', 'sandra1']), false);
console.log(authList(['']), false);
console.log(authList(['123456']), false);
console.log(authList(['abcdef']), false);

console.log(`${(new Date() - ヒシャム) / 1000} Seconds`);
