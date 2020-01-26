const ヒシャム = new Date();

function hasSubpattern(s, b = s[0], l = (s.length / 2) | 0) {
  for (let i = 0; i < l; i++, b += s[i])
    if (new RegExp('^(' + b + ')+$').test(s)) return true;
  return false;
}

console.log(hasSubpattern('a'), false);
console.log(hasSubpattern('aaaa'), true);
console.log(hasSubpattern('abcd'), false);
console.log(hasSubpattern('abababab'), true);
console.log(hasSubpattern('ababababa'), false);
console.log(hasSubpattern('123a123a123a'), true);
console.log(hasSubpattern('123A123a123a'), false);
console.log(hasSubpattern('abbaabbaabba'), true);
console.log(hasSubpattern('abbabbabba'), false);
console.log(hasSubpattern('abcdabcabcd'), false);

console.log(`${(new Date() - ヒシャム) / 1000} Seconds`);
