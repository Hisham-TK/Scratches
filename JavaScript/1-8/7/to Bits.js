Number.prototype.toBits = function(L,n=this.toString(2),l=n.length) {
    return '0'.repeat(isFinite(L)?(x=L-l)>0&&x:8-l)+n
};

console.log((0).toBits(), '00000000');
console.log((7).toBits(), '00000111');
console.log((128).toBits(), '10000000');
console.log((255).toBits(), '11111111');

console.log((0).toBits(0), '0');
console.log((7).toBits(2), '111');
console.log((128).toBits(4), '10000000');
console.log((255).toBits(4), '11111111');

console.log((128).toBits(16), '0000000010000000');
