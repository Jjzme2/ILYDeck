const validateSuit = (suit) => {
  const validSuits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
  if (!validSuits.includes(suit)) {
    throw new Error(`Invalid suit: ${suit}`);
  }
};

const validateRank = (rank) => {
  const validRanks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
  if (!validRanks.includes(rank)) {
    throw new Error(`Invalid rank: ${rank}`);
  }
};

const validatePlayerNames = (playerNames) => {
  if (!Array.isArray(playerNames) || playerNames.length < 2) {
    throw new Error("Invalid player names: must be an array with at least two names");
  }
  playerNames.forEach((name) => {
    if (typeof name !== "string" || !name.trim()) {
      throw new Error(`Invalid player name: ${name}`);
    }
  });
};

const validateCards = (cards) => {
  if (!Array.isArray(cards) || cards.length === 0) {
    throw new Error('Invalid cards array');
  }
};

const validateAmountToDraw = (amountToDraw) => {
  if (typeof amountToDraw !== 'number' || amountToDraw <= 0) {
    throw new Error('Invalid amount to draw');
  }
};

export { validateSuit, validateRank, validatePlayerNames, validateCards, validateAmountToDraw };
