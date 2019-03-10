function vowelHarmony(word) {
    return word+' *';
}

tests = [
    ["ablak", "ablaknak"],
    ["tükör", "tükörnek"],
    ["keret", "keretnek"],
    ["otthon", "otthonnak"],
    ["virág", "virágnak"],
    ["tett", "tettnek"],
    ["rokkant", "rokkantnak"],
    ["rossz", "rossznak"],
    ["gonosz", "gonosznak"],
];

for (i = 0, l = tests.length; i < l; i++) {
    input = tests[i][0];
    expected = tests[i][1];
    console.log(vowelHarmony(input), expected);
    console.log(input + " -> " + expected);
}
