stringy=s=>[...Array(s).keys()].map(v=>++v%2).join``;

console.log(stringy(4));

console.log(typeof stringy(3), 'string',
    'Make sure it\'s a string not a number (the function is called stringy after all!)');

console.log(stringy(3)[0], '1',
    'Whoops your string doesnt start with a 1?');

for (let i = 0; i < 10; ++i) {
    let parameter = (Math.random() * 50 + 1) | 0;
    console.log(stringy(parameter).length, parameter, 'Wrong length on ' + parameter);
}
