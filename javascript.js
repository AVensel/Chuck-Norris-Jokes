var jokes =
['Chuck Norris built the hospital he was born in.',
'A cop pulled Chuck Norris over once. Chuck Norris let him go with a warning.',
'Did you know that Chuck Norris was in Star Wars? He was The Force.',
'Chuck Norris turns 79 years old this week. Or rather, 79 turns Chuck Norris.',
'When Chuck Norris sends in his taxes, he sends blank forms and includes only' +
   ' a picture of himself, crouched and ready to attack. Chuck Norris has' +
   ' never paid taxes. Ever.',
'Chuck Norris is the only man to ever defeat a brick wall in a game of tennis.',
'Time waits for no man. Unless that man is Chuck Norris.',
'Chuck Norris sheds his skin twice a year.',
'Chuck Norris does not sleep. He waits.',
'Chuck Norris\' tears cure cancer. Too bad he has never cried.',
'When Chuck Norris falls in water, Chuck Norris doesn\'t get wet. Water gets Chuck Norris.',
'If at first you don\'t succeed, you\'re not Chuck Norris.',
'Chuck Norris doesn\'t actually write books, the words assemble themselves out of fear.',
'On his birthday, Chuck Norris randomly selects one lucky child to be thrown into the sun.',
'Chuck Norris ordered a Big Mac at Burger King, and got one.',
'Chuck Norris can slam a revolving door.',
'Chuck Norris can touch MC Hammer.',
'Chuck Norris didn\'t dial the wrong number. You answered the wrong phone.',
'The First rule of Chuck Norris is: you do not talk about Chuck Norris.',
'Chuck Norris counted to infinity... Twice.',
'When the Boogeyman goes to sleep at night he checks his closet for Chuck Norris.',
'Chuck Norris can win a game of Connect Four in only three moves.',
'If you spell Chuck Norris in Scrabble, you win. Forever.',
'When Chuck Norris was denied an Egg McMuffin at McDonald\'s because' +
  ' it was 10:35 a.m., he roundhouse kicked the store so hard it became a Wendy\'s.',
'Chuck Norris CAN believe it\'s not butter.',
'Chuck Norris always knows the EXACT location of Carmen SanDiego.',
'Chuck Norris destroyed the periodic table, because Chuck Norris' +
  ' only recognizes the element of surprise.',
'Chuck Norris can judge a book by its cover.',
'Chuck Norris is the reason Waldo is hiding.',
'In a fight between Batman and Darth Vader, the winner would be Chuck Norris.',
'When Chuck Norris does division, there are no remainders.',
'Chuck Norris doesn\'t breathe, he holds air hostage.',
];

function newJoke() {
  var randomNumber = Math.floor(Math.random() * (jokes.length));
  document.getElementById('jokeDisplay').innerHTML = jokes[randomNumber];
}
