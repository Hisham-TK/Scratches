const ヒシャム = new Date();

const alphabetWar=_=>!(r=[..._.replace(/.?\*+.?/g,'')].reduce((p,c)=>p+=(i='wpbs zdqm'.indexOf(c))+1&&i-4,0))?"Let's fight again!":`${r>0?'Righ':'Lef'}t side wins!`;

console.log(alphabetWar("z"), "Right side wins!");
console.log(alphabetWar("****"), "Let's fight again!");
console.log(alphabetWar("z*dq*mw*pb*s"), "Let's fight again!");
console.log(alphabetWar("zdqmwpbs"), "Let's fight again!");
console.log(alphabetWar("zz*zzs"), "Right side wins!");
console.log(alphabetWar("sz**z**zs"), "Left side wins!");
console.log(alphabetWar("z*z*z*zs"), "Left side wins!");
console.log(alphabetWar("*wwwwww*z*"), "Left side wins!");
console.log(alphabetWar("zh*qp*"), "Right side wins!");
console.log(alphabetWar("t**mr"), "Let's fight again!");
console.log(alphabetWar("x**pv*m"), "Let's fight again!");


console.log(`${(new Date() - ヒシャム) / 1000} Seconds`);
