/*
 * Programming Quiz: Factorials (4-7)
 */

for (var len = 3; len <= 12; len++){
    let eq = []
    for (var num = len; num > 0;num--){
        eq.push(num)
    }
    console.log(`${len}! = ${eq.join` * `} = ${eval(eq.join` * `)}`)
}

var solution = 1;
for (var num = 2; num <= 12 ; num ++){
    solution *= num;
}
console.log(solution);
