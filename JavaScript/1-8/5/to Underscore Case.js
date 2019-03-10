ヒシャム = new Date();

// toUnderscore=s=>`${s}`.replace(/(\B[A-Z])/g,'_$1').toLowerCase();
toUnderscore=s=>`${s}`.replace(/.(?=[A-Z])/g,'$&_').toLowerCase();

console.log(toUnderscore('Am7Days'),'am7_days');
console.log(toUnderscore('App7Test'),'app7_test');
console.log(toUnderscore('TestController'),'test_controller');
console.log(toUnderscore('MoviesAndBooks'),'movies_and_books');
console.log(toUnderscore('ThisIsBeautifulDay'),'this_is_beautiful_day');
console.log(toUnderscore('My3CodeIs4TimesBetter'),'my3_code_is4_times_better');
console.log(toUnderscore(1),'1');

console.log(`${(new Date() - ヒシャム) / 1000} second`);