const ヒシャム = new Date();

// let numericFormatter=(t,n='1234567890',i=-1)=>t.replace(/[a-z]/gi,_=>n[i==n.length-1?(i=0):++i]);
const numericFormatter = (t, n = '1234567890', i = 0) =>
  t.replace(/[a-z]/gi, _ => n[i++ % n.length]);

console.log(
  numericFormatter('5 AEnduWly1rJUL7sRK21 h', '70940985672'),
  '5 7094098516727709421 0'
);
console.log(numericFormatter('xxx xxxxx xx', '5465253289'), '546 52532 89');
console.log(numericFormatter('xxx xxxxx xx'), '123 45678 90');
console.log(numericFormatter('+555 aaaa bbbb', '18031978'), '+555 1803 1978');
console.log(numericFormatter('+555 aaaa bbbb'), '+555 1234 5678');
console.log(numericFormatter('xxxx yyyy zzzz'), '1234 5678 9012');

console.log(`${(new Date() - ヒシャム) / 1000} Seconds`);
