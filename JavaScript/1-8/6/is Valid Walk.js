d = new Date();

isValidWalk=a=>a.length==1e1&&!a.join``.replace(/ns|sn|we|ew/g,'');

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), 'should return true');
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), 'should return false');
console.log(isValidWalk(['w']), 'should return false');
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']), 'should return false');


console.log(`${(new Date() - d) / 1000} second`);