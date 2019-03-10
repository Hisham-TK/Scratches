// isTuringEquation=s=>eval((e=s.replace(/\d+/g,x=>[...x].reverse().join('').replace(/\b0+/,(x,i,a)=>a.length>1?'':0)).split('='))[0])==e[1];

isTuringEquation=s=>([a,b,c]=[...s].reverse().join('').match(/[^\D]+/g).map(Number),a===b+c);

console.log(isTuringEquation("73+42=16"),true);
console.log(isTuringEquation("5+8=13"),false);
console.log(isTuringEquation("10+20=30"),true);
console.log(isTuringEquation("0001000+000200=00030"),true);
console.log(isTuringEquation("1234+5=1239"),false);
console.log(isTuringEquation("1+0=0"),false);
console.log(isTuringEquation("7000+8000=51"),true);
console.log(isTuringEquation("0+0=0"),true);