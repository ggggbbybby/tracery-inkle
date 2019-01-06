// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();

const tracery = require('tracery-grammar');
const rules = {"origin":["[pad:#solidA#]#pad##pattern##pad#"],"pattern":["[pAs:#solidA#][pa:#A#][pBs:#solidB#][pb:#B#]#pAs##pb##pa##pBs##center##pBs##pa##pb##pAs#","[pAs:#solidA#][pa:#A#][pBs:#solidB#][pb:#B#]#pAs##pb##pa##pb##pa##pBs##center##pBs##pa##pb##pa##pb##pAs#","[pa:#A#][pb:#B#]#pa##pa##pb##pa##pb##pb##center##pb##pb##pa##pb##pa##pa#","[pa:#A#][pb:#B#]#pa##pa##pa##pb##pa##pb##pa##pb##pb##pb##center##pb##pb##pb##pa##pb##pa##pb##pa##pa##pa#"],"center":["#openchain#","#closedchain#","#blockchain#","#brokenchain#","#procchain#","#solidA#","[cAs:#solidA#][cBs:#solidB#]#cAs##cBs##cAs#"],"openchain":["[oa:#A#]#oa##oa##B##oa##oa#"],"closedchain":["[cca:#A#]#cca##cca##cca#"],"blockchain":["[bca:#A#][bcb:#B#]#bca##bca##bca##bcb##bca##bcb##bca##bca##bca#"],"brokenchain":["[bka:#A#][bkb:#B#]#bka##bkb##bkb##bkb##bka#"],"procchain":["[pcAs:#solidA#][pcb:#B#]#pcAs##pcb##pcAs##pcb##pcAs#","[pca:#A#][pcBs:#solidB#]#pca##pcBs##pca#"],"solidA":["[X:#A#]#solid#"],"solidB":["[X:#B#]#solid#"],"solid":["#X#","#X##X#","#X##X##X#","#X##X##X##X#","#X##X##X##X##X#"],"A":["#color# "],"B":["#color# "],"color":["Red","Orange","Wheat","\\#202020","SteelBlue","DodgerBlue","CornflowerBlue","DarkOrchid","Violet","BlueViolet","Indigo","LightSalmon","FireBrick","Crimson","LightSkyBlue","LightYellow","White","Azure","Turquoise","PaleTurquoise","PeachPuff","RosyBrown","LightGreen","LightCyan","Honeydew","SteelBlue","DarkOrange","Olive"]};
const grammar = tracery.createGrammar(rules);

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

app.set('views', './views');
app.set('view engine', 'pug');

// http://expressjs.com/en/starter/basic-routing.html
app.get('/index', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get('/', function(request, response) {
  const pattern = grammar.flatten("#origin#");
  
  const num_rows = 5;
  const hex_height = 36;
  const hex_width = 12;
  
  const points = (x, y) => (
    [
      `${x},${y}`,
      `${x + hex_width/2},${y - hex_width/2}`,
      `${x + hex_width},${y}`,
      `${x + hex_width},${y + hex_height - hex_width}`,
      `${x + hex_width/2},${y + hex_height - hex_width/2}`,
      `${x},${y + hex_height - hex_width}`
    ].join(' ')
  )
  
  const threads_per_row = Math.ceil(pattern.length / 2);
  const pattern_width = hex_width * threads_per_row;
  const pattern_height = hex_height * num_rows;
  const rows = [...pattern, ...pattern, ...pattern.slice(0, threads_per_row + 1)];
  
  
  
  
  
  
  const threads = [
    { points: "2,7 8,1 14,7 14,31 8,37 2,31", color: "Violet" },
    { points: "14,7 20,1 26,7 26,31 20,37 14,31", color: "Indigo" },
    { points: "26,7 32,1 38,7 38,31 32,37 26,31", color: "Indigo" },
    { points: "38,7 44,1 50,7 50,31 44,37 38,31", color: "Violet" },
    { points: "50,7 56,1 62,7 62,31 56,37 50,31", color: "Indigo" },
    { points: "62,7 68,1 74,7 74,31 68,37 62,31", color: "Violet" },
    { points: "74,7 80,1 86,7 86,31 80,37 74,31", color: "Indigo" },
    { points: "86,7 92,1 98,7 98,31 92,37 86,31", color: "Indigo" },
    { points: "98,7 104,1 110,7 110,31 104,37 98,31", color: "Violet" },
    { points: "8,37 14,31 20,37 20,61 14,67 8,61", color: "Indigo" },
    { points: "20,37 26,31 32,37 32,61 26,67 20,61", color: "White" },
    { points: "32,37 38,31 44,37 44,61 38,67 32,61", color: "Violet" },
    { points: "44,37 50,31 56,37 56,61 50,67 44,61", color: "Indigo" },
    { points: "56,37 62,31 68,37 68,61 62,67 56,61", color: "Indigo" },
    { points: "68,37 74,31 80,37 80,61 74,67 68,61", color: "Violet" },
    { points: "80,37 86,31 92,37 92,61 86,67 80,61", color: "White" },
    { points: "92,37 98,31 104,37 104,61 98,67 92,61", color: "Indigo" },
    { points: "2,67 8,61 14,67 14,91 8,97 2,91", color: "Violet" },
    { points: "14,67 20,61 26,67 26,91 20,97 14,91", color: "Indigo" },
    { points: "26,67 32,61 38,67 38,91 32,97 26,91", color: "Indigo" },
    { points: "38,67 44,61 50,67 50,91 44,97 38,91", color: "Violet" },
    { points: "50,67 56,61 62,67 62,91 56,97 50,91", color: "Indigo" },
    { points: "62,67 68,61 74,67 74,91 68,97 62,91", color: "Violet" },
    { points: "74,67 80,61 86,67 86,91 80,97 74,91", color: "Indigo" },
    { points: "86,67 92,61 98,67 98,91 92,97 86,91", color: "Indigo" },
    { points: "98,67 104,61 110,67 110,91 104,97 98,91", color: "Violet" },
    { points: "8,97 14,91 20,97 20,121 14,127 8,121", color: "Indigo" },
    { points: "20,97 26,91 32,97 32,121 26,127 20,121", color: "White" },
    { points: "32,97 38,91 44,97 44,121 38,127 32,121", color: "Violet" },
    { points: "44,97 50,91 56,97 56,121 50,127 44,121", color: "Indigo" },
    { points: "56,97 62,91 68,97 68,121 62,127 56,121", color: "Indigo" },
    { points: "68,97 74,91 80,97 80,121 74,127 68,121", color: "Violet" },
    { points: "80,97 86,91 92,97 92,121 86,127 80,121", color: "White" },
    { points: "92,97 98,91 104,97 104,121 98,127 92,121", color: "Indigo" },
    { points: "2,127 8,121 14,127 14,151 8,157 2,151", color: "Violet" },
    { points: "14,127 20,121 26,127 26,151 20,157 14,151", color: "Indigo" },
    { points: "26,127 32,121 38,127 38,151 32,157 26,151", color: "Indigo" },
    { points: "38,127 44,121 50,127 50,151 44,157 38,151", color: "Violet" },
    { points: "50,127 56,121 62,127 62,151 56,157 50,151", color: "Indigo" },
    { points: "62,127 68,121 74,127 74,151 68,157 62,151", color: "Violet" },
    { points: "74,127 80,121 86,127 86,151 80,157 74,151", color: "Indigo" },
    { points: "86,127 92,121 98,127 98,151 92,157 86,151", color: "Indigo" },
    { points: "98,127 104,121 110,127 110,151 104,157 98,151", color: "Violet" },
  ];
  
  //response.writeHead(200, {"Content-Type": "text/plain"});
  //response.write(pattern);
  response.render('inkle', { title: 'Hey', pattern: threads });
});


// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
