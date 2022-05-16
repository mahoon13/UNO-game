class Game {
  constructor() {
    this.board = new Board();
    this.element = document.getElementById("root");
    this.generateBoard();
    this.isPlayerTurn = [true, false][Math.floor(Math.random() * 2)];
    this.reloadStat();
    this.showPlayableCards();
    this.addCardClickHandler();
  }

  reloadStat() {
    let stat = document.querySelector(".stat");
    if (!stat) {
      stat = document.createElement("div");
    }
    stat.classList.add("stat");
    stat.innerHTML = this.isPlayerTurn ? "You" : "Computer";
    this.element.appendChild(stat);
  }

  addCardClickHandler() {
    if (!this.isPlayerTurn) return;

    this.board.playerDeck.getCards().forEach((card) => {
      card.getElement().addEventListener("click", () => {
        if (card.getElement().classList.contains("playable__card")) {
          this.playCard(this.board.playerDeck, card);
        }
      });
    });
  }

  playCard(deck, card) {
    deck.removeCard(card);
    this.board.table.setLastCard(card);
    this.showPlayableCards();
    this.changeTurn();
  }

  showPlayableCards() {
    let lastCard = this.board.table.getLastCard();
    if (lastCard) {
      this.board.playerDeck.getCards().forEach((card) => {
        card.element.classList.remove("playable__card");
        if (card.color == lastCard.color || card.number == lastCard.number) {
          card.element.classList.add("playable__card");
        }
      });
    } else
      this.board.playerDeck.getCards().forEach((card) => {
        card.element.classList.add("playable__card");
      });
  }

  generateBoard() {
    this.element.appendChild(this.board.getElement());
  }

  changeTurn() {
    this.isPlayerTurn = !this.isPlayerTurn;
    this.reloadStat();
  }
}
