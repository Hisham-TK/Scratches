class Vector {
    constructor(x, y) {
        Object.assign(this, {x, y});
        this.add = v => new Vector(this.x + v.x, this.y + v.y)
    }
}

t1 = new Vector(3, 4);
console.log(t1.x, 3);

t2 = new Vector(3, 4);
console.log(t2.y, 4);

console.log(typeof new Vector(3, 4).add, "function", "Vectors should have an .add() method.");
console.log((new Vector(3, 4).add(new Vector(1, 2))).constructor.name, "Vector", ".add should return a vector.");

console.log(new Vector(3, 4).add(new Vector(1, 2)).x, 4);
console.log(new Vector(3, 4).add(new Vector(1, 2)).y, 6);
