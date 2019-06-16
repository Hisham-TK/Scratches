ヒシャム = new Date();

// partlist=(a,i,r=[],s=a.join` `)=>{while(r.length<a.length-1)r.push([s.slice(0,(i=s.indexOf(' ',i))),s.slice(++i)]);return r};
// partlist=(a,i,s=a.join` `)=>a.slice(1).reduce(p=>p.push([s.slice(0,i=s.indexOf(' ',i)),s.slice(++i)])&&p,[]);
// partlist=(a,i,s=a.join` `)=>a.slice(1).map(_=>[s.slice(0,i=s.indexOf(' ',i)),s.slice(++i)]);
partlist=a=>a.map((v,i)=>[a.slice(0,i).join` `,a.slice(i).join` `]).slice(1);
console.log(partlist(["I", "wish", "I", "hadn't", "come"]),
    [["I", "wish I hadn't come"], ["I wish", "I hadn't come"], ["I wish I", "hadn't come"], ["I wish I hadn't", "come"]]);
console.log(partlist(["cdIw", "tzIy", "xDu", "rThG"]),
    [["cdIw", "tzIy xDu rThG"], ["cdIw tzIy", "xDu rThG"], ["cdIw tzIy xDu", "rThG"]]);
console.log(partlist(["vJQ", "anj", "mQDq", "sOZ"]),
    [["vJQ", "anj mQDq sOZ"], ["vJQ anj", "mQDq sOZ"], ["vJQ anj mQDq", "sOZ"]]);

console.log(`${(new Date() - ヒシャム) / 1000} Seconds`);
