ヒシャム = new Date();

RegExp.clone = function(regex) {
    return regex
};

RegExp.prototype.clone = function() {
    return this
};

let regex = /[abc]/g,
    clone = regex.clone(),
    clone2 = RegExp.clone(regex),
    input = "abcba", output;

output = regex.exec(input);
console.log(
    clone.exec(input),
    output,
    // "regex.clone() gives different results (first iteration)"
);
console.log(
    clone2.exec(input),
    output,
    // "RegExp.clone(regex) gives different results (first iteration)"
);

output = regex.exec(input);
console.log(
    clone.exec(input),
    output,
    // "regex.clone() gives different results (second iteration)"
);
console.log(
    clone2.exec(input),
    output,
    // "RegExp.clone(regex) gives different results (second iteration)"
);



console.log(`${(new Date() - ヒシャム) / 1000} second`);