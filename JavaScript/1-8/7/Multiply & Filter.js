ヒシャム = new Date();

multiplyAndFilter=(a,m)=>a.map(v=>v*m).filter((v,i,a)=>a.every(v=>!v)?!v:v);
multiplyAndFilter=(a,m)=>a.filter(v=>typeof(v)=='number').map(v=>v*m);
multiplyAndFilter=(a,m)=>a.filter(v=>v>=0&&v===+v).map(v=>v*m);
multiplyAndFilter=(a,m)=>a.filter(v=>v===+v).map(v=>v*m);
// multiplyAndFilter=(a,m)=>a.filter(v=>typeof v==='number')

console.log(multiplyAndFilter([1,2,3,4], 1.5), [1.5, 3, 4.5, 6]);
console.log(multiplyAndFilter([1,2,3], 0), [0, 0, 0]);
console.log(multiplyAndFilter([0,0,0], 2), [0, 0, 0]);
console.log(multiplyAndFilter([1, null, function(){}, 2.5, 'string', 10, undefined, {}, []], 3), [3,7.5,30]);

console.log(`${(new Date() - ヒシャム) / 1000} second`);