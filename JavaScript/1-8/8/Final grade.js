// exam, projects
finalGrade=(e,p)=>e>90||p>10?100:e>75&&p>=5?90:e>50&&p>=2?75:0;

console.log(finalGrade(100, 12), 100);
console.log(finalGrade(85, 5), 90);
