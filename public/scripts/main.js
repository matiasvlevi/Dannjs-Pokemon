
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

async function main(pokedex, combats) {
  window.pokedex = pokedex;
  window.combats = combats;
  console.log(combats);
  console.log(pokedex);
  let mainDom =  document.querySelector('body > main');

  for (let i = 0; i < combats.length; i++) {
    document.querySelector('h2').textContent = "#"+combats[i].pokemon1+" / #"+combats[i].pokemon2;
    pokemonDom(getPokemonById(pokedex, combats[i].pokemon1), mainDom);
    pokemonDom(getPokemonById(pokedex, combats[i].pokemon2), mainDom);

    if (combats[i].output[0] === 0) {
      document.querySelector("body > main > div:nth-child(1) > div").setAttribute('id','win');
    } else {
      document.querySelector("body > main > div:nth-child(2) > div").setAttribute('id','win');
    }



    await delay(4000);
    mainDom.innerHtml = '';
    while (mainDom.lastElementChild) {
      mainDom.removeChild(mainDom.lastElementChild);
    }

  }

}
function getPokemonById(pokedex, id) {
  let pokemon;
  for (let i = 0; i < pokedex.length;i++) {
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
  img.setAttribute('src',pokemon.img);
  let h3name = document.createElement('h3');
  h3name.textContent = pokemon.name;
  let hp = document.createElement('h3');
  hp.textContent =  " HP: " + pokemon.hp;
  let atk = document.createElement('h3');
  atk.textContent = " Atk: " + pokemon.attack + " / sp " + pokemon.attack_sp;
  let def = document.createElement('h3');
  def.textContent =  " Def: " + pokemon.defense + " / sp " + pokemon.defense_sp;
  let winIcon = document.createElement('div');
  winIcon.setAttribute('class','winIcon');
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
