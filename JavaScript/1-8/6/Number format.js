ヒシャム = new Date();

numberFormat=n=>`${n}`.replace(/\B(?=(\d{3})+$)/g,',');
numberFormat=n=>n.toLocaleString();

console.log(numberFormat(100000), '100,000');
console.log(numberFormat(5678545), '5,678,545');
console.log(numberFormat(-562495), '-562,495');

console.log(`${(new Date() - ヒシャム) / 1000} second`);