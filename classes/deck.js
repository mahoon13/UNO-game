class Deck {
  constructor(cardNames = null, cardsCount = 8, hideCards = false) {
    this.cardsCount = cardsCount;
    this.cards = [];
    this.hideCards = hideCards;
    if (!cardNames) {
      this.generateCards(this.cardsCount);
    } else {
      this.cards = cardNames.map((name) => Deck.createCardByName(name));
    }
    this.element = this.createElement(hideCards);
  }

  static createCardByName(name) {
    let cardColor = name.slice(0, 1);
    let cardNumber = name.slice(2);
    let card = new Card(name, cardColor, cardNumber);
    return card;
  }

  createElement(hideCards) {
    let deck = document.createElement("div");
    deck.classList.add("deck");
    this.cards.forEach((card) => {
      if (!hideCards) {
        deck.appendChild(card.getElement());
      } else {
        deck.appendChild(card.getHideCardElement());
      }
    });
    deck.class = this;
    return deck;
  }

  getElement() {
    return this.element;
  }

  generateCards(cardsCount) {
    for (let i = 0; i < cardsCount; i++) {
      let randomCard = this.createRandomCard();
      this.addCard(randomCard);
    }
  }

  static createRandomCard() {
    const colors = ["b", "g", "r", "y"];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    let randomNumber = Math.floor(Math.random() * 9);
    return new Card(
      randomColor + "_" + randomNumber,
      randomColor,
      randomNumber
    );
  }

  getCards() {
    return this.cards;
  }

  addCard(card) {
    this.cards.push(card);
  }

  drawCard(card) {
    this.addCard(card);
    let cardElement = card.getElement();
    if (this.hideCards) card.getHideCardElement();
    this.element.appendChild(cardElement);
  }

  removeCard(card) {
    let cardIndex = this.getCards().indexOf(card);
    if (cardIndex !== -1) {
      this.cards.splice(cardIndex, 1);
    }
    this.element.removeChild(card.getElement());
    this.cardsCount--;
  }
}
