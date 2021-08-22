module.exports = function swap(data) {
  let newdata_ = {};
  let newdata = Object.assign(newdata_,data);

  let temp = newdata.pokemon2;
  newdata.pokemon2 = newdata.pokemon1;
  newdata.pokemon1 = temp;

  let pokemon1 = newdata.input.slice(0,9);
  let pokemon2 = newdata.input.slice(9,18);
  
  newdata.input = pokemon2.concat(pokemon1);
  newdata.output = [Math.abs(data.output[0] - 1)] 
  return newdata;
}