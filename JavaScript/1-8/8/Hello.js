ヒシャム = new Date();

// hello=n=>`Hello, ${n?[...n].map((v,i)=>v['to'+(i?'Lower':'Upper')+'Case']()).join``:'World'}!`;
// hello=n=>`Hello, ${n?n.replace(/./g,(v,i)=>v['to'+(i?'Lower':'Upper')+'Case']()):'World'}!`;
hello=s=>`Hello, ${s?s[0].toUpperCase()+s.slice(1).toLowerCase():'World'}!`;

console.log(hello('johN'), 'Hello, John!');
console.log(hello('alice'), 'Hello, Alice!');
console.log(hello(), 'Hello, World!');
console.log(hello(''), 'Hello, World!' );

console.log(`${(new Date() - ヒシャム) / 1000} second`);