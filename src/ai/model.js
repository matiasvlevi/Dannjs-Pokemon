require('dannjs');

const nn = new Dann(18, 1);
nn.addHiddenLayer(16, "leakyReLU");
nn.addHiddenLayer(8, "leakyReLU");
nn.addHiddenLayer(8, "leakyReLU");
nn.addHiddenLayer(6, "leakyReLU");
nn.outputActivation("sigmoid");
nn.makeWeights();
nn.lr = 0.000001;

module.exports = nn;