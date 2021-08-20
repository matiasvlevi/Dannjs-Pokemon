# Dannjs-Pokemon

[Dataset showcase](https://raw.githack.com/matiasvlevi/Dannjs-Pokemon/v0.1.0/public/index.html)


[Dann Guesses Combas winner](https://raw.githack.com/matiasvlevi/Dannjs-Pokemon/v0.4.0/public/index.html)



Run the webapp on a local server
```
npm start
```

Parse dataset (csv to json)
```
npm run parse
```

Train the model, this command will create a new model if you haven't trained one yet.
If you allready saved a model, this command will train the model with the most epochs (from file name).
```
npm run train [epochs]
```

Minify the latest model to a JS function in `public/scripts/minifiedModel.js`
```
npm run minify
```
