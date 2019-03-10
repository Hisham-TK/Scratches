_ = new Date();

matrixfy=$=(s,c=1)=>s?s.length<=c*c?[...Array(c)].map((_,i)=>[...s.slice(i*c,++i*c).padEnd(c,'.')]):$(s,++c):'name must be at least one letter';

console.log(matrixfy(''), 'name must be at least one letter');
console.log(JSON.stringify(matrixfy('A')), JSON.stringify([['A']]));
console.log(JSON.stringify(matrixfy('Franklin')), JSON.stringify([['F', 'r', 'a'], ['n', 'k', 'l'], ['i', 'n', '.']]));
console.log(matrixfy("Bill"), [ ["B", "i"], ["l", "l"] ]);
console.log(matrixfy("Frank"), [["F", "r", "a"],["n", "k", "."],[".", ".", "."] ]);

console.log(`${(new Date() - _) / 1000} second`);