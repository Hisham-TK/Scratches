ヒシャム = new Date();

stutter=s=>s.replace(/(ch\B)|(ck)|(cc)|(c(?![hkc])\B)/gi,(_,a,b,c)=>((a?'c':b?'k':c?'ck':'ch')+'...').repeat(2));

console.log(stutter('church'), 'c...c...urch');
console.log(stutter('do you think I can act?'), 'do you think I ch...ch...an ach...ch...t?');
console.log(stutter('would you like a hot chocolate or a cup of tea?'), 'would you like a hot c...c...och...ch...olate or a ch...ch...up of tea?');
console.log(stutter('actually I would very much like a mocca if thats ok'), 'ach...ch...tually I would very much like a mock...ck...a if thats ok');
console.log(stutter('zinc'), 'zinc');
console.log(stutter('ECchar'), 'Eck...ck...har');

console.log(stutter('church') === 'c...c...urch');
console.log(stutter('do you think I can act?') === 'do you think I ch...ch...an ach...ch...t?');
console.log(stutter('would you like a hot chocolate or a cup of tea?') === 'would you like a hot c...c...och...ch...olate or a ch...ch...up of tea?');
console.log(stutter('actually I would very much like a mocca if thats ok') === 'ach...ch...tually I would very much like a mock...ck...a if thats ok');
console.log(stutter('zinc') === 'zinc');
console.log(stutter('ECchar') === 'Eck...ck...har');

console.log(`${(new Date() - ヒシャム) / 1000} Seconds`);
