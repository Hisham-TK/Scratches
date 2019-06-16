ヒシャム = new Date();

stringMerge=(f,s,l)=>f.slice(0,f.indexOf(l))+s.slice(s.indexOf(l));

console.log(stringMerge("person", "here", "e"), "pere");
console.log(stringMerge("apowiejfoiajsf", "iwahfeijouh", "j"), "apowiejouh");
console.log(stringMerge("abcdefxxxyzz", "abcxxxyyyxyzz", "x"), "abcdefxxxyyyxyzz");
console.log(stringMerge("12345654321", "123456789", "6"), "123456789");
console.log(stringMerge("JiOdIdA4", "oopopopoodddasdfdfsd", "d"), "JiOdddasdfdfsd");
console.log(stringMerge("incredible", "people", "e"), "increople");
console.log(stringMerge("hello", "world", "l"), "held");
console.log(stringMerge("coding", "anywhere", "n"), "codinywhere");
console.log(stringMerge("jason", "samson", "s"), "jasamson");
console.log(stringMerge("wonderful", "people", "e"), "wondeople");
console.log(stringMerge('aaaab', 'abc', 'b'), 'aaaabc');
console.log(stringMerge('a', 'a String', 'a'),'a String');
console.log(stringMerge('a String', 'a', 'a'),'a');
console.log(stringMerge('a', 'a', 'a'),'a');


console.log(stringMerge("person", "here", "e")=== "pere");
console.log(stringMerge("apowiejfoiajsf", "iwahfeijouh", "j")=== "apowiejouh");
console.log(stringMerge("abcdefxxxyzz", "abcxxxyyyxyzz", "x")=== "abcdefxxxyyyxyzz");
console.log(stringMerge("12345654321", "123456789", "6")=== "123456789");
console.log(stringMerge("JiOdIdA4", "oopopopoodddasdfdfsd", "d")=== "JiOdddasdfdfsd");
console.log(stringMerge("incredible", "people", "e")=== "increople");
console.log(stringMerge("hello", "world", "l")=== "held");
console.log(stringMerge("coding", "anywhere", "n")=== "codinywhere");
console.log(stringMerge("jason", "samson", "s")=== "jasamson");
console.log(stringMerge("wonderful", "people", "e")=== "wondeople");
console.log(stringMerge('aaaab', 'abc', 'b')=== 'aaaabc');
console.log(stringMerge('a', 'a String', 'a')==='a String');
console.log(stringMerge('a String', 'a', 'a')==='a');
console.log(stringMerge('a', 'a', 'a')==='a');


console.log(`${(new Date() - ヒシャム) / 1000} Seconds`);
