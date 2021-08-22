const fs = require('fs');
const shuffle = require('./shuffle');
// Getting the pokemon combats dataset
const database = JSON.parse(fs.readFileSync('public/parsed/database.json').toString());
const testlength = 100;
// Dividing in two sets
const testset = database.slice(database.length - testlength - 1, database.length - 1);
const dataset = database.slice(0, database.length - testlength - 1);


module.exports = {
  train: shuffle(dataset),
  test: testset
}