correctPolishLetters=s=>s.replace(/./g,v=>(i='ąćęłńóśźż'.indexOf(v))>-1?'acelnoszz'[i]:v);

console.log(correctPolishLetters("Jędrzej Błądziński"),"Jedrzej Bladzinski");
console.log(correctPolishLetters("Lech Wałęsa"),"Lech Walesa");
console.log(correctPolishLetters("Maria Skłodowska-Curie"),"Maria Sklodowska-Curie");
