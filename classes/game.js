class Game {
  constructor() {
    this.board = new Board();
    this.element = document.getElementById("root");
    this.generateBoard();
    this.isPlayerTurn = [true][Math.floor(Math.random() * 1)];
    this.addStat();
    this.showPlayableCards();
    this.addCardClickHandler();
  }

  addStat() {
    let stat = document.createElement("div");
    stat.classList.add("stat");
    stat.innerHTML = this.isPlayerTurn ? "You" : "Computer";
    this.element.appendChild(stat);
  }

  addCardClickHandler() {
    if (!this.isPlayerTurn) return;

    this.board.playerDeck.getCards().forEach((card) => {
      card.getElement().addEventListener("click", () => {
        if (!card.getElement().classList.contains("np")) {
          this.playCard(this.board.playerDeck, card);
        }
      });
    });
  }

  playCard(deck, card) {
    deck.removeCard(card);
    this.board.table.setLastCard(card);
    this.showPlayableCards();
  }

  showPlayableCards() {
    let lastCard = this.board.table.getLastCard();
    if (lastCard) {
      this.board.playerDeck.getCards().forEach((card) => {
        if (card.color != lastCard.color && card.number != lastCard.number) {
          card.element.classList.add("np");
        }
      });
    }
  }

  generateBoard() {
    this.element.appendChild(this.board.getElement());
  }
}
