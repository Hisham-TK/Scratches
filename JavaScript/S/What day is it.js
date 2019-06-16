ヒシャム = new Date();

whatDay=d=>'Sun Mon Tues Wednes Thurs Fri Satur'.split` `[new Date(d).getDay()]+'day';

console.log(whatDay('2018-10-31'), 'Wednesday');
console.log(whatDay('Oct 30, 2018'), 'Tuesday');
console.log(whatDay('2017-11-5'), 'Sunday');
console.log(whatDay('Nov 10, 2018'), 'Saturday');
console.log(whatDay('1-1-1'), 'Monday');
console.log(whatDay('2020-2-20'), 'Thursday');
console.log(whatDay('1111-1-11'), 'Wednesday');

console.log(`${(new Date() - ヒシャム) / 1000} Seconds`);
