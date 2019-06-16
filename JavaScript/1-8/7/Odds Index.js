ヒシャム = new Date();

oddBall=a=>a.includes(a.indexOf('odd'));

console.log(oddBall(["even",4,"even",7,"even",55,"even",6,"even",10,"odd",3,"even"]), true);
console.log(oddBall(["even",4,"even",7,"even",55,"even",6,"even",9,"odd",3,"even"]), false);
console.log(oddBall(["even",10,"odd",2,"even"]), true);

console.log(`${(new Date() - ヒシャム) / 1000} Seconds`);
