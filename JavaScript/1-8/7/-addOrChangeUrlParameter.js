_ = new Date();

addOrChangeUrlParameter=(u,p)=>(x=u.match(p.match(/^\w+/)))?u.slice(0,x[2]):u+(u.match(/\?/)?'&':'?')+p;
console.log(addOrChangeUrlParameter("www.example.com", "key=value"),'www.example.com?key=value');
console.log(addOrChangeUrlParameter("www.example.com?key=value", "key2=value2" ),'www.example.com?key=value&key2=value2');
console.log(addOrChangeUrlParameter("www.example.com?key=oldValue", "key=newValue" ),'www.example.com?key=newValue');

console.log(`${(new Date() - _) / 1000} second`);