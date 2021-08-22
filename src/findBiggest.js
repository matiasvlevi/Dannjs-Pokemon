module.exports = function findBiggest(pokemon) {
  let elem1rec = 0;
  let elem2rec = 0;
  let hprec = 0;
  let att = 0;
  let def = 0;
  let spa = 0;
  let spd = 0;
  let speed = 0;
  let lengendary = 0;
  let gen = 0;
  let elemarr = ['None'];
  for (let i = 0; i < pokemon.length; i++) {
    //filter out empty
    elemarr = elemarr.filter(function(ele) {
      return ele != '';
    });
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
    let elem1 = elemarr.indexOf(pokemon[i].elem1);
    if (elem1 > elem1rec) {
      elem1rec = elem1;
    }
    let elem2 = elemarr.indexOf(pokemon[i].elem1);
    if (elem2 > elem2rec) {
      elem2rec = elem2;
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

  return {
    hp: hprec,
    attack: att,
    defense: def,
    attack_sp: spa,
    defense_sp: spd,
    speed: speed,
    elem1: elem1rec,
    elem2: elem2rec,
    lengendary: lengendary,
    elemarr: elemarr
  }
}