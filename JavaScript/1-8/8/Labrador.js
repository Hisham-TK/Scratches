class Labrador extends Dog {
    constructor(name, age, gender, master) {
        super(name, age, gender, 'Labrador', 'Large', master, true)
    }
}

var spitsy = new Labrador("Spitsy", 10, "Male", "Donald");
console.log(spitsy.name, "Spitsy");
console.log(spitsy.age, 10);
console.log(spitsy.gender, "Male");
console.log(spitsy.species, "Labrador");
console.log(spitsy.legs, 4);
console.log(spitsy.size, "Large");
console.log(spitsy.master, "Donald");
console.log(spitsy.loyal, true);
var edward = new Labrador("Edward", 3, "Male", "Emma");
console.log(edward.name, "Edward");
console.log(edward.age, 3);
console.log(edward.gender, "Male");
console.log(edward.species, "Labrador");
console.log(edward.legs, 4);
console.log(edward.size, "Large");
console.log(edward.master, "Emma");
console.log(edward.loyal, true);