ヒシャム = new Date();

// rooms = {
//     room_1: {name: '', description: '', completed: ''},
//     room_2: {name: '', description: '', completed: ''},
//     room_3: {name: '', description: '', completed: ''}
// }

(r1={name:'',description:'',completed:''},rooms={r1,r2:r1,r3:r1});

const keys = Object.keys(rooms);
console.log(keys.length >= 3, true);
keys.forEach(name => {
    console.log(typeof(rooms[name]) === 'object', `${name} should be an object`)
});
keys.forEach(name => {
    let numKeys = Object.keys(rooms[name]).length;
    console.log(numKeys >= 3, `not enough properties for room: ${name}`)
});

console.log(`${(new Date() - ヒシャム) / 1000} Seconds`);
