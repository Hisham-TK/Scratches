abbrevName=s=>(s.match(/^.| (.)/g)+'').replace(/, /,'.').toUpperCase();
abbrevName=s=>s.toUpperCase().replace(/(.).*? (.).*/g,'$1.$2');
abbrevName=s=>s.split` `.map(v=>v[0]).join`.`.toUpperCase();
abbrevName=s=>s.match(/\b\w/g).join`.`.toUpperCase();

console.log(abbrevName("Sam Harris"), "S.H");
console.log(abbrevName("Patrick Feenan"), "P.F");
console.log(abbrevName("Evan Cole"), "E.C");
console.log(abbrevName("P Favuzzi"), "P.F");
console.log(abbrevName("David Mendieta"), "D.M");
console.log(abbrevName("442234 23242"), "4.2");