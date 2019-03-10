toWeirdCase=s=>s.split` `.map(w=>[...w].map((l,i)=>l['to'+(i%2?'Lower':'Upper')+'Case']()).join``).join` `;
toWeirdCase=s=>s.split` `.map(w=>w.replace(/./g,(v,i)=>v['to'+(i%2?'Lower':'Upper')+'Case']())).join` `;
toWeirdCase=s=>s.replace(/\w+/g,x=>x.replace(/./g,(v,i)=>v['to'+(i%2?'Lower':'Upper')+'Case']()));


console.log(toWeirdCase('THIS'), 'ThIs');
console.log(toWeirdCase('This'), 'ThIs');
console.log(toWeirdCase('is'), 'Is');
console.log(toWeirdCase('This is a test'), 'ThIs Is A TeSt');
console.log(toWeirdCase("String"), "StRiNg");
console.log(toWeirdCase("Weird string case"), "WeIrD StRiNg CaSe");