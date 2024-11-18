class PlayingCard {
  constructor(suit, rank) {
    this.suit = suit;
    this.rank = rank;
  }

  getCardName() {
    return `${this.rank} of ${this.suit}`;
  }
}
