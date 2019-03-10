solution=s=>(s+'_').match(/../g);

console.log(solution('abc'), ['ab', 'c_']);
console.log(solution('abcdef'),['ab', 'cd', 'ef']);