function logProgress(min, max, text) {
  console.log(
    '[' +
    min +
    '/' +
    max +
    '] ' +
    text
  );
}
module.exports = function train(nn, dataset, epoch) {
  for (let i = 0; i < epoch; i++) {
    for (data of dataset) {
      nn.train(data.input, data.output);
    }
    nn.epoch++;
    logProgress(i, epoch, ' completed epoch ' + nn.epoch);
  }
}