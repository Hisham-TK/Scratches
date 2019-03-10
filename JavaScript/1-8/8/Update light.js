updateLight=c=>({green:'yellow',yellow:'red',red:'green'})[c];
updateLight=c=>c=='green'?'yellow':c=='yellow'?'red':'green';

console.log(updateLight('green'),'yellow');
console.log(updateLight('red'),'green');
console.log(updateLight('yellow'),'red');