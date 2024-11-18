import PlayingCard from './playingCard';

class Deck {
  constructor() {
    this.cards = [];
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

  createDeck() {
    const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
    suits.forEach(suit => {
      ranks.forEach(rank => {
        try {
          this.validateSuit(suit);
          this.validateRank(rank);
          this.cards.push(new PlayingCard(suit, rank));
        } catch (error) {
          console.error('Error creating card:', error);
        }
      });
    });
  }
}

export default Deck;
