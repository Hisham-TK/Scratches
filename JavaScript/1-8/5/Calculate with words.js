// [zero,one,two,three,four,five,six,seven,eight,nine]=[...Array(10)].map((v,i)=>((f)=>f?f(i):i));
// [plus,minus,times,dividedBy]=['+','-','*','/'].map(op=>Function('b',`return a=>a${op}b`));

'zero one two three four five six seven eight nine'.split` `.map((v,i)=>eval(`${v}=(o)=>o?eval(${i}+o)|0:${i}`));
'plus minus times dividedBy'.split` `.map((v,i)=>eval(`${v}=(s)=>'${'+-*/'[i]}'+s`));

console.log(six(dividedBy(two())), 3);
console.log(eight(dividedBy(two())), 4);
console.log(two(plus(three())), 5);
console.log(eight(minus(three())), 5);
console.log(four(plus(nine())), 13);
console.log(seven(times(five())), 35);
console.log(five(times(five(plus(five())))), 50);
console.log(two(times(two(plus(three(minus(one())))))), 8);