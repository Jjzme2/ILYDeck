import PlayingCard from './playingCard';

class StandardPlayingDeck {
  constructor() {
    this.cards = [];
  }

  createDeck() {
    const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
    suits.forEach(suit => {
      ranks.forEach(rank => {
        this.cards.push(new PlayingCard(suit, rank));
      });
    });
  }
}

export default StandardPlayingDeck;
