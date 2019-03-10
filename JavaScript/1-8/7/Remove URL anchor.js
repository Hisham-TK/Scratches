d = new Date();

removeUrlAnchor=u=>u.replace(/#.+/,'');

console.log(removeUrlAnchor('www.google.com#about'), 'www.google.com');
console.log(removeUrlAnchor('www.google.com#section1'), 'www.google.com');
console.log(removeUrlAnchor('www.google.com#top'), 'www.google.com');
console.log(removeUrlAnchor('www.google.com?page=1'),'www.google.com?page=1');

console.log(`${(new Date() - d) / 1000} second`);