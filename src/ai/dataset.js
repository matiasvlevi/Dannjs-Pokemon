const fs = require('fs');

// Getting the pokemon combats dataset
const database = JSON.parse(fs.readFileSync('public/parsed/database.json').toString());

// Dividing in two sets
const testset = database.slice(database.length - 1001, database.length - 1);
const dataset = database.slice(0, database.length - 1001);


module.exports = {
  train: dataset,
  test: testset
}