// client-side js
// run by the browser each time your view template is loaded

const tracery = require('tracery-grammar');
const grammar = {"origin":["[pad:#solidA#]#pad##pattern##pad#"],"pattern":["[pAs:#solidA#][pa:#A#][pBs:#solidB#][pb:#B#]#pAs##pb##pa##pBs##center##pBs##pa##pb##pAs#","[pAs:#solidA#][pa:#A#][pBs:#solidB#][pb:#B#]#pAs##pb##pa##pb##pa##pBs##center##pBs##pa##pb##pa##pb##pAs#","[pa:#A#][pb:#B#]#pa##pa##pb##pa##pb##pb##center##pb##pb##pa##pb##pa##pa#","[pa:#A#][pb:#B#]#pa##pa##pa##pb##pa##pb##pa##pb##pb##pb##center##pb##pb##pb##pa##pb##pa##pb##pa##pa##pa#"],"center":["#openchain#","#closedchain#","#blockchain#","#brokenchain#","#procchain#","#solidA#","[cAs:#solidA#][cBs:#solidB#]#cAs##cBs##cAs#"],"openchain":["[oa:#A#]#oa##oa##B##oa##oa#"],"closedchain":["[cca:#A#]#cca##cca##cca#"],"blockchain":["[bca:#A#][bcb:#B#]#bca##bca##bca##bcb##bca##bcb##bca##bca##bca#"],"brokenchain":["[bka:#A#][bkb:#B#]#bka##bkb##bkb##bkb##bka#"],"procchain":["[pcAs:#solidA#][pcb:#B#]#pcAs##pcb##pcAs##pcb##pcAs#","[pca:#A#][pcBs:#solidB#]#pca##pcBs##pca#"],"solidA":["[X:#A#]#solid#"],"solidB":["[X:#B#]#solid#"],"solid":["#X#","#X##X#","#X##X##X#","#X##X##X##X#","#X##X##X##X##X#"],"A":["#color# "],"B":["#color# "],"color":["Red","Orange","Wheat","\\#202020","SteelBlue","DodgerBlue","CornflowerBlue","DarkOrchid","Violet","BlueViolet","Indigo","LightSalmon","FireBrick","Crimson","LightSkyBlue","LightYellow","White","Azure","Turquoise","PaleTurquoise","PeachPuff","RosyBrown","LightGreen","LightCyan","Honeydew","SteelBlue","DarkOrange","Olive"]};
const pattern = tracery.createGrammar(grammar).flatten("#origin#");

// define variables that reference elements on our page
const container = document.getElementById('inkle-container');
const pattern_code = document.createElement('code');
pattern_code.innerHTML = pattern;
container.appendChild(pattern_code);
console.log(pattern_code);
