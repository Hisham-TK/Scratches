ヒシャム = new Date();

toString=m=>[...m<36e5?[m/6e4|0]:[m/36e5|0,m/6e4%60|0],m/1e3%60|0].map((v,i)=>i?`${v}`.padStart(2,0):v).join`:`;
toString=m=>/(\d\d:?){3}/.exec(`${new Date(m)}`)[0].replace(/(\d\d):/,x=>(+x));
// toString=m=>`${new Date(m)}`

console.log(toString(1), "0:00");
console.log(toString(3000), "0:03");
console.log(toString(180000), "3:00");
console.log(toString(3600000), "1:00:00");
console.log(toString(3780000), "1:03:00");
console.log(toString(3783000), "1:03:03");
console.log(toString(10800000), "3:00:00");
console.log(toString(43200999), "12:00:00");

console.log(`${(new Date() - ヒシャム) / 1000} second`);
