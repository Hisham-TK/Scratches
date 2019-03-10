ヒシャム = new Date();

// pairs=a=>a.filter((v,i)=>!(i%2)&&Math.abs(a[i+1]-v)==1).length;
pairs=a=>a.reduce((p,c,i)=>p+=Math.abs(a[i+1]-c)==1&&!(i%2),0);

console.log(pairs([1,2,5,8,-4,-3,7,6,5]),3);
console.log(pairs([21, 20, 22, 40, 39, -56, 30, -55, 95, 94]),2);
console.log(pairs([81, 44, 80, 26, 12, 27, -34, 37, -35]),0);
console.log(pairs([-55, -56, -7, -6, 56, 55, 63, 62]),4);
console.log(pairs([73, 72, 8, 9, 73, 72]),3);

console.log(`${(new Date() - ヒシャム) / 1000} second`);