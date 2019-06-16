ヒシャム = new Date();

computeDepth=(n,r=new Set(n+''),i=0)=>(eval(`while(r.size<10)[...n*++i+''].map(v=>r.add(v))`),i);
computeDepth=$=(n,r=new Set(n+''),i=0)=>r.size<10?[...n*++i+''].map(v=>r.add(v))&&$(n,r,i):i;

console.log(computeDepth(1),10);
console.log(computeDepth(42),9);
console.log(computeDepth(8),12);
console.log(computeDepth(351),9);
console.log(computeDepth(388),5);

console.log(`${(new Date() - ヒシャム) / 1000} Seconds`);
