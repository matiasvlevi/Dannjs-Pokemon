console.log("Initializing neural network...")
const dataset = require('../public/parsed/database.json')
const dannjs = require("dannjs")
const fs = require("fs")
const ProgressBar = require("progress")
const Dann = dannjs.dann

let epoch = process.argv[2] || 10
let nn = new Dann(18, 1)

nn.addHiddenLayer(8, "leakyReLU")
nn.makeWeights()
nn.outputActivation("binary")
nn.lr = 0.001

console.clear()
console.log('')
console.log('')
nn.log()
console.log('')
console.log('')

while (nn.epoch<epoch){
  let bar = new ProgressBar('  Epoch completion: [:bar] | :rate/cps | :percent | :etas | epochs: ' + nn.epoch + '/' + epoch, {
    complete: '=',
    incomplete: '-',
    width: 12,
    total: dataset.length,
    clear: true,
  });
  for (data of dataset){
	nn.train(data.input, data.output)
	bar.tick()
  }
  nn.epoch ++
}
fs.writeFileSync("public/model/Dann-model-" + nn.epoch + ".json", JSON.stringify(nn.toJSON()))
