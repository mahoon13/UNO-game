const root = document.getElementById("root");

window.onload = () => {
  let game;
  let gameDetails = localStorage.getItem("game");
  if (!gameDetails) game = startGame();
  game = new Game(JSON.parse(gameDetails));

  function startGame() {
    let game = new Game();
    localStorage.setItem("game", JSON.stringify(game.getDetails()));
    return game;
  }
};
