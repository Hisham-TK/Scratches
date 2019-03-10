count=s=>[...s].reduce((p,c)=>(p[c]=(p[c]||0)+1)&&p,{});

console.log(count("aba"), { a: 2, b: 1 });
console.log(count(""), {});