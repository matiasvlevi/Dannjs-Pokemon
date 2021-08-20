# Dannjs Pokemon Combat Guesser


A Dann model learns to predict pokemon combat winners.


<br/><br/>

Here are the values trained to the neural network (48 999 samples trained)
```
Inputs:
 0: Pokemon 1 element 1 (Value mapped to each element)
 1: Pokemon 1 element 2 (Value mapped to each element)
 2: Pokemon 1 legendary (Boolean)
 3: Pokemon 1 HP (Normalized)
 4: Pokemon 1 Attack (Normalized)
 5: Pokemon 1 Defense (Normalized)
 6: Pokemon 1 Sp Attack (Normalized)
 7: Pokemon 1 Sp Defense (Normalized)
 8: Pokemon 1 speed (Normalized)

 9: Pokemon 2 element 1 (Value mapped to each element)
10: Pokemon 2 element 2 (Value mapped to each element)
11: Pokemon 2 legendary (True or False)
12: Pokemon 2 HP (Normalized)
13: Pokemon 2 Attack (Normalized)
14: Pokemon 2 Defense (Normalized)
15: Pokemon 2 Sp Attack (Normalized)
16: Pokemon 2 Sp Defense (Normalized)
17: Pokemon 2 speed (Normalized)

Output:
 0: Winner (Boolean)
```

<br/>

### Links

[Dataset](https://raw.githack.com/matiasvlevi/Dannjs-Pokemon/v0.1.0/public/index.html)

[Combat dataset](https://raw.githack.com/matiasvlevi/Dannjs-Pokemon/v0.2.0/public/index.html)

[Dann Guesses Combas winner](https://raw.githack.com/matiasvlevi/Dannjs-Pokemon/v0.5.0/public/index.html)

<br/><br/><br/><br/>

---

### NPM SCRIPTS
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
