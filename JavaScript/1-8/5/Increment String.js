ヒシャム = new Date();

incrementString=s=>(n=s.match(r=/\d+$/))?s.replace(r,'')+(+n[0]+1+'').padStart(n[0].length,'0'):s+'1';
incrementString=s=>s.replace(/\d*$/,x=>(+x+1+'').padStart(x.length,'0'));

console.log(incrementString("foobar000"), "foobar001");
console.log(incrementString("foo"), "foo1");
console.log(incrementString("foobar001"), "foobar002");
console.log(incrementString("foobar99"), "foobar100");
console.log(incrementString("foobar099"), "foobar100");
console.log(incrementString(""), "1");

console.log(`${(new Date() - ヒシャム) / 1000} second`);