narcissistic=v=>[...s=v+''].reduce((p,c)=>p+c**s.length,0)==v;

console.log(narcissistic(7), "7 is narcissistic");
console.log(narcissistic(99), "99 isn't narcissistic");
console.log(narcissistic(371), "371 is narcissistic");
console.log(narcissistic(1994), "371 isn't narcissistic");
