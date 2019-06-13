ヒシャム = new Date();

testit=(a,b)=>[a%2, b%2, a/b, b/a, a*b, a+b];
testit=(a,b)=>a%2&&b%2?a*b:a+b+(b/a%1?0:(a&&b?- b-a:0));

//a+b?
console.log(testit(0,1), 1);
console.log(testit(1,2), 3);
console.log(testit(10,20), 30);
//a*b?
console.log(testit(1,1), 1);
console.log(testit(1,3), 3);

console.log(testit(11,22), 31);
console.log(testit(53,86), 119);

console.log(`${(new Date() - ヒシャム) / 1000} second`);
