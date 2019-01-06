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
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get('/api', function(request, response) {
  const pattern = grammar.flatten("#origin#");
  
  //response.writeHead(200, {"Content-Type": "text/plain"});
  //response.write(pattern);
  response.render('inkle', { title: 'Hey', pattern: pattern });
});


// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
