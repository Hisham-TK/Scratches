ヒシャム = new Date();

// generateShape=n=>[...Array(n)].map(v=>'+'.repeat(n)).join`\n`
// generateShape=n=>('+'.repeat(n)+'\n').repeat(n).trim()
generateShape=n=>Array(n).fill('+'.repeat(n)).join`\n`

console.log( generateShape(8) , '++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++' )

console.log(`${(new Date() - ヒシャム) / 1000} second`);
