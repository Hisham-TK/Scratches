/*
  Recreate filler method in Array Object
*/

[1,2,3,4,5,6].filter(v=>v<4);
// [1,2,3]

delete(Array.prototype.filter)
// true

[1,2,3,4,5,6].filter(v=>v<4);
// [1,2,3,4,5,6].filter is not a function

// recreate prototype of filter in Array Object but with native js
Array.prototype.filter=function(f){return this.reduce((p,c)=>f(c)?[...p,c]:p,[])};

[1,2,3,4,5,6].filter(v=>v<4);
// [1,2,3]


