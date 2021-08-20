require('dannjs');

const nn = new Dann(18, 1);
nn.addHiddenLayer(24, "leakyReLU");
nn.addHiddenLayer(16, "leakyReLU");
nn.addHiddenLayer(8, "leakyReLU");
nn.outputActivation("sigmoid");
nn.makeWeights();
nn.lr = 0.000002;

module.exports = nn;