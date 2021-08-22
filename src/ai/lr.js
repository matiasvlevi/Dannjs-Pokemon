const log = require('../log');
const fs = require(
  'fs'
);
// Load or Create a model
const nn = require('./getModel');
nn.lr = +process.argv[2] || 0.0001;
nn.log();


fs.writeFileSync("models/Dann-model-" + (nn.epoch + 1) + ".json", JSON.stringify(nn.toJSON()))