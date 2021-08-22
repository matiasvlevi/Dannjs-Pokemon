// Imports
const fs = require("fs");
const train = require('./train');
const test = require('./test');
const log = require('../log');

const database = require('./dataset');

const selectedSet = require('./loadSelected');



// Setting epoch value
let epoch = process.argv[2] || 10;

// Load or Create a model
const nn = require('./getModel');
nn.log();

// Training a model
train(nn, selectedSet, epoch);

// Testing accuracy
log('Testing with selected set...', 'cyan')
let result = test(nn, selectedSet);
log(" >>> Test result: " + result, 'green');


fs.writeFileSync("models/Dann-model-" + nn.epoch + ".json", JSON.stringify(nn.toJSON()))