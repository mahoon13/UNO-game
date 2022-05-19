class Card {
  constructor(name, color, number) {
    this.name = name;
    this.color = color;
    this.number = number;
    this.cardImagePath = "./assests/" + name + ".png";
    this.element = this.createElement();
  }

  createElement() {
    let img = new Image();
    img.classList.add("card");
    img.src = this.cardImagePath;
    img.class = this;
    return img;
  }

  getHideCardElement() {
    let hideCard = this.element;
    hideCard.src = "./assests/card_back.png";
    hideCard.classList.add("hide");
    return hideCard;
  }

  getElement() {
    return this.element;
  }

  getName() {
    return this.name;
  }
}
