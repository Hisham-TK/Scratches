_ = new Date();

function sortByJohn(str){
    var result=[];
    for(let i=0;i<=str.length;i++){          //Traversal string
        let char=String(str[i]);               //Get current char
        if(char==="J") result.push(char);       //If char is
        if(char==="o") result.push(char);       // J o h n
        if(char==="h") result.push(char);       //Puts char to the right side
        if(char==="n") result.push(char);
        result.unshift(char);                  //Else, puts char to the left side
    }
    return result.join(" ");                 //Join the result with a space and return
}

correctResult=s=>((x=s.replace(/(    )|(  +)| |^undefined/g,(x,y,z)=>y?'  ':z?' ':'')).match(/[^John]/g)||[]).reverse().join``+((z=x.match(/[John]/g))?' '+z.slice(z.length/2).join``:'');
correctResult=s=>((x=s.replace(/( +)|^undefined/g,(x,y)=>y?' '.repeat(y.length/2|0):'')).match(/[^John]/g)||[]).reverse().join``+((z=x.match(/[John]/g))?' '+z.slice(z.length/2).join``:'');

jr=sortByJohn("Hi");
console.log(correctResult(jr) , "Hi" ,jr);
console.log(correctResult(jr) === "Hi");

jr=sortByJohn("");
console.log(correctResult(jr) , "" ,jr);
console.log(correctResult(jr) === "");

jr=sortByJohn("John say hello");
console.log(correctResult(jr) , " say ell Johnho" ,jr);
console.log(correctResult(jr) === " say ell Johnho");

jr=sortByJohn("Anne and John are good friends");
console.log(correctResult(jr) , "Ae ad  are gd frieds nnnJohnoon" ,jr);
console.log(correctResult(jr) === "Ae ad  are gd frieds nnnJohnoon");

jr=sortByJohn("My name is John");
console.log(correctResult(jr) , "My ame is  nJohn",jr);
console.log(correctResult(jr) === "My ame is  nJohn");

jr=sortByJohn("Hello World");
console.log(correctResult(jr), "Hell Wrld oo" ,jr);
console.log(correctResult(jr) === "Hell Wrld oo");

console.log(correctResult("undefined j D R Y i V     D b   A M   g a  " ) , ' ag MA bD  ViYRDj');
console.log(correctResult("undefined j D R Y i V     D b   A M   g a  " ) === ' ag MA bD  ViYRDj');

console.log(`${(new Date() - _) / 1000} second`);