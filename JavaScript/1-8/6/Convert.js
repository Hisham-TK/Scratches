var Alphabet = {
    BINARY: '01',
    OCTAL: '01234567',
    DECIMAL: '0123456789',
    HEXA_DECIMAL: '0123456789abcdef',
    ALPHA_LOWER: 'abcdefghijklmnopqrstuvwxyz',
    ALPHA_UPPER: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    ALPHA: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
    ALPHA_NUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
};

function convert(input, source, target) {
    {}
    if (source === '01') {
        // Binary to  ?!
        return {OCTAL: parseInt(),DECIMAL:parseInt(input,2) ,}[target]
    }
    // else {
    //     if (source === Alphabet.OCTAL){
    //         return {}[target]
    //     }
    // }
}

var bin = Alphabet.BINARY, oct = Alphabet.OCTAL, dec = Alphabet.DECIMAL, hex = Alphabet.HEXA_DECIMAL,
    allow = Alphabet.ALPHA_LOWER, alup = Alphabet.ALPHA_UPPER, alpha = Alphabet.ALPHA, alnum = Alphabet.ALPHA_NUMERIC;
console.log(convert("15", dec, bin), '1111', '"15" dec -> bin');
console.log(convert("15", dec, oct), '17', '"15" dec -> oct');
console.log(convert("1010", bin, dec), '10', '"1010" bin -> dec');
console.log(convert("1010", bin, hex), 'a', '"1010" bin -> hex');
console.log(convert("0", dec, alpha), 'a', '"0" dec -> alpha');
console.log(convert("27", dec, allow), 'bb', '"27" dec -> alpha_lower');
console.log(convert("hello", allow, hex), '320048', '"hello" alpha_lower -> hex')
console.log(convert("SAME", alup, alup), 'SAME', '"SAME" alpha_upper -> alpha_upper');
