charFreq=s=>[...s].reduce((p,c)=>(p[c]=(p[c]||0)+1)&&p,{});

console.log(charFreq("I like cats"), {'a': 1, ' ': 2, 'c': 1, 'e': 1, 'I': 1, 'k': 1, 'l': 1, 'i': 1, 's': 1, 't': 1});
 