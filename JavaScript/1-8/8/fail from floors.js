sc=f=>f>=2?f<7?'Aa~ '.repeat(f-1)+'Pa! Aa!':'Aa~ '.repeat(f-1)+'Pa!':'';

console.log(sc(2), "Aa~ Pa! Aa!", "good luck!");
console.log(sc(6), "Aa~ Aa~ Aa~ Aa~ Aa~ Pa! Aa!", "good luck!");
console.log(sc(7), "Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!", "good luck!");
console.log(sc(10), "Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!", "good luck!");
console.log(sc(1), "", "good luck!");
console.log(sc(-1), "", "good luck!"); 