module.exports = class Pokemon {
  constructor() {

  }
  static makeID(num) {
    let str= num.toString();
    let a = 3 - str.length;
    let ans= '';
    for (let i = 0; i < a; i++) {
      ans += '0'; 
    }
    ans += num;
    return ans;
  }
  static createBlob(id, name, elem1, elem2, hp, att, def, attsp, defsp, speed, gen, leg) {
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
    b.img = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"+Pokemon.makeID(b.id)+".png";
    return b;
  }

}