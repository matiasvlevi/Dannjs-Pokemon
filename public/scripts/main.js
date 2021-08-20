// fetch data from json cdn
//https://raw.githubusercontent.com/matiasvlevi/Dannjs-Pokemon/main/public/parsed/pokemon.json
fetch('./parsed/pokemon.json')
  .then(response => response.json())
  .then(data => fetchCombat(data));

function fetchCombat(pokedex) {
  fetch('./parsed/database.json')
    .then(response => response.json())
    .then(data => main(pokedex, data))
}

function delay(delayInms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(2);
    }, delayInms);
  });
}

function selected(pokedex, num) {
  let id1 = selector1.value;
  let id2 = selector2.value;
  let pokemon1 = getPokemonById(pokedex, id1);
  let pokemon2 = getPokemonById(pokedex, id2);
  document.querySelector("#\\31  > img").src = pokemon1.img;
  document.querySelector("#\\31  > #name").textContent = "Name: " + pokemon1.name;
  document.querySelector("#\\31  > #hp").textContent = "HP: " + pokemon1.hp;
  document.querySelector("#\\31  > #atk").textContent = "Atk: " + pokemon1.attack + " / sp " + pokemon1.attack_sp;
  document.querySelector("#\\31  > #def").textContent = "Def: " + pokemon1.defense + " / sp " + pokemon1.defense_sp;
  document.querySelector("#\\32  > img").src = pokemon2.img;
  document.querySelector("#\\32  > #name").textContent = "Name: " + pokemon2.name;
  document.querySelector("#\\32  > #hp").textContent = "HP: " + pokemon2.hp;
  document.querySelector("#\\32  > #atk").textContent = "Atk: " + pokemon2.attack + " / sp " + pokemon2.attack_sp;
  document.querySelector("#\\32  > #def").textContent = "Def: " + pokemon2.defense + " / sp " + pokemon2.defense_sp;
}
async function main(pokedex, combats) {
  window.pokedex = pokedex;
  window.combats = combats;
  console.log(combats);
  console.log(pokedex);

  let selector1 = document.createElement("select");
  selector1.setAttribute('id', 'selector1');
  selector1.setAttribute('onchange', 'selected(pokedex)')
  let selector2 = document.createElement("select");
  selector2.setAttribute('onchange', 'selected(pokedex)')
  selector2.setAttribute('id', 'selector2');

  for (let i = 0; i < pokedex.length; i++) {
    let pokemon = pokedex[i];
    let option = document.createElement('option');
    option.setAttribute('value', pokemon.id);
    option.textContent = "#" + pokemon.id + " - " + pokemon.name;
    selector1.appendChild(option);
    let option2 = document.createElement('option');
    option2.setAttribute('value', pokemon.id);
    option2.textContent = "#" + pokemon.id + " - " + pokemon.name;
    selector2.appendChild(option2);

  }
  document.querySelector("#\\31 ").appendChild(selector1);
  document.querySelector("#\\32 ").appendChild(selector2);
  selected(pokedex);
  // let id1 = selector1.value;
  // let id1 = selector2.value;
  // let pokemon1 = getPokemonById(pokedex, id1);
  // let pokemon2 = getPokemonById(pokedex, id2);
  // document.querySelector("#\\31  > img").src = getPokemonById(pokedex, pokemon1).img;
  // document.querySelector("#\\32  > img").src = getPokemonById(pokedex, pokemon2).img;



}

function getPokemonById(pokedex, id) {
  let pokemon;
  for (let i = 0; i < pokedex.length; i++) {
    if (pokedex[i].id === id) {
      pokemon = pokedex[i];
    }
  }
  return pokemon;
}

function pokemonDom(pokemon, parent) {
  let elem = document.createElement('div');
  let img = document.createElement('img');
  console.log(pokemon.img)
  img.setAttribute('src', pokemon.img);
  let h3name = document.createElement('h3');
  h3name.textContent = pokemon.name;
  let hp = document.createElement('h3');
  hp.textContent = " HP: " + pokemon.hp;
  let atk = document.createElement('h3');
  atk.textContent = " Atk: " + pokemon.attack + " / sp " + pokemon.attack_sp;
  let def = document.createElement('h3');
  def.textContent = " Def: " + pokemon.defense + " / sp " + pokemon.defense_sp;
  let winIcon = document.createElement('div');
  winIcon.setAttribute('class', 'winIcon');
  elem.appendChild(img);
  elem.appendChild(h3name);
  elem.appendChild(hp);
  elem.appendChild(atk);
  elem.appendChild(def);
  elem.appendChild(winIcon);
  parent.appendChild(elem);
  return elem;
}

function loadAll(pokedex, parent) {
  // Example images index 0 and 800
  for (let i = 0; i < pokedex.length; i++) {
    let elem = pokemonDom(i)
    parent.appendChild(elem);
  }
}