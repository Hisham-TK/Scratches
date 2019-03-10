// union=(a,b)=>(b.forEach(v=>(!a.has(v))&&a.add(v)),a)
union=(a,b)=>new Set([...a,...b]);

let A = new Set([1,2]), B = new Set([2,3]), C = new Set([1,2,3]);
console.log(union(A,A),A,"A ∪ A == A");
console.log(union(A,B),C);
console.log([...union(A,B)].sort(),[...union(B,A)].sort(),"A ∪ B == B ∪ A");
console.log(union(A,B)instanceof Set,true,"A ∪ B should be a Set too");