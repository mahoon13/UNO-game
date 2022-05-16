class Table {
  constructor() {
    this.lastCard = null;
    this.element = this.createElement();
    this.setLastCard(this.createRandomCard());
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

  createRandomCard() {
    const colors = ["b", "g", "r", "y"];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    let randomNumber = Math.floor(Math.random() * 9);
    return new Card(
      randomColor + "_" + randomNumber,
      randomColor,
      randomNumber
    );
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
