class Computer {
  constructor(game) {
    this.game = game;
  }

  getGame() {
    return this.game;
  }

  think() {
    var lastCard = this.getGame().board.table.getLastCard();
    var myDeck = this.getGame().board.computerDeck;
    var myCards = myDeck.getCards();
    for (let card of myCards) {
      if (card.color == lastCard.color || card.number == lastCard.number) {
        this.game.playCard(myDeck, card);
        return;
      }
    }
    this.getGame().board.drawCard(myDeck);
  }
}
