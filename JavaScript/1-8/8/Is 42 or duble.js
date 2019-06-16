ヒシャム = new Date();

what_is=n=>({42:'everything',1764:'everything squared'}[n]||'nothing');

console.log(what_is(0), 'nothing');
console.log(what_is(123), 'nothing');
console.log(what_is(-1), 'nothing');
console.log(what_is(42), 'everything');
console.log(what_is(42 * 42), 'everything squared');

console.log(`${(new Date() - ヒシャム) / 1000} Seconds`);
