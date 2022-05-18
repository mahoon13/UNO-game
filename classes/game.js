class Game {
  constructor(details = null) {
    this.board = new Board(this, details);
    this.element = document.getElementById("root");
    this.generateBoard();
    this.computer = new Computer(this);
    if (!details) {
      this.isPlayerTurn = [true, false][Math.floor(Math.random() * 2)];
    } else {
      this.isPlayerTurn = details.isPlayerTurn;
    }
    if (!this.isPlayerTurn) this.computerThink();
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
    this.board.playerDeck.getCards().forEach((card) => {
      card.getElement().addEventListener("click", () => {
        if (
          this.isPlayerTurn &&
          card.getElement().classList.contains("playable__card")
        ) {
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
    } else {
      this.board.playerDeck.getCards().forEach((card) => {
        card.element.classList.add("playable__card");
      });
    }
    this.addCardClickHandler();
  }

  generateBoard() {
    this.element.appendChild(this.board.getElement());
  }

  changeTurn() {
    this.isPlayerTurn = !this.isPlayerTurn;
    this.reloadStat();
    if (!this.isPlayerTurn) this.computerThink();
  }

  computerThink() {
    var that = this;
    setTimeout(() => {
      that.computer.think();
    }, 4000);
  }

  getDetails() {
    return {
      issPlayerTurn: this.isPlayerTurn,
      playerCards: this.board.playerDeck
        .getCards()
        .map((card) => card.getName()),
      computerCards: this.board.computerDeck
        .getCards()
        .map((card) => card.getName()),
      lastCardName: this.board.table.getLastCard().getName(),
    };
  }
}
