ヒシャム = new Date();

dataTypes=s=>s.replace(/true|false/gi,'_').replace(/(_)|(\d+)|([a-z]+)/gi,(_,b,d)=>' '+(b?'boolean':d?'number':'string')).split(/ +/).splice(1);
dataTypes=s=>s.toLowerCase().replace(/true|false/g,'`').match(/`|\d+|[a-z]+/g).map(v=>v=='`'?'boolean':isNaN(v)?'string':'number');

console.log(dataTypes("You are number 1"), ['string', 'string', 'string', 'number']);
console.log(dataTypes("Youarenumber1"), ['string', 'number']);
console.log(dataTypes("123gjet"), ['number', 'string']);
console.log(dataTypes("truestring1"), ['boolean', 'string', 'number']);
console.log(dataTypes("hellotrue123"),['string','boolean','number']);

console.log(`${(new Date() - ヒシャム) / 1000} second`);