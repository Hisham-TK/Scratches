toCamelCase=(s,n)=>s.toLowerCase().replace(new RegExp([' \\b.','.\\b ','.\\b \\b.'][n-1],'g'),x=>x.toUpperCase()).replace(/ /g,'');

console.log(toCamelCase("hello world",1) , "helloWorld");
console.log(toCamelCase("hello world",2) , "hellOworld");
console.log(toCamelCase("hello world",3) , "hellOWorld");
console.log(toCamelCase("Hello world",1) , "helloWorld");
console.log(toCamelCase("Each number plus one",1) , "eachNumberPlusOne");
console.log(toCamelCase("Each number plus one",2) , "eacHnumbeRpluSone");
console.log(toCamelCase("Each number plus one",3) , "eacHNumbeRPluSOne");