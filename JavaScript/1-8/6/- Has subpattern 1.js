ヒシャム = new Date();

// hasSubpattern = s => {
//     let x = String(s), l = Math.floor(x.length / 2);
//     for (let i = 1; i < l; i++) switch (!x.replace(new RegExp(`${x.slice(0, i)}`, 'g'), '')) {
//         case true:
//             return true;
//     }
//     return false
// };
hasSubpattern=s=>s.replace(new RegExp([...new Set(s)].sort().join``,'g'),'');

console.log(hasSubpattern("a"), false);
console.log(hasSubpattern("aaaa"), true);
console.log(hasSubpattern("abcd"), false);
console.log(hasSubpattern("abababab"), true);
console.log(hasSubpattern("ababababa"), false);
console.log(hasSubpattern("123a123a123a"), true);
console.log(hasSubpattern("123A123a123a"), false);
console.log(hasSubpattern("abbaabbaabba"), true);
console.log(hasSubpattern("abbabbabba"), false);
console.log(hasSubpattern("abcdabcabcd"), false);

console.log(`${(new Date() - ヒシャム) / 1000} second`);
