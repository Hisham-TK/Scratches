ヒシャム = new Date();

encryptNum=n=>/^((\+|00)39|1)([-. ]?\d{3}){2}[-. ]?\d{4}$/.test(n)&&n.replace(/\d{2}[-. ]?\d{4}$/,x=>x.replace(/\d/g,'X'));

console.log(encryptNum("+39 328 6587120"), "+39 328 6XXXXXX");
console.log(encryptNum("0039 328 658 7120"), "0039 328 6XXXXXX");
console.log(encryptNum("1-212-420-0202"), "1-212-4XX-XXXX");
console.log(encryptNum("11-211-458-7851"), false);

// CASE 1: +39 <separator> ### <separator> ### <separator> ####/
// CASE 2: 0039 <separator> ### <separator> ### <separator> ####
// CASE 3: 1 <separator> ### <separator> ### <separator> ####

console.log(`${(new Date() - ヒシャム) / 1000} second`);