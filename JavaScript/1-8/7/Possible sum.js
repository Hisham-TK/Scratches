// digits=(n,r=[])=>((a=[...`${n}`]).map((v1,i1)=>a.map((v2,i2)=>i2>i1&&r.push(+v1+ +v2))),r);
digits=n=>[...n+''].reduce((p,c,i,a)=>[...p,...a.slice(++i).map(b=>+c+ +b)],[]);
digits=n=>[...n+''].reduce((p,c,i,a)=>p.concat(a.slice(++i).map(b=>+c+ +b)),[]);

console.log(digits(156), [6, 7, 11]);
console.log(digits(81596), [9, 13, 17, 14, 6, 10, 7, 14, 11, 15]);
console.log(digits(3852), [11, 8, 5, 13, 10, 7]);
console.log(digits(3264128), [5, 9, 7, 4, 5, 11, 8, 6, 3, 4, 10, 10, 7, 8, 14, 5, 6, 12, 3, 9, 10]);
console.log(digits(999999), [18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18]);
