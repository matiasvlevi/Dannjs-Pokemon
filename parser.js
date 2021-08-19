
const fs = require('fs');
const Pokemon = require('./src/blob');
const Combat = require('./src/combat');

function parse(path, Struct) {
  let csv = fs.readFileSync(path).toString();
  let lines = csv.split('\n');
  lines = lines.map(a => (a.split('\r')[0]))

  let database = [];
  for (let i = 1; i < lines.length-1; i++) {
    let data = lines[i].split(',');
    let pokemon = Struct.createBlob.apply(Struct, data);
    database.push(pokemon);
  }
  return database;
}

let pokedex = parse('./dataset/pokemon.csv', Pokemon);
let combats = parse('./dataset/combats.csv', Combat);
console.log(pokedex);

fs.writeFileSync('./public/parsed/combats.json', JSON.stringify(combats));
fs.writeFileSync('./public/parsed/pokemon.json', JSON.stringify(pokedex));

function findBiggest(pokemon) {
  let elem1rec = 0;
  let elem2rec = 0;
  let hprec= 0;
  let att = 0;
  let def = 0;
  let spa = 0;
  let spd = 0;
  let speed = 0;
  let lengendary = 0;
  let gen = 0;
  let elemarr = [];
  for (let i = 0; i < pokemon.length; i++) {
    if (+pokemon[i].hp > hprec) {
      hprec = +pokemon[i].hp;
    }
    if (+pokemon[i].attack > att) {
      att = +pokemon[i].attack;
    }
    if (+pokemon[i].defense > def) {
      def = +pokemon[i].defense;
    }
    if (+pokemon[i].attack_sp > spa) {
      spa = +pokemon[i].attack_sp;
    }
    if (+pokemon[i].defense_sp > spd) {
      spd = +pokemon[i].defense_sp;
    }
    if (+pokemon[i].speed > speed) {
      speed = +pokemon[i].speed;
    }
    if (+pokemon[i].generation > gen) {
      gen = +pokemon[i].generation;
    }
    if (pokemon[i].lengendary == "False") {
      lengendary = 0;
    } else {
      lengendary = 1;
    }
    if (elemarr.indexOf(pokemon[i].elem1) === -1) {
      elemarr.push(pokemon[i].elem1)
    }
    if (elemarr.indexOf(pokemon[i].elem2) === -1) {
      elemarr.push(pokemon[i].elem2)
    }
    
  }
  console.log(elemarr)
  return {
    hp: hprec,
    attack: att,
    defense: def,
    attack_sp: spa,
    defense_sp:spd,
    speed:speed,
    elem1:elem1rec,
    elem2:elem2rec,
    lengendary: lengendary
  }
}

function normalize(combat, pokemon) {
  let maxvalues = findBiggest(pokemon); 
  let dataset = [];
  for (let i = 0; i < combat.length; i++) {
    let winner = 0;
    let pokemon1 = Pokemon.getPokemon(pokemon, (combat[i].first), 'id');
    let pokemon2 = Pokemon.getPokemon(pokemon, (combat[i].second), 'id');
    if (combat[i].first === combat[i].winner) {
      winner = 0;
    } else {
      winner = 1;
    }
    let data= {};
    // let data = {
    //   input: [
    //     // Pokemon1
    //     pokemon1.elem1/maxvalues.elem1,
    //     pokemon1.elem2/maxvalues.elem2,
    //     pokemon1.hp/maxvalues.hp,
    //     pokemon1.attack/maxvalues.attack,
    //     pokemon1.defense/maxvalues.defense,
    //     pokemon1.attack_sp/maxvalues.attack_sp,
    //     pokemon1.defense_sp/maxvalues.defense_sp,
    //     pokemon1.speed/maxvalues.speed,
    //     pokemon1.lengendary,
    //     // Pokemon2
    //     pokemon2.elem1/maxvalues.elem1,
    //     pokemon2.elem2/maxvalues.elem2,
    //     pokemon2.hp/maxvalues.hp,
    //     pokemon2.attack/maxvalues.attack,
    //     pokemon2.defense/maxvalues.defense,
    //     pokemon2.attack_sp/maxvalues.attack_sp,
    //     pokemon2.defense_sp/maxvalues.defense_sp,
    //     pokemon2.speed/maxvalues.speed,
    //     pokemon2.lengendary,
    //   ],
    //   output: [
    //     winner
    //   ]
    // }
    dataset.push(data);  
  }
  return dataset;
}

console.log(normalize(combats, pokedex))