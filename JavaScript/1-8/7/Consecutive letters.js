ヒシャム = new Date();

solve=s=>'abcdefghijklmnopqrstuvwxyz'.includes([...s].sort().join``);
/*
for(v=97,s='';v<122;)s+=String.fromCharCode(v++)
v=97,s="";while(v<122)s+=String.fromCharCode(v++)
s='';while((l=s.length)<26)s+=String.fromCharCode(l+1)
while((v=v||97)<122)(s=s||'')+=String.fromCharCode(v++)
s='';while((l=s.length)<26)s+=String.fromCharCode(l+97)
(f=(s='',n=97)=>n<122?f(s+=String.fromCharCode(n++)):s)()
[...Array(26)].reduce((p,c,i)=>p+String.fromCharCode(i+97),'')
Array.from({length:26},(v,i)=>String.fromCharCode(i+97)).join``
Array(27).join().replace(/./g,(v,i)=>String.fromCharCode(i+97))
*/
    // [...s].sort().join``

console.log(solve("abc"),true);
console.log(solve("abd"),false);
console.log(solve("dabc"),true);
console.log(solve("abbc"),false);
console.log(`${(new Date() - ヒシャム) / 1000} second`);
