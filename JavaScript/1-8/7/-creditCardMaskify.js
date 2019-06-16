maskify=n=>n.replace(/.(?=.{4})/g,'#');

console.log(maskify('4556364607935616'), '############5616');
console.log(maskify('1'), '1');
console.log(maskify('11111'), '#1111');
