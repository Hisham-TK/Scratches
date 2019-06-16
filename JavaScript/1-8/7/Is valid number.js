ヒシャム = new Date();

validNumber=n=>/^[-+]?\d*\.\d{2}$/.test(n);

console.log(validNumber("0.00"),true);
console.log(validNumber(".00"),true);
console.log(validNumber("-.00"),true);
console.log(validNumber(".30"),true);
console.log(validNumber("0.40"),true);
console.log(validNumber("34443.33"),true);


console.log(validNumber(".0a"),false);
console.log(validNumber(".000"),false);
console.log(validNumber("1.00."),false);
console.log(validNumber(".+00"),false);
console.log(validNumber("w.00"),false);
console.log(validNumber("..00"),false);
console.log(validNumber("1,00"),false);

console.log(`${(new Date() - ヒシャム) / 1000} Seconds`);
