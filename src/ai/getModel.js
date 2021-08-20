const Dann = require('dannjs').dann;
const fs = require('fs');
const log = require('../log');

let modelspath = './models/';
// If 'models' directory doesnt exist, create it.
if (!fs.existsSync(modelspath)) {
  fs.mkdirSync(modelspath);
}
// Read all file names in models directory
let modelsSaved = fs.readdirSync(modelspath);
console.log(modelsSaved)
let nn;
if (modelsSaved.length > 0) {
  // Find most trained model
  let largest = 0;
  modelsSaved.forEach((modelFile) => {
    let name = modelFile.split('.')[0];
    let split = name.split('-');
    let num = +split[split.length - 1];
    if (num >= largest) {
      largest = num;
    }
  });
  // Load json
  let filename = 'Dann-model-' + largest + '.json';
  let modelRaw = fs.readFileSync('./models/' + filename);
  let modelData = JSON.parse(modelRaw);
  // Load model
  nn = Dann.createFromJSON(modelData);
  log('Loaded ' + filename, 'yellow')
} else {
  // Create new model
  nn = require('../../model');
  log('Created new model', 'yellow')
}

module.exports = nn;