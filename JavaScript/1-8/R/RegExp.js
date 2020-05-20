abbrevName=s=>s.toUpperCase().replace(/(.).*? (.).*/g,'$1.$2');
abbrevName=s=>s.match(/\b\w/g).join`.`.toUpperCase();
console.log(abbrevName("Sam Harris"), "S.H");

toCurrency=p=>`${p}`.replace(/\B(?=(.{3})+(?!.))/,',');
toCurrency=p=>`${p}`.replace(/(.)(?=(.{3})+$)/,'$1,');
toCurrency=p=>`${p}`.replace(/\d(?=(\d{3})+$)/g,'$&,');
toCurrency=p=>`${p}`.replace(/.(?=(.{3})+$)/g,'$&,');
console.log(toCurrency(1234567890), "1,234,567,890");
console.log(toCurrency(123456), "123,456");
console.log(toCurrency(1234), "1,234");
console.log(toCurrency(123), "123");

isDigit=s=>/^-?\d+(\.\d+)?$/.test(s);
console.log(isDigit(""), false);
console.log(isDigit(" "), false);
console.log(isDigit("-0"), true);
console.log(isDigit("s2324"), false);
console.log(isDigit("-234.4"), true);

validBraces=$=_=>(f=/\(\)|\[]|{}/).test(_)?$(_.replace(f,'')):!_;
validBraces=$=_=>_==(_=_.replace(/\(\)|\[]|{}/,''))?!_:$(_);
console.log(validBraces("()"), true);
console.log(validBraces("[(])"), false);
console.log(validBraces("(([)])"), false);
console.log(validBraces("(([)]())"), false);
console.log(validBraces("({}[]())"), true);
console.log(validBraces("({[]})"), true);
console.log(validBraces("(){}[]"), true);

numberFormat=n=>`${n}`.replace(/\B(?=(\d{3})+$)/g,',');
console.log(numberFormat(100000), '100,000');
console.log(numberFormat(5678545), '5,678,545');
console.log(numberFormat(-562495), '-562,495');

commas=n=>`${+n.toFixed(3)}`.replace(/\B(?=(\d{3})+(\.|$))/g,',');
commas=n=>`${+n.toFixed(3)}`.replace(/\B(?=(\d{3})+(?!\d))/g,',');
console.log(commas(1000), "1,000");
console.log(commas(100.2346), "100.235");
console.log(commas(9123.212), "9,123.212");
console.log(commas(-169234729737.898), "-169,234,729,737.898");
console.log(commas(1000000000.23), "1,000,000,000.23");
console.log(commas(1000000000.2), "1,000,000,000.2");
