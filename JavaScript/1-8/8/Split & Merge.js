splitAndMerge=(s,_)=>s.replace(/[\w!]+/g,x=>[...x].join(_));

function splitAndMerge(s, _) {
    return s.replace(/\S+/g, w => w.replace(/.(?=.)/g, '$&' + _));
}

console.log(splitAndMerge("My name is John"," ") , "M y n a m e i s J o h n");
console.log(splitAndMerge("My name is John","-") , "M-y n-a-m-e i-s J-o-h-n");
console.log(splitAndMerge("Hello World!",".") , "H.e.l.l.o W.o.r.l.d.!");
console.log(splitAndMerge("Hello World!",",") , "H,e,l,l,o W,o,r,l,d,!");

