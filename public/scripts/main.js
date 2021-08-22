// fetch data from json cdn
//https://raw.githubusercontent.com/matiasvlevi/Dannjs-Pokemon/main/public/parsed/pokemon.json


// web url
// https://raw.githubusercontent.com/matiasvlevi/Dannjs-Pokemon/main/
fetch('parsed/pokemon.json')
  .then(response => response.json())
  .then(data => fetchCombat(data));

function fetchCombat(pokedex) {
  fetch('parsed/database.json')
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

function selected(pokedex) {
  let id1 = document.querySelector("#\\31 > #info > #selector1").value || '000';
  let id2 = document.querySelector("#\\32 > #info > #selector2").value || '000';
  let pokemon1 = getPokemonById(pokedex, id1);
  let pokemon2 = getPokemonById(pokedex, id2);

  document.querySelector("#\\31 > img").src = pokemon1.img;
  document.querySelector("#\\31 > #name").textContent = pokemon1.name;
  document.querySelector("#\\31 > #info > #hp").textContent = "HP: " + pokemon1.hp;
  document.querySelector("#\\31 > #info > #atk").textContent = "Atk: " + pokemon1.attack + " / sp " + pokemon1.attack_sp;
  document.querySelector("#\\31 > #info > #def").textContent = "Def: " + pokemon1.defense + " / sp " + pokemon1.defense_sp;

  // Set element icons ids
  document.querySelector("#\\31 > #info > #elem > div:nth-child(1)").setAttribute('class', pokemon1.elem1.toLocaleLowerCase());
  document.querySelector("#\\31 > #info > #elem > div:nth-child(2)").setAttribute('class', pokemon1.elem2.toLocaleLowerCase());
  document.querySelector("#\\31 > #info > #elem > div:nth-child(1)").title = pokemon1.elem1;
  // Set element 1
  document.querySelector("#\\31 > #info > #elem > div > #elem1").src = "css/icons/" + pokemon1.elem1.toLocaleLowerCase() + ".svg";

  // Set element 2 if exists
  if (pokemon1.elem2 !== 'None') {
    document.querySelector("#\\31 > #info > #elem > div:nth-child(2) > #elem2").style = "display:auto";
    document.querySelector("#\\31 > #info > #elem > div:nth-child(2) > #elem2").src = "css/icons/" + pokemon1.elem2.toLocaleLowerCase() + ".svg";
    document.querySelector("#\\31 > #info > #elem > div:nth-child(2)").title = pokemon1.elem2;
  } else {
    document.querySelector("#\\31 > #info > #elem > div:nth-child(2) > #elem2").style = "display:none";
  }


  document.querySelector("#\\32  > img").src = pokemon2.img;
  document.querySelector("#\\32  > #name").textContent = pokemon2.name;
  document.querySelector("#\\32  > #info > #hp").textContent = "HP: " + pokemon2.hp;
  document.querySelector("#\\32  > #info > #atk").textContent = "Atk: " + pokemon2.attack + " / sp " + pokemon2.attack_sp;
  document.querySelector("#\\32  > #info > #def").textContent = "Def: " + pokemon2.defense + " / sp " + pokemon2.defense_sp;

  // Set element icons ids
  document.querySelector("#\\32 > #info > #elem > div:nth-child(1)").setAttribute('class', pokemon2.elem1.toLocaleLowerCase());
  document.querySelector("#\\32 > #info > #elem > div:nth-child(2)").setAttribute('class', pokemon2.elem2.toLocaleLowerCase());
  document.querySelector("#\\32 > #info > #elem > div:nth-child(1)").title = pokemon2.elem1;

  // Set element 1
  document.querySelector("#\\32 > #info > #elem > div > #elem1").src = "css/icons/" + pokemon2.elem1.toLocaleLowerCase() + ".svg";

  // Set element 2 if exists
  if (pokemon2.elem2 !== 'None') {
    document.querySelector("#\\32 > #info > #elem > div > #elem2").style = "display:auto";
    document.querySelector("#\\32 > #info > #elem > div > #elem2").src = "css/icons/" + pokemon2.elem2.toLocaleLowerCase() + ".svg";
    document.querySelector("#\\32 > #info > #elem > div:nth-child(2)").title = pokemon2.elem2;
  } else {
    document.querySelector("#\\32 > #info > #elem > div > #elem2").style = "display:none";
  }


  let input = pokemon1.normalized.concat(pokemon2.normalized);
  let guess = (Math.round(pokemonDann(input)[0] * 100000) / 1000);
  document.querySelector("#\\31 > #info > #guess").textContent = "Win chance: " + Math.round((100 - guess) * 1000) / 1000 + "%";

  document.querySelector("#\\32 > #info > #guess").textContent = "Win chance: " + guess + "%";
}
async function main(pokedex, combats) {
  await delay(50)

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
  document.querySelector("#\\31 > #info").appendChild(selector1);
  document.querySelector("#\\32 > #info").appendChild(selector2);
  selected(pokedex);
  document.querySelector('main').style = "display:auto";
  document.querySelector('#link').style = "display:auto";
  document.querySelector('#load').style = "display:none";
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