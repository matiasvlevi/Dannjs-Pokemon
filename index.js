
const fs = require('fs');
const Pokemon = require('./blob');

function parse(path, Struct) {
  let csv = fs.readFileSync(path).toString();
  let lines = csv.split('\n');
  lines = lines.map(a => (a.split('\r')[0]))

  let database = [];
  for (let i = 0; i < lines.length; i++) {
    let data = lines[i].split(',');
    database.push(Struct.createBlob.apply(Struct, data));
  }
  return database;
}
class Combat {
  constructor(){

  }
  static createBlob(first,second,winnder) {
    let b = new Combat();
    b.first = first;
    b.second = second;
    b.winner = winnder;
    return b
  }
}


let pokedex = parse('./dataset/pokemon.csv', Pokemon);
let combats = parse('./dataset/combats.csv', Combat)
console.log(pokedex)