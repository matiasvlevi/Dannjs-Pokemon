// Imports
const fs = require("fs");
const train = require('./train');
const test = require('./test');
const log = require('../log');

// Getting the pokemon combats dataset
const database = JSON.parse(fs.readFileSync('public/parsed/database.json').toString());

// Dividing in two sets
const testset = database.slice(database.length - 1001, database.length - 1);
const dataset = database.slice(0, database.length - 1001);

// Setting epoch value
let epoch = process.argv[2] || 10;

// Load or Create a model
const nn = require('./getModel');
nn.log();

// Training a model
train(nn, dataset, epoch);

// Testing accuracy
let result = test(nn, testset);
log(" >>> Test result: " + result, 'green');


fs.writeFileSync("models/Dann-model-" + nn.epoch + ".json", JSON.stringify(nn.toJSON()))