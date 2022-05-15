class Board {
  constructor() {
    this.playerDeck = new Deck();
    this.computerDeck = new Deck(8, true);
    this.table = new Table();
    this.element = this.createElement();
  }

  createElement() {
    let body = document.documentElement;
    let board = document.createElement("div");
    board.classList.add("board");
    board.appendChild(this.playerDeck.getElement());
    board.appendChild(this.table.getElement());
    board.appendChild(this.computerDeck.getElement());
    board.class = this;
    return board;
  }

  getElement() {
    return this.element;
  }
}
