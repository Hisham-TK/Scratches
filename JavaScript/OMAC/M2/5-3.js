/*
 * Programming Quiz: Build A Triangle (5-3)
 */

// creates a line of * for a given length
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.
function buildTriangle(len) {
    let result = '';
    for (let num = 1; num <= len; num++) {
        result += /* ' '.repeat(len - num) + */ makeLine(num)
    }
    return result
}
buildTriangle=n=>Array.from({length:n},(v,i)=>'* '.repeat(++i)+'\n').join``;
buildTriangle=n=>[...new Array(n)].map((v,i)=>'* '.repeat(++i)+'\n').join``;
buildTriangle=n=>[...new Array(n)].map((v,i)=>makeLine(++i)).join``;
console.log(buildTriangle(10),buildTriangle(10) == `* 
* * 
* * * 
* * * * 
* * * * * 
* * * * * * 
* * * * * * * 
* * * * * * * * 
* * * * * * * * * 
* * * * * * * * * * 
`);
