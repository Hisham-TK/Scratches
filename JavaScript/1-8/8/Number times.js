ヒシャム = new Date();

Number.prototype.times=function(f){for (let i=0;i<this;i++)f(i);};

(5).times(v=>console.log(v));
(5).times(()=>console.log('hi'));

console.log(`${(new Date() - ヒシャム) / 1000} Seconds`);
