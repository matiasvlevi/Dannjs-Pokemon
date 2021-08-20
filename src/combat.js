// Combat data blob
module.exports = class Combat {
  constructor() {}
  static createBlob(first, second, winner) {
    let b = new Combat();
    b.first = first;
    b.second = second;
    b.winner = winner;
    return b;
  }
}