ヒシャム = new Date();

// wheresWally=s=>(x=/(^|\b\W)Wally\b/.exec(s))?(n=x['index'])>0?++n:0:-1
// wheresWally=(s,r=s.search(/(^|\b[\W])Wally\b/))=>r>0?++r:r
wheresWally=s=>(' '+s).search(/(^| )Wally\b/);
wheresWally=s=>` ${s}`.search(/ Wally\b/);

console.log(wheresWally(""),-1);
console.log(wheresWally("DWally"),-1);
console.log(wheresWally(".Wally"),-1);

console.log(wheresWally("Wally"),0);
console.log(wheresWally("Where's Wally"),8);
console.log(wheresWally("Hi Wally."),3);

console.log(`${(new Date() - ヒシャム) / 1000} Seconds`);
