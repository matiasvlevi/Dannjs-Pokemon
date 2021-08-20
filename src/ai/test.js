module.exports = function test(nn, dataset) {
  let score = 0;
  for (data of dataset) {

    let out = nn.feed(data.input);
    let dist = Math.abs(data.output[0] - out[0]);
    if (dist <= 0.5) {
      score++;
    }
  }
  return (score / dataset.length) * 100 + ' %';
}