ヒシャム = new Date();

// points=(a,r=0)=>a.map(v=>[a=v.split`:`][0]>a[1]?r+=3:(,r+=1))
points=a=>a.reduce((p,c)=>p+=(a=c.split`:`)[0]>a[1]?3:a[0]==a[1]&&1,0);

console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]) , 30);
console.log(points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]) , 10);
console.log(points(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"]) , 0);
console.log(points(["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"]) , 15);
console.log(points(["1:0","2:0","3:0","4:4","2:2","3:3","1:4","2:3","2:4","3:4"]) , 12);

console.log(`${(new Date() - ヒシャム) / 1000} Seconds`);
