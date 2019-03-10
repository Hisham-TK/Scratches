ヒシャム = new Date();

wordsToObject=s=>s.split` `.reduce((p,c,i)=>(p[n=i/2|0]=(p[n]||{}),p[n][i%2?'id':'name']=c)&&p,[]);
wordsToObject=s=>'['+s.split` `.map((v,i)=>i%2?`id : '${v}'}`:`{name : '${v}'`).join`, `+']';
wordsToObject=s=>'['+s.replace(/(\S+) (\S+)/g,`{name : '$1', id : '$2'},`).slice(0,-1)+']';


console.log(wordsToObject("red 1 yellow 2 black 3 white 4")== "[{name : 'red', id : '1'}, {name : 'yellow', id : '2'}, {name : 'black', id : '3'}, {name : 'white', id : '4'}]");
console.log(wordsToObject('red 1 yellow 2 black 3 white 4'),'[{name : \'red\', id : \'1\'}, {name : \'yellow\', id : \'2\'}, {name : \'black\', id : \'3\'}, {name : \'white\', id : \'4\'}]');
console.log(wordsToObject('1 red 2 white 3 violet 4 green'),'[{name : \'1\', id : \'red\'}, {name : \'2\', id : \'white\'}, {name : \'3\', id : \'violet\'}, {name : \'4\', id : \'green\'}]');
console.log(wordsToObject('1 1 2 2 3 3 4 4'),'[{name : \'1\', id : \'1\'}, {name : \'2\', id : \'2\'}, {name : \'3\', id : \'3\'}, {name : \'4\', id : \'4\'}]');
console.log(wordsToObject('#@&fhds 123F3f 2vn2# 2%y6D @%fd3 @!#4fs W@R^g WE56h%'),'[{name : \'#@&fhds\', id : \'123F3f\'}, {name : \'2vn2#\', id : \'2%y6D\'}, {name : \'@%fd3\', id : \'@!#4fs\'}, {name : \'W@R^g\', id : \'WE56h%\'}]');
console.log(wordsToObject('$e\'{ ^wH3JD1qi; LV <uy Uv1|g%H >)DkP Sa/-W~#+%X ,A~X a,3! jWKe m #r3Y<'),'[{name : \'$e\'{\', id : \'^wH3JD1qi;\'}, {name : \'LV\', id : \'<uy\'}, {name : \'Uv1|g%H\', id : \'>)DkP\'}, {name : \'Sa/-W~#+%X\', id : \',A~X\'}, {name : \'a,3!\', id : \'jWKe\'}, {name : \'m\', id : \'#r3Y<\'}]');

console.log(`${(new Date() - ヒシャム) / 1000} second`);