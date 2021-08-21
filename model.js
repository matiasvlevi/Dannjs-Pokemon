require('dannjs');

const nn = new Dann(18, 1);
nn.addHiddenLayer(64, "leakyReLU");
nn.addHiddenLayer(24, "leakyReLU");
nn.addHiddenLayer(12, "leakyReLU");
nn.outputActivation("sigmoid");
nn.makeWeights();
nn.lr = 0.000001;

module.exports = nn;