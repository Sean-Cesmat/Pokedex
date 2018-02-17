var express = require('express');
var request = require('request');
var router = express.Router();

// GET route for individual pokemon
router.route('/:name')
  // GET
  .get(function(req, res) {
    console.log('http://pokeapi.co/api/v2/pokemon/' + req.params.name);
    var pokemonUrl = 'http://pokeapi.co/api/v2/pokemon/' + req.params.name;

    request(pokemonUrl, function(error, response, body) {
      var pokemon = JSON.parse(body);
      res.render('pokemon/show', {pokemon: pokemon, bodyClass: 'pokemon-show'});
      // console.log(pokemon);
      // res.send(pokemon)
    })

  });



module.exports = router;
