var db = require('../models')
var express = require('express');
var request = require('request');
var router = express.Router();

// GET route for individual pokemon
router.route('/:name')
  // GET - Load a single pokemon page
  .get(function(req, res) {
    var pokemonUrl = 'http://pokeapi.co/api/v2/pokemon/' + req.params.name;

    request(pokemonUrl, function(error, response, body) {
      var pokemon = JSON.parse(body);
      res.render('pokemon/show', {pokemon: pokemon});
      // console.log(pokemon);
      // res.send(pokemon)
    });

  });
// END /:name route

router.route('/')
  // GET - Load favorites page
  .get(function(req, res) {
    db.pokemon.findAll().then(function(data) {
      console.log(data);
      res.render('pokemon/index', {pokemon: data});
    });
  })
  // POST - Add favorite
  .post(function(req, res) {
    db.pokemon.create({
      name: req.body.name
    }).then(function(data) {
      // res.redirect('/pokemon');
      res.send('success');
    });
  })
  // DELETE - Remove favorite
  .delete(function(req, res) {
    db.pokemon.destroy({
      where: { name: req.body.name}
    }).done(function() {
      res.send('it is destroyed');
    });
  });
// END '/' route


module.exports = router;
