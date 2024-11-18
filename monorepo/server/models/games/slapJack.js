import StandardPlayingDeck from "../decks/standardPlayingDeck";

class SlapJack {
  constructor(playerNames = ["Player 1", "Player 2"]) {
    this.deck = new StandardPlayingDeck();
    this.deck.createDeck();
    this.deck.shuffle(); // Assuming StandardPlayingDeck has a shuffle method

    this.players = playerNames.map((name) => ({
      name,
      hand: [],
    }));
    this.pile = []; // Cards in the middle pile
    this.currentCard = null; // Tracks the card last placed in the pile
    this.gameOver = false;

    this.dealCards();
  }

  /**
   * Deal cards evenly to players from the shuffled deck.
   */
  dealCards() {
    let currentPlayer = 0;
    while (this.deck.cards.length > 0) {
      this.players[currentPlayer].hand.push(this.deck.cards.pop());
      currentPlayer = (currentPlayer + 1) % this.players.length;
    }
  }

  /**
   * Play a turn: The active player places a card on the pile.
   * @param {number} playerIndex - Index of the player placing the card.
   */
  playTurn(playerIndex) {
    if (this.gameOver) {
      console.log("Game is over!");
      return;
    }

    const player = this.players[playerIndex];
    if (player.hand.length === 0) {
      console.log(`${player.name} has no cards left!`);
      return;
    }

    // Place a card from the player's hand onto the pile
    this.currentCard = player.hand.shift();
    this.pile.push(this.currentCard);

    console.log(`${player.name} played ${this.currentCard.value} of ${this.currentCard.suit}`);

    // Check if the card is a Jack
    if (this.currentCard.value === "Jack") {
      console.log("A Jack was played! Slap the pile!");
    }
  }

  /**
   * Simulates a player slapping the pile.
   * @param {number} playerIndex - Index of the player attempting to slap.
   */
  slap(playerIndex) {
    if (this.pile.length === 0) {
      console.log("There is nothing to slap!");
      return;
    }

    const player = this.players[playerIndex];
    if (this.currentCard.value === "Jack") {
      console.log(`${player.name} slapped the pile and won the cards!`);
      player.hand.push(...this.pile);
      this.pile = [];
    } else {
      console.log(`${player.name} slapped incorrectly and loses a card!`);
      if (player.hand.length > 0) {
        this.pile.push(player.hand.pop());
      }
    }

    this.checkGameOver();
  }

  /**
   * Check if the game is over (one player has all the cards).
   */
  checkGameOver() {
    const playersWithCards = this.players.filter((player) => player.hand.length > 0);

    if (playersWithCards.length === 1) {
      this.gameOver = true;
      console.log(`${playersWithCards[0].name} wins the game!`);
    }
  }

  /**
   * Display the current state of the game.
   */
  displayGameState() {
    console.log(
      "Current Pile:",
      this.pile.map((card) => `${card.value} of ${card.suit}`)
    );
    this.players.forEach((player, index) => {
      console.log(
        `${player.name} (${player.hand.length} cards): ${player.hand
          .slice(0, 3)
          .map((card) => `${card.value} of ${card.suit}`)
          .join(", ")}...`
      );
    });
  }
}

export default SlapJack;
