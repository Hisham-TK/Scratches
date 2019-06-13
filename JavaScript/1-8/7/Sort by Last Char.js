ヒシャム = new Date();

last=s=>s.split` `.sort((a,b)=>a.slice(-1)>b.slice(-1));

console.log(last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']);
console.log(last('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']);
console.log(last('take me to semynak'), ['take', 'me', 'semynak', 'to']);

console.log(`${(new Date() - ヒシャム) / 1000} second`);
