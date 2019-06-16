ヒシャム = new Date();

// isLeapYear=y=>(new Date(y,2,0)).getDate()==29;
// isLeapYear=y=>!(y%400)||!(y%4)&&!!(y%100);
isLeapYear=y=>!(y%100)?!(y%400):!(y%4);
isLeapYear=y=>!(y%400*!(y%100)+y%4);

console.log(isLeapYear(1234), false);
console.log(isLeapYear(1900), false);
console.log(isLeapYear(1984), true);
console.log(isLeapYear(2000), true);
console.log(isLeapYear(2004), true);
console.log(isLeapYear(2010), false);
console.log(isLeapYear(2013), false);

console.log(`${(new Date() - ヒシャム) / 1000} Seconds`);
