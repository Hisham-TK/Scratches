ヒシャム = new Date();

complexSum=a=>a.length?((n=a.reduce((p,c)=>p+ +/-?\d+(?!i)/.exec(c),0)||'')+((o=a.reduce((p,c)=>p+ +((i=c.match(/[-+]?(\d+)?i/))?/[-+]?\d+/.exec(i[0].replace(/([-+]|\b)i/,'$11')):''),0))?(o>0&&n&&'+')+o+'i':'').replace(/([-+]|\b)1i/,'$1i'))||'0':'0';

console.log(complexSum([]) === '0');
console.log(complexSum(['0']) === '0');
console.log(complexSum(['-i']) === '-i');
console.log(complexSum(['1','1']) === '2');
console.log(complexSum(['-5','5']) === '0');
console.log(complexSum(['3+4i']) === '3+4i');
console.log(complexSum(['1i', '1i']) === '2i');
console.log(complexSum(['3+4i', '3-4i']) === "6");
console.log(complexSum(['2+3i','3-i']) === '5+2i');
console.log(complexSum(['i', '2i', '3i']) === '6i');
console.log(complexSum(['5+4i', '11+3i']) === '16+7i');
console.log(complexSum(['-i', '-3i', '1+i']) === '1-3i');
console.log(complexSum(['1', '10', '100', '1000']) === '1111');
console.log(complexSum(['-1000i', '1000i', '1234']) === '1234');
console.log(complexSum(['-68+362i', '1-175i', '31+318i', '-128+171i', '248i+490']) , '326+924i');
console.log(complexSum(['-149+258i', '134-293i', '430+464i', '-244+129i', '-159-81i']) === '12+477i');

console.log(`${(new Date() - ヒシャム) / 1000} Seconds`);
