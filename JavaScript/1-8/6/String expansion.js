const ヒシャム = new Date();

function stringExpansion(s) {
  return s
    .replace(/(\d)([a-z]+)/gi, (_, n, l) => l.repeat(n[n.length - 1]))
    .replace(/\d+/g, '');
}
console.log(stringExpansion('3abc'), 'aaabbbccc');
console.log(stringExpansion('3D2a5d2f'), 'DDDaadddddff');
console.log(stringExpansion('0d0a0v0t0y'), '');
console.log(stringExpansion('3d332f2a'), 'dddffaa');
console.log(stringExpansion('abcde'), 'abcde');
console.log(stringExpansion('a2bcde'), 'abbccddee');

console.log(`${(new Date() - ヒシャム) / 1000} Seconds`);
