var dictionary = {
  "origin":[
    "#solidA##pattern#"
  ],
  "pattern":[
    "#solidA##B##A##solidB##center#",
    "[pa:#A#][pb:#B#]#solidA##pb##pa##pb##pa##solidB##center#",
    "[pa:#A#][pb:#B#]#pa##pa##pb##pa##pb##pb##center#",
    "[pa:#A#][pb:#B#]#pa##pa##pa##pb##pa##pb##pa##pb##pb##pb##center#"
  ],
  "center":[
    "#openchain#",
    "#closedchain#",
    "#blockchain#",
    "#brokenchain#",
    "#procchain#",
    "#oddSolidA#",
    "#pattern#",
    "#solidA##oddSolidB#"
  ],
  "openchain":[
    "[oa:#A#]#oa##oa##B##oa##oa#"
  ],
  "closedchain":[
    "[cca:#A#]#cca##cca##cca#"
  ],
  "blockchain":[
    "[bca:#A#][bcb:#B#]#bca##bca##bca##bcb##bca##bcb##bca##bca##bca#"
  ],
  "brokenchain":[
    "[bka:#A#][bkb:#B#]#bka##bkb##bkb##bkb##bka#"
  ],
  "procchain":[
    "[pcAs:#oddSolidA#][pcb:#B#]#pcAs##pcb##pcAs##pcb##pcAs#",
    "[pca:#A#]#pca##oddSolidB##pca#"
  ],
  "oddSolidA":[
    "[X:#A#]#oddSolid#"
  ],
  "oddSolidB":[
    "[X:#B#]#oddSolid#"
  ],
  "solidA":[
    "[X:#A#]#solid#"
  ],
  "solidB":[
    "[X:#B#]#solid#"
  ],
  "oddSolid":[
    "#X#",
    "#X##X##X#",
    "#X##X##X##X##X#"
  ],
  "solid":[
    "#X#",
    "#X##X#",
    "#X##X##X#",
    "#X##X##X##X#",
    "#X##X##X##X##X#"
  ],
  "A":["#color# "],
  "B":["#color# "],
  "color":[
    "Red",
    "Orange",
    "Wheat",
    "\\#202020",
    "SteelBlue",
    "DodgerBlue",
    "CornflowerBlue",
    "DarkOrchid",
    "Violet",
    "BlueViolet",
    "Indigo",
    "LightSalmon",
    "FireBrick",
    "Crimson",
    "LightSkyBlue",
    "LightYellow",
    "White",
    "Azure",
    "Turquoise",
    "PaleTurquoise",
    "PeachPuff",
    "RosyBrown",
    "LightGreen",
    "LightCyan",
    "Honeydew",
    "SteelBlue",
    "DarkOrange",
    "Olive"
  ]
};
var tracery = require('tracery-grammar');
var grammar = tracery.createGrammar(dictionary);
grammar.addModifiers(tracery.baseEngModifiers);
module.exports = grammar