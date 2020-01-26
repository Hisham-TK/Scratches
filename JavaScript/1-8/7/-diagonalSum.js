ヒシャム = new Date();

diagonalSum=a=>a.reduce((p,c,i)=>p+c[i],0);

console.log(diagonalSum([[12]]), 12);
console.log(diagonalSum([[1, 2], [3, 4]]), 5);
console.log(diagonalSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), 15);
console.log(diagonalSum([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]), 34);

console.log(`${(new Date() - ヒシャム) / 1000} second`);
