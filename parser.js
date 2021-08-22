const fs = require('fs');
const Pokemon = require('./src/pokemon');
const Combat = require('./src/combat');
const swap = require('./src/swapFirstAttack');
const findBiggest = require('./src/findBiggest');
let select = require('./src/selectedDataset');

function parse(path, Struct) {
  let csv = fs.readFileSync(path).toString();
  let lines = csv.split('\n');
  lines = lines.map(a => (a.split('\r')[0]))

  let database = [];
  for (let i = 1; i < lines.length - 1; i++) {
    let data = lines[i].split(',');
    let pokemon = Struct.createBlob.apply(Struct, data);
    database.push(pokemon);
  }
  return database;
}

let pokedex = parse('./dataset/pokemon.csv', Pokemon);
// normalize pokemons
for (pokemon of pokedex) {
  pokemon.normalize(findBiggest(pokedex));
}


let combats = parse('./dataset/combats.csv', Combat);
fs.writeFileSync('./public/parsed/combats.json', JSON.stringify(combats));
fs.writeFileSync('./public/parsed/pokemon.json', JSON.stringify(pokedex));


function normalize(combat, pokemon) {
  let maxvalues = findBiggest(pokemon);
  console.log(maxvalues)
  let dataset = [];
  let onlyCharmanderSquirtleLine = [];

  for (let i = 0; i < combat.length; i++) {

    let pokemon1 = Pokemon.getPokemon(pokemon, Pokemon.makeID(combat[i].first), 'id');
    let pokemon2 = Pokemon.getPokemon(pokemon, Pokemon.makeID(combat[i].second), 'id');

    let winner = 0;
    if (combat[i].first === combat[i].winner) {
      winner = 0;
    } else {
      winner = 1;
    }
    let data = {
      pokemon1: Pokemon.makeID(combat[i].first),
      pokemon2: Pokemon.makeID(combat[i].second),
      input: pokemon1.normalized.concat(pokemon2.normalized),
      output: [
        winner
      ]
    }

    for (let j = 0; j < select.length; j++) {
      if (data.pokemon1 === select[j]) {
        for (let k = 0; k < select.length; k++) {
          if (data.pokemon2 === select[k]) {
            console.log(pokemon1.name, pokemon1.id)
            console.log(pokemon2.name, pokemon2.id)
            onlyCharmanderSquirtleLine.push(data)
          }
        }
      }
    }

    dataset.push(data);
  }



  let newSelected = [];
  for (data of onlyCharmanderSquirtleLine) {
    newSelected.push(data);
    newSelected.push(swap(data));
  }
  console.log('Dataset length: ', dataset.length);
  console.log('Selected set length: ', newSelected.length);
  console.log(newSelected)
  return [dataset, newSelected];
}

let normalizedData = normalize(combats, pokedex);
let database = JSON.stringify(normalizedData[0]);
let onlyCharmanderSquirtleLine = JSON.stringify(normalizedData[1]);



fs.writeFileSync('./public/parsed/database.json', database);
fs.writeFileSync('./public/parsed/selectPokemon.json', onlyCharmanderSquirtleLine);