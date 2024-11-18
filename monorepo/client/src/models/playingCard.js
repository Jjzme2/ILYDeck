class PlayingCard {
  constructor(suit, rank) {
    this.validateSuit(suit);
    this.validateRank(rank);
    this.suit = suit;
    this.rank = rank;
  }

  validateSuit(suit) {
    const validSuits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    if (!validSuits.includes(suit)) {
      throw new Error(`Invalid suit: ${suit}`);
    }
  }

  validateRank(rank) {
    const validRanks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
    if (!validRanks.includes(rank)) {
      throw new Error(`Invalid rank: ${rank}`);
    }
  }

  getCardName() {
    return `${this.rank} of ${this.suit}`;
  }
}

export default PlayingCard;
