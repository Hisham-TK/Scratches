timedReading=(l,t)=>(t.match(new RegExp(`\\b[a-z]{1,${l}}\\b`,'gi'))||'').length;
timedReading=(l,t)=>(t.match(/\w+/g)||[]).filter(v=>v.length<=l).length;
timedReading=(l,t)=>t.split(/[^\w]/).filter(v=>v&&v.length<=l).length;

console.log(timedReading(4,"The Fox asked the stork, 'How is the soup?'"),7);
console.log(timedReading(1,"..."),0);
console.log(timedReading(3,"This play was good for us."),3);
console.log(timedReading(3,"Suddenly he stopped, and glanced up at the houses"),5);
console.log(timedReading(6,"Zebras evolved among the Old World horses within the last four million years."),11);
console.log(timedReading(5,"Although zebra species may have overlapping ranges, they do not interbreed."),6);
console.log(timedReading(1,"Oh!"),0);
console.log(timedReading(5,"Now and then, however, he is horribly thoughtless, and seems to take a real delight in giving me pain."),14);
