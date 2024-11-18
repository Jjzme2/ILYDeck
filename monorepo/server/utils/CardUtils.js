class CardUtils {
  shuffle(cards) {
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
  }

  validateCards(cards) {
    if (!Array.isArray(cards) || cards.length === 0) {
      throw new Error('Invalid cards array');
    }
  }

  validateAmountToDraw(amountToDraw) {
    if (typeof amountToDraw !== 'number' || amountToDraw <= 0) {
      throw new Error('Invalid amount to draw');
    }
  }

  draw(cards, amountToDraw = 1) {
    try {
      this.validateCards(cards);
      this.validateAmountToDraw(amountToDraw);
      return cards.splice(0, amountToDraw);
    } catch (error) {
      console.error('Error drawing cards:', error);
      return [];
    }
  }

  drawFromBottom(cards, amountToDraw = 1) {
    try {
      this.validateCards(cards);
      this.validateAmountToDraw(amountToDraw);
      return cards.splice(cards.length - amountToDraw, amountToDraw);
    } catch (error) {
      console.error('Error drawing cards from bottom:', error);
      return [];
    }
  }

  deal(cards, players, amountPerPlayer) {
    let currentPlayer = 0;
    while (cards.length > 0) {
      players[currentPlayer].hand.push(...this.draw(cards, amountPerPlayer));
      currentPlayer = (currentPlayer + 1) % players.length;
    }
  }
}

export default CardUtils;
