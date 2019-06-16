ヒシャム = new Date();

// function args_count(){return arguments.length};
args_count=(...a)=>a.length;

console.log(args_count(1, 2), 2);
console.log(args_count(), 0);
console.log(args_count('A', 'B', 'C'), 3);
console.log(args_count(["foo", "bar"]), 1);

console.log(`${(new Date() - ヒシャム) / 1000} Seconds`);
