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
  const pattern = grammar.flatten("#origin#").trim().split(' ');
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
  const pattern_width = 4 + hex_width * (threads_per_row + 1);
  const pattern_height = hex_height * num_rows;
  
  const odd_row = pattern.filter((thread, index) => index % 2 == 0);
  const even_row = pattern.filter((thread, index) => index % 2 == 1);
  const rows = odd_row + even_row + odd_row + even_row + odd_row;
  
  let x = 2;
  let y = hex_width / 2;
  let threads = [];
  odd_row.forEach(thread => {
    threads.push({points: points(x, y), color: thread});
    x = x + hex_width;
  });
  
  x = 2 + hex_width / 2;
  y = hex_height;
  even_row.forEach(thread => {
    threads.push({points: points(x, y), color: thread});
    x = x + hex_width;
  });
  
  x = 2;
  y = y + hex_height - hex_width / 2;
  odd_row.forEach(thread => {
    threads.push({points: points(x, y), color: thread});
    x = x + hex_width;
  });
  
  x = 2 + hex_width / 2;
  y = y + hex_height - hex_width / 2;
  even_row.forEach(thread => {
    threads.push({points: points(x, y), color: thread});
    x = x + hex_width;
  });
  
  x = 2;
  y = y + hex_height - hex_width / 2;
  odd_row.forEach(thread => {
    threads.push({points: points(x, y), color: thread});
    x = x + hex_width;
  });
  console.log(threads);
  
  
  //response.writeHead(200, {"Content-Type": "text/plain"});
  //response.write(pattern);
  response.render('inkle', { title: 'Hey', pattern: threads, width: pattern_width, height: pattern_height });
});


// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
