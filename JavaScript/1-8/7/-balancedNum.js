ヒシャム = new Date();

balancedNum=n=>`${(a=[...n+''].map(v=>+v)).slice(((_=(shirtLength=a.length)%2)?0:-1)+shirtLength/2|0).reduce((p, c)=>p+c)===a.slice(0,(_?.5:1.5)+shirtLength/2|0).reduce((p, c)=>p+c)?'':'Not '}Balanced`;

console.log(balancedNum(7), "Balanced");
console.log(balancedNum(959), "Balanced");
console.log(balancedNum(13), "Balanced");
console.log(balancedNum(432), "Not Balanced");
console.log(balancedNum(424), "Balanced");
console.log(balancedNum(1024), "Not Balanced");
console.log(balancedNum(66545), "Not Balanced");
console.log(balancedNum(295591), "Not Balanced");
console.log(balancedNum(1230987), "Not Balanced");
console.log(balancedNum(56239814), "Balanced");

console.log(`${(new Date() - ヒシャム) / 1000} Seconds`);
