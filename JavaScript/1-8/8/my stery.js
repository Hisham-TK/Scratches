_=new Date();

mystery=()=>({sanity: 'Hello'});

console.log(mystery());
console.log(mystery().sanity);


console.log(`${(new Date()-_)/1000} second`);