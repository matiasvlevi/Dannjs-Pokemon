const fs = require('fs');
const shuffle = require('./shuffle');

// Getting the pokemon combats dataset, of only selected datapoints
const database = JSON.parse(fs.readFileSync('public/parsed/selectPokemon.json').toString());

module.exports = shuffle(database);