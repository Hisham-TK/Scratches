high=(s,i=(z=s.split` `).map(v=>[...v].reduce((p,c)=>p+c.charCodeAt()-96,0)))=>z[i.indexOf(Math.max(...i))];
high=s=>s.split` `.sort((a,b)=>(f=w=>[...w].reduce((p,c)=>p+c.charCodeAt()-96,0))(b)-f(a))[0];

console.log(high('man i need a taxi up to ubud'), 'taxi');
console.log(high('what time are we climbing up the volcano'), 'volcano');
console.log(high('take me to semynak'), 'semynak');  