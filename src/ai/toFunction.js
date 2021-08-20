const fs = require('fs');
const nn = require('./getModel');

fs.writeFileSync('public/scripts/minifiedModel.js', nn.toFunction());