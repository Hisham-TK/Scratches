howManyDalmatians=n=>n<=10?"Hardly any":n<=50?"More than a handful!":n===101?"101 DALMATIANS!!!":"Woah that's a lot of dogs!";

console.log(howManyDalmatians(26), "More than a handful!");
console.log(howManyDalmatians(8), "Hardly any");
console.log(howManyDalmatians(14), "More than a handful!");
console.log(howManyDalmatians(80), "Woah that's a lot of dogs!");
console.log(howManyDalmatians(100), "Woah that's a lot of dogs!");
console.log(howManyDalmatians(101), "101 DALMATIANS!!!");