require('dannjs');

const nn = new Dann(18, 1);
nn.addHiddenLayer(26, "leakyReLU");
nn.addHiddenLayer(18, "leakyReLU");
nn.addHiddenLayer(12, "leakyReLU");
nn.outputActivation("sigmoid");
nn.makeWeights();
nn.lr = 0.0005;

module.exports = nn;