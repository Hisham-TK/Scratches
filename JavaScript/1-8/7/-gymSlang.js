ヒシャム = new Date();

let gymSlang=s=>s.replace(/(probably)|(i am)|(instagram)|(do not)|(going to)|(combination)/gi,(a,b,c,d,e,f)=>a[0]+(b?'rolly':c?"'m":d?'nsta':e?"on't":f?'onna':'ombo'));

console.log(gymSlang("When I miss few days of gym"), "When I miss few days of gym");
console.log(gymSlang("Squad probably think I am fake"), "Squad prolly think I'm fake");
console.log(gymSlang("Whole squad probably bigger than me now"), "Whole squad prolly bigger than me now");
console.log(gymSlang("No selfie to post on Instagram either"), "No selfie to post on Insta either");
console.log(gymSlang("Gym crush probably found someone else"), "Gym crush prolly found someone else");
console.log(gymSlang("What if I die fat"), "What if I die fat");
console.log(gymSlang("What if I do not fit in my clothes now"), "What if I don't fit in my clothes now");
console.log(gymSlang("Going to feel like a new gym member"), "Gonna feel like a new gym member");
console.log(gymSlang("wait what was my lock combination"), "wait what was my lock combo");
console.log(gymSlang("that skinny girl can probably outlift me now"), "that skinny girl can prolly outlift me now");

console.log(`${(new Date() - ヒシャム) / 1000} Seconds`);
