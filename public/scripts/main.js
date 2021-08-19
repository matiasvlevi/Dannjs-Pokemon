
// fetch data from json cdn
fetch('https://raw.githubusercontent.com/matiasvlevi/Dannjs-Pokemon/main/public/parsed/pokemon.json')
.then(response => response.json())
.then(data => main(data));

function main(pokedex) {
  window.pokedex = pokedex;
  // Example images index 0 and 800
  for (let i = 0; i < pokedex.length; i++) {
    let index = i;
    let elem = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute('src',pokedex[index].img);
    let h3name = document.createElement('h3');
    h3name.setAttribute('textContent', pokedex[index].name) 
    let hp = document.createElement('h3');
    hp.setAttribute('textContent', " HP: " + pokedex[index].hp) 
    let atk = document.createElement('h3');
    atk.setAttribute('textContent', " Atk: " + pokedex[index].attack + " / sp " + pokedex[index].attack_sp) 
    let def = document.createElement('h3');
    def.setAttribute('textContent', " Def: " + pokedex[index].defense + " / sp " + pokedex[index].defense_sp) 
    elem.appendChild(img);
    elem.appendChild(h3name);
    elem.appendChild(hp);
    elem.appendChild(atk);
    elem.appendChild(def);
    document.querySelector(" body > main").appendChild(elem);
  }

}
