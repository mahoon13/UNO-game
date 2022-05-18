class Board {
  constructor(game, details = null) {
    if(details) {
      this.playerDeck = new Deck(details.playerCards);
      this.computerDeck = new Deck(details.computerCards, 8, true);
      this.table = new Table(details.lastCardName);
    } else {
      this.playerDeck = new Deck();
      this.computerDeck = new Deck(null, 8, true);
      this.table = new Table();
    }
    this.game = game;
    this.element = this.createElement();
  }

  getGame() {
    return this.game;
  }

  createElement() {
    let body = document.documentElement;
    let board = document.createElement("div");
    board.classList.add("board");
    board.appendChild(this.playerDeck.getElement());

    let row = document.createElement("div");
    row.classList.add("row");
    board.appendChild(row);
    row.appendChild(this.table.getElement());

    let drawCard = document.createElement("div");
    drawCard.classList.add("draw__card");
    row.appendChild(drawCard);
    drawCard.addEventListener("click", () => {
      this.drawCard(this.playerDeck);
    });

    board.appendChild(this.computerDeck.getElement());
    board.class = this;
    return board;
  }

  drawCard(deck) {
    deck.drawCard(Deck.createRandomCard());
    this.game.showPlayableCards();
    this.game.changeTurn();
  }

  getElement() {
    return this.element;
  }
}
