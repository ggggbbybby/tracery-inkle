// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();

const tracery = require('tracery-grammar');
const grammar = require('./grammar.js');
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
  //const oldpattern = grammar.flatten("#origin#").trim().split(' ');
  const mirror = array => array.slice().concat(array.slice().reverse().slice(1));
  const pattern = mirror(grammar.flatten("#origin#").trim().split(" "));

  const num_rows = 5;
  const hex_height = 48;
  const hex_width = hex_height / 3;
  
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
  
  const colors = {};
  pattern.forEach(color => colors[color] = (colors[color] || 0) + 1);
  
  const odd_row = pattern.filter((thread, index) => index % 2 == 0);
  const even_row = pattern.filter((thread, index) => index % 2 == 1);
  const rows = [odd_row, even_row, odd_row, even_row, odd_row];
  let x = 2;
  let y = hex_width / 2;
  let threads = [];
  
  rows.forEach((row, row_index) => {
    row.forEach(thread => {
      threads.push({points: points(x, y), color: thread});
      x += hex_width;
    })
    
    x = (row_index % 2 == 0) ? (2 + hex_width/2) : (2);
    y += hex_height - hex_width / 2;
  })
  
  response.render('inkle', { pattern: threads, width: pattern_width, height: pattern_height, colors: colors, flat_pattern: pattern });
});


// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
