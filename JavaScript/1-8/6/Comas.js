ヒシャム = new Date();

commas=n=>[...[...`${+n.toFixed(3)}`].reverse().join``.replace(/(\d{3})(?=\d)/g,'$1,')].reverse().join``;
commas=n=>`${+n.toFixed(3)}`.replace(/\d+/,v=>v.replace(/\B(?=(\d{3})+$)/g,','));
commas=n=>`${+n.toFixed(3)}`.replace(/\B(?=(\d{3})+(\.|$))/g,',');
commas=n=>`${+n.toFixed(3)}`.replace(/\B(?=(\d{3})+(?!\d))/g,',');

console.log(commas(1), "1");
console.log(commas(1000), "1,000");
console.log(commas(100.2346), "100.235");
console.log(commas(9123.212), "9,123.212");
console.log(commas(-1), "-1");
console.log(commas(-1000000.123), "-1,000,000.123");
console.log(commas(-4488148030636.221), "-4,488,148,030,636.221");
console.log(commas(-5828720343687.891), "-5,828,720,343,687.891");
console.log(commas(-169234729737.898), "-169,234,729,737.898");
console.log(commas(1000000000.23), "1,000,000,000.23");
console.log(commas(1000000000.2), "1,000,000,000.2");

console.log(`${(new Date() - ヒシャム) / 1000} Seconds`);
