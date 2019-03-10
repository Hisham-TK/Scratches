validBraces=$=_=>(f=/\(\)|\[]|{}/).test(_)?$(_.replace(f,'')):!_;
validBraces=$=_=>_!==(_=_.replace(/\(\)|\[]|{}/,''))?$(_):!_;

console.log(validBraces("()"), true);
console.log(validBraces("[(])"), false);
console.log(validBraces("(([)])"), false);
console.log(validBraces("(([)]())"), false);
console.log(validBraces("({}[]())"), true);
console.log(validBraces("({[]})"), true);
console.log(validBraces("(){}[]"), true);
