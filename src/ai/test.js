module.exports = function test(nn, dataset) {
  let score = 0;
  for (data of dataset) {

    let out = nn.feed(data.input);
    console.log('---')
    console.log('Output: ', out);
    console.log('Thruth', data.output);
    console.log(data.pokemon1 + ' vs ' + data.pokemon2 + ' | winner: ' + Math.round(out[0]))
    let dist = Math.abs(data.output[0] - out[0]);
    if (dist <= 0.5) {
      console.log('Point earned');
      score++;
    } else {
      console.log('Point lost');
    }
  }
  return (score / dataset.length) * 100 + ' %';
}