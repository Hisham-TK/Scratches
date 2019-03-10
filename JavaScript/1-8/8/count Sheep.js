countSheep=n=>[...Array(n).keys()].map(v=>++v+' sheep...').join``;

console.log(countSheep(1), "1 sheep...");
console.log(countSheep(2), "1 sheep...2 sheep...");
console.log(countSheep(3), "1 sheep...2 sheep...3 sheep...");