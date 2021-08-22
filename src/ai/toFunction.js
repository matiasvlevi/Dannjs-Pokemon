const fs = require('fs');
const nn = require('./getModel');
const log = require('../log');
let func = nn.toFunction('pokemonDann');
log('Minified model ', 'cyan')
nn.log();
fs.writeFileSync('public/scripts/minifiedModel.js', func, 'utf-8');