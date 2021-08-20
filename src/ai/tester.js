const test = require('./test');
const log = require('../log');
const database = require('./dataset');
const testset = database.test;

// Load or Create a model
const nn = require('./getModel');
nn.log();

// Test model
let result = test(nn, testset);
log(" >>> Test result: " + result, 'green');