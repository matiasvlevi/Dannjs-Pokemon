const fs = require('fs');
const nn = require('./getModel');
let func = nn.toFunction('pokemonDann');
console.log(func)
fs.writeFileSync('public/scripts/minifiedModel.js', func, 'utf-8');