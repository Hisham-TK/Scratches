ヒシャム = new Date();

problem=n=>n===+n?n*50+6:'Error';

console.log(problem(1), 56);
console.log(problem(), "Error");
console.log(problem(''), "Error");
console.log(problem(' '), "Error");
console.log(problem("hello"), "Error");

console.log(`${(new Date() - ヒシャム) / 1000} second`);
