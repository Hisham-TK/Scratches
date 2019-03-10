moveZeros=(a,_=a.filter(v=>v===0))=>(eval('_.push(0);'.repeat(a.length-_.length)),_);
moveZeros=a=>a.filter(v=>v!==0).concat(a.filter(v=>v===0));

console.log(moveZeros([9,0,0,9,1,2,0,1,0,1,0,3,0,1,9,0,0,0,0,9]));
console.log([9,9,1,2,1,1,3,1,9,9,0,0,0,0,0,0,0,0,0,0]);

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));
console.log([1, 2, 1, 1, 3, 1, 0, 0, 0, 0]);

console.log(moveZeros(["a",0,0,"b",null,"c","d",0,1,false,0,1,0,3,[],0,1,9,0,0,{},0,0,9]));
console.log(["a","b",null,"c","d",1,false,1,3,[],1,9,{},9,0,0,0,0,0,0,0,0,0,0]);

console.log(moveZeros([0,1,null,2,false,1,0]));
console.log([1,null,2,false,1,0,0]);