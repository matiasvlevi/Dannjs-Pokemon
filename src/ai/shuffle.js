module.exports = function shuffle(arr) {
  let newArr = [];
  for (let i = arr.length - 1; i > 0; i--) {
    let ran = Math.floor(Math.random() * (i + 1));
    let temp = arr[i];
    arr[i] = arr[ran];
    arr[ran] = temp;
  }
  return arr;
}