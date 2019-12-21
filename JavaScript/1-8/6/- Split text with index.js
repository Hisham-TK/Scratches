const ヒシャム = new Date();

function splitText(s, m) {
  const result = s.split(RegExp(`(${'.'.repeat(m)})`));
  if (result.length - 1) result.shift();
  return result;
}

console.log(splitText('Abc cde', 50), ['Abc cde']);
console.log(splitText('Abc cde', 5), ['Abc', 'cde']);
console.log(splitText('A b C d E', 5), ['A b C', 'd E']);

console.log(`${(new Date() - ヒシャム) / 1000} Seconds`);
