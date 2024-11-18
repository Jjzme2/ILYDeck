class CardUtils {
  shuffle(cards) {
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
  }

  draw(cards, amountToDraw = 1) {
	return cards.splice(0, amountToDraw);
  }

  drawFromBottom(cards, amountToDraw = 1) {
	return cards.splice(cards.length - amountToDraw, amountToDraw);
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