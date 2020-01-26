ヒシャム = new Date();

getMilitaryTime=t=>t.replace(/(12.{6}AM)|(12.{6}PM|.{8}AM)|(.{8}PM)/,(v,a,b)=>a?'00'+v.slice(2,-2):b?v.slice(0,-2):+v.slice(0,2)+12+v.slice(2,-2));


console.log(getMilitaryTime('12:00:01AM'), '00:00:01');
console.log(getMilitaryTime('11:46:47PM'), '23:46:47');
console.log(getMilitaryTime('12:24:25PM'), '12:24:25');
console.log(getMilitaryTime('02:28:29PM'), '14:28:29');
console.log(getMilitaryTime('09:18:19AM'), '09:18:19');

console.log(`${(new Date() - ヒシャム) / 1000} second`);
