class Ship{
    constructor(draft,crew) {
        Object.assign(this,{draft,crew});
        this.isWorthIt=()=>draft-crew*1.5>20
    }
}

let emptyShip = new Ship(0,0);
console.log(emptyShip.isWorthIt(),false);

let ship1 = new Ship(22,1);
console.log(ship1.isWorthIt(),true);

let ship2 = new Ship(21.5,1);
console.log(ship2.isWorthIt(),false);