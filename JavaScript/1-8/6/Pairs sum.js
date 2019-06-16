ヒシャム = new Date();

solve=n=>Math.max(...[...Array(100).keys()].map((v,i)=>(r=n=>[...`${n}`].reduce((p,c)=>p+ +c,0))(n-(v=Math.floor(n/2+i)))+r(v)).filter(v=>v));
// solve=n=>[...n+''].reduce((p,c)=>p+ +c,0);
// solve=n=>[...Array(100)].map((v,i)=>(n-(v=i+Math.floor(n/2)))===v)

// console.log(solve(0),0);
// console.log(solve(1),1);
// console.log(solve(18),18);
// console.log(solve(29),11);
// console.log(solve(45),18);
// console.log(solve(1140),33);
// console.log(solve(7019),35);
console.log(solve(15569047737),144);

console.log(`${(new Date() - ヒシャム) / 1000} Seconds`);
