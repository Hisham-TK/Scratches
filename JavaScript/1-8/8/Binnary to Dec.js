binToDec=b=>parseInt(b,2);

[ ["1",1], ["0",0], ["1001001", 73] ].forEach( ([inp, exp]) => console.log( binToDec(inp), exp ) );
