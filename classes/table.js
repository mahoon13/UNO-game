class Table {
  constructor(lastCardName = null) {
    this.lastCard = null;
    this.element = this.createElement();
    if (!lastCardName) {
      this.setLastCard(Deck.createRandomCard());
    } else {
      this.setLastCard(Deck.createCardByName(lastCardName));
    }
  }

  createElement() {
    let table = document.createElement("div");
    table.classList.add("table");
    table.class = this;
    return table;
  }

  getElement() {
    return this.element;
  }

  getLastCard() {
    return this.lastCard;
  }

  setLastCard(card) {
    this.lastCard = card;
    let lastCard = new Image();
    lastCard.src = "../assests/" + card.name + ".png";
    lastCard.classList.add("card");
    lastCard.classList.add("last__card");
    this.element.innerHTML = "";
    this.element.appendChild(lastCard);
  }
}
