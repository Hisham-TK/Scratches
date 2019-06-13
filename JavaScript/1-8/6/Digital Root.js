digital_root=f=n=>(x=n+'').length-1?f([...x].reduce((p,c)=>p+(+c),0)):n;
digital_root=n=>--n%9+1;

console.log(digital_root(16),7);
console.log(digital_root(456),6);
console.log(digital_root(493193),2);
