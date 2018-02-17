var express = require('express');
//var rowdy = require('rowdy-logger');
var request = require('request');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var app = express();
//var rowdyResults = rowdy.begin(app)

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('static'));


app.get('/', function(req, res) {
  var pokemonUrl = 'http://pokeapi.co/api/v2/pokemon/?limit=5';
  
  request(pokemonUrl, function(error, response, body) {
    var pokemon = JSON.parse(body).results;
    // res.send(pokemon);
    res.render('index', {pokemon: pokemon});
  });
});

app.use('/pokemon', require('./routes/pokemon'));

var server = app.listen(process.env.PORT || 8000);

module.exports = server;
