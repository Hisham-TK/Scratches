toCurrency=p=>[...p+''].reverse().join``.match(/.{3}|.{2}|./g).map(v=>[...v].reverse().join``).reverse().join`,`;
toCurrency=p=>`${p}`.replace(/(.)(?=(.{3})+$)/g,'$1,');
toCurrency=p=>p.toLocaleString();

console.log(toCurrency(123456), "123,456");
console.log(toCurrency(1234), "1,234");
console.log(toCurrency(123), "123");
console.log(toCurrency(123456789012), "123,456,789,012");
