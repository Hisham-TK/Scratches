ヒシャム = new Date();

orderedCount=s=>s.split``.reduce((p,c)=>(p[c]=(p[c]|0)+1)&&p,{})


console.log(orderedCount('abracadabra'), [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]])
console.log(orderedCount('4444231233'), [['4',4], ['2', 2], ['3', 3], ['1', 1]])
console.log(orderedCount('212'), [['2', 2], ['1', 1]])
// console.log(orderedCount('Code Wars'), [['C', 1], ['o', 1], ['d', 1], ['e', 1], [' ', 1], ['W', 1], ['a', 1], ['r', 1], ['s', 1]])
// console.log(orderedCount('013198016989053124982476585421469525125344195958522467390429106757886376049759440335587'), [ [ '0', 7 ], [ '1', 8 ], [ '3', 7 ], [ '9', 11 ], [ '8', 8 ], [ '6', 7 ], [ '5', 13 ], [ '2', 8 ], [ '4', 11 ], [ '7', 7 ] ])
console.log(`${(new Date() - ヒシャム) / 1000} second`);
