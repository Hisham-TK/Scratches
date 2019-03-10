ヒシャム = new Date();

alphabetWar=s=>(l=(f=(l)=>[...s].reduce((p,c)=>p+=(i=l.indexOf(c))>-1&&++i,0))('sbpw'))==(r=f('zdqm'))?"Let's fight again!":`${r>l?'Righ':'Lef'}t side wins!`;

alphabetWar=_=>!(r=[..._].reduce((p,c)=>p+=(i='wpbs zdqm'.indexOf(c))+1&&i-4,0))?"Let's fight again!":`${r>0?'Righ':'Lef'}t side wins!`;

console.log( alphabetWar("z") , "Right side wins!" );
console.log( alphabetWar("zdqmwpbs") , "Let's fight again!" );
console.log( alphabetWar("zzzzs"), "Right side wins!" );
console.log( alphabetWar("rbpbkuqzdq"), "Right side wins!" );
console.log( alphabetWar("wwwwww"), "Left side wins!" );

console.log(`${(new Date() - ヒシャム) / 1000} second`);