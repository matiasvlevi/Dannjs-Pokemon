class Pokemon {
  constructor() {

  }
}
Pokemon.makeID = function makeID(num) {
  let str= num.toString();
  let a = 3 - str.length;
  let ans= '';
  for (let i = 0; i < a; i++) {
    ans += '0'; 
  }
  ans += num;
  return ans;
}

Pokemon.getPokemon = function getPokemon(dataset, name, prop) {
  let pokemon;
  dataset.forEach((e)=>{
    if (name == e[prop]) {
      pokemon = e;
      return;
    }
  })
  return pokemon;
};

Pokemon.createBlob = function createBlob(id, name, elem1, elem2, hp, att, def, attsp, defsp, speed, gen, leg) {
  let b = new Pokemon();
  b.id = id;
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
  let linkid = Pokemon.makeID(b.id);
  if (b.name.indexOf('Mega') !== -1) {
    linkid-=1;
  }

  b.img = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"+linkid+".png";
  return b;
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
   img: this.img
  }
  return data;
}

module.exports = Pokemon;