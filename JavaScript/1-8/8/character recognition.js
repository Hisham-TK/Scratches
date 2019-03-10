// correct=s=>s.replace(/./g,x=>(i='501'.indexOf(x))>-1?'SOI'[i]:x);
// correct=s=>s.replace(/(5)|(0)|(1)/g,(x,s,o)=>s?'S':o?'O':'I');
correct=s=>s.replace(/[015]/g,_=>"OI   S"[_])
console.log(correct("L0ND0N"),"LONDON");
console.log(correct("DUBL1N"),"DUBLIN");
console.log(correct("51NGAP0RE"),"SINGAPORE");
console.log(correct("BUDAPE5T"),"BUDAPEST");
console.log(correct("PAR15"),"PARIS");