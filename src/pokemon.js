class Pokemon {
  constructor() {

  }
}
Pokemon.makeID = function makeID(num) {
  let str = num.toString();
  let a = 3 - str.length;
  let ans = '';
  for (let i = 0; i < a; i++) {
    ans += '0';
  }
  ans += num;
  return ans;
}

Pokemon.getPokemon = function getPokemon(dataset, name, prop) {
  let pokemon;
  dataset.forEach((e) => {
    if (name == e[prop]) {
      pokemon = e;
      return;
    }
  })
  return pokemon;
};
let index = 0;
Pokemon.createBlob = function createBlob(id, name, elem1, elem2, hp, att, def, attsp, defsp, speed, gen, leg) {
  let b = new Pokemon();
  b.id = Pokemon.makeID(id);
  b.name = name;
  b.elem1 = elem1;
  b.elem2 = elem2;
  b.hp = hp;
  b.attack = att;
  b.defense = def;
  b.attack_sp = attsp;
  b.defense_sp = defsp;
  b.speed = speed;
  b.generation = gen;
  b.lengendary = leg;


  b.normalized = []


  let linkid = Pokemon.makeID(b.id - index);

  let exclude = [
    'Mega Lopunny',
  ]

  let list = [
    'Primal ',
    'Deoxys ',
    'Wormadam ',
    'Mow ',
    'Frost ',
    'Heat ',
    'Wash ',
    'Fan ',
    'Origin Forme',
    'Standard Mode',
    'Zen Mode',
    'Therian Forme',
    // 'Incarnate Forme',
    'Resolute Forme',
    'Pirouette Forme',
    'Shield Forme',
    'Small Size',
    'Large Size',
    'Super Size',
    'Female',
    'Unbound',
    'Black ',
    'White '
  ]

  if (b.name.indexOf('Mega ') !== -1 && b.name.indexOf(exclude[0]) === -1 && b.name.indexOf(exclude[1]) === -1) {
    index++;
    linkid = Pokemon.makeID(b.id - index);
  }

  for (let i = 0; i < list.length; i++) {
    if (b.name.indexOf(list[i]) !== -1) {
      index++;
      linkid = Pokemon.makeID(b.id - index);
    }
  }

  b.img = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/" + linkid + ".png";
  return b;
}
Pokemon.prototype.normalize = function normalize(maxvalues) {
  this.normalized = [
    // Pokemon1
    maxvalues.elemarr.indexOf(this.elem1) / this.elem1,
    maxvalues.elemarr.indexOf(this.elem2) / this.elem2, +(this.hp) / maxvalues.hp, +(this.attack) / maxvalues.attack, +(this.defense) / maxvalues.defense, +(this.attack_sp) / maxvalues.attack_sp, +(this.defense_sp) / maxvalues.defense_sp, +(this.speed) / maxvalues.speed,
    this.lengendary == 'False' ? 0 : 1,
  ]
}
Pokemon.prototype.toJSON = function toJSON() {
  let data = {
    id: this.id,
    name: this.name,
    elem1: this.elem1,
    elem2: this.elem2,
    hp: this.hp,
    attack: this.attack,
    defense: this.defense,
    attack_sp: this.attack_sp,
    defense_sp: this.defense_sp,
    speed: this.speed,
    generation: this.generation,
    lengendary: this.lengendary,
    img: this.img,
    normalized: this.normalized
  }
  return data;
}

module.exports = Pokemon;