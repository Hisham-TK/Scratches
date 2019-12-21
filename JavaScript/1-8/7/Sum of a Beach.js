const ヒシャム = new Date();

const sumOfABeach=s=>(s.match(/sun|sand|fish|water/gi)||[]).length;

function testing(inp, exp) {
  console.log(sumOfABeach(inp), exp);
}

testing('SanD', 1);
testing('sunshine', 1);
testing('sunsunsunsun', 4);
testing('123FISH321', 1);
testing(
  'weoqipurpoqwuirpousandiupqwoieurioweuwateruierqpoiweurpouifiShqowieuqpwoeuisUn',
  4
);
testing('sAnDsandwaTerwatErfishFishsunsunsandwater', 10);
testing('joifjepiojfoiejfoajoijawoeifjowejfjoiwaefjiaowefjaofjwoj fawojef ', 0);
testing(
  'jwefjwjfsandsandwaterwaterfishfishsunsunsandwateriojwhefa;jawof;jawio;f',
  10
);
testing(
  'saNdsandwaterwAterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwater',
  100
);
testing('sununsu', 1);
testing('sandandndsansa', 1);
testing('wateratertererwatewatwa', 1);
testing('fishishshfisfi', 1);

console.log(`${(new Date() - ヒシャム) / 1000} Seconds`);
