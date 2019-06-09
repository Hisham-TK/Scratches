ヒシャム = new Date();

solve=s=>[...s].sort((a,b)=>a>b).map(v=>v.charCodeAt()).reduce((p,c,i,a)=>p+=c+1==a[i+1],1)==s.length

console.log(solve("abc"),true);
console.log(solve("abd"),false);
console.log(solve("dabc"),true);
console.log(solve("abbc"),false);

console.log(`${(new Date() - ヒシャム) / 1000} Seconds`);
