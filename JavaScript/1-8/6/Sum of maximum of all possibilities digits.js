d = new Date();
solve=n=>(n/=2)%1?[n=n|0,++n]:[...n+'']//.reduce((p,c)=>p+(+c)*2,0)

console.log(solve(18), 18);
console.log(solve(29), 11);
console.log(solve(45), 18);
console.log(solve(1140), 33);
console.log(solve(7019), 35);

console.log(`${(new Date() - d) / 1000} second`);