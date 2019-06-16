ヒシャム = new Date();

delete Array.prototype.toString;
delete Number.prototype.toString;
delete Boolean.prototype.toString;

// Array.prototype.toString = function () {return this.reduce((p,c,i)=>p+(i?',':'')+c,'[')+']'};
// Boolean.prototype.toString = function () {return this+''};
// Number.prototype.toString = function () {return this+''};

['Array','Number','Boolean'].map((_,$)=>eval(`${_}.prototype.toString=function(){return this${$?"+''":".reduce((p,c,i)=>p+(i?',':'')+c,'[')+']'"}}`));
[Array,Number,Boolean].forEach(_=>_.prototype.toString=function(){return JSON.stringify(this)});

console.log((123).toString(), "123");
console.log(Math.PI.toString(), "3.141592653589793");
console.log(Math.E.toString(), "2.718281828459045");
console.log(true.toString(), "true");
console.log(false.toString(), "false");
console.log([1,2,3,4,5].toString().replace(/\s+/g, ""), "[1,2,3,4,5]");

console.log(`${(new Date() - ヒシャム) / 1000} Seconds`);
