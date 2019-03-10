anyArrows=a=>a.some(v=>!v.damaged)

console.log(anyArrows([]), false, "Should handle empty quiver");
console.log(anyArrows([{range: 5}, {range: 10, damaged: true}, {damaged: true}]), true, "Should handle quiver with undamaged arrows");
console.log(anyArrows([{range: 10, damaged: true}, {damaged: true}]), false, "Should handle quiver with damaged arrows");