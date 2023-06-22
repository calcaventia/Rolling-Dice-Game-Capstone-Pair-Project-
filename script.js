let diceBtn = document.getElementById("dice-btn");
let gameCounter = 0;
let maxGames = 5;
let scores = [0, 0];

// Setup controls section
function setupDice() {
  let randomDice = Math.floor(Math.random() * 6 + 1);
  let diceLocation = "img/Dice-" + randomDice + ".png";
  let img1 = document.querySelectorAll(".img-dice")[0];
  img1.setAttribute("src", diceLocation);

  let randomDice2 = Math.floor(Math.random() * 6 + 1);
  let diceLocation2 = "img/Dice-" + randomDice2 + ".png";
  let img2 = document.querySelectorAll(".img-dice")[1];
  img2.setAttribute("src", diceLocation2);

  if (randomDice > randomDice2) {
    document.querySelector(".winner-display").innerHTML =
      "&#128681; Player 1 Wins!";
    scores[0] += 1;
  } else if (randomDice < randomDice2) {
    document.querySelector(".winner-display").innerHTML =
      "Player 2 Wins! &#128681;";
    scores[1] += 1;
  } else {
    document.querySelector(".winner-display").innerHTML =
      "&#128681; Draw! &#128681;";
  }
}

// Score display section
function updateScoreDisplay() {
  document.getElementById("current_0").innerHTML = scores[0];
  document.getElementById("current_1").innerHTML = scores[1];
}

// Game counter and button section
function updateGameCounter() {
  gameCounter++;

  if (gameCounter === maxGames) {
    diceBtn.innerHTML = "Show Winner";
  }
}

// Main dice game function
function diceGame() {
  if (gameCounter < maxGames) {
    setupDice();

    updateScoreDisplay();

    updateGameCounter();
  } else {
    let winner;
    if (scores[0] > scores[1]) {
      winner = "Player 1";
    } else if (scores[0] < scores[1]) {
      winner = "Player 2";
    } else {
      winner = "It's a Draw";
    }
    document.querySelector(
      ".winner-display"
    ).innerHTML = `Winner: ${winner} &#x1F3C6;`;
    diceBtn.style.display = "none";
  }
}

// Game reset
function diceNewGame() {
  let img1 = document.querySelectorAll(".img-dice")[0];
  let img2 = document.querySelectorAll(".img-dice")[1];
  img1.setAttribute("src", "img/Dice-1.png");
  img2.setAttribute("src", "img/Dice-1.png");

  scores = [0, 0];
  gameCounter = 0;

  document.getElementById("current_0").innerHTML = scores[0];
  document.getElementById("current_1").innerHTML = scores[1];

  document.querySelector(".winner-display").innerHTML = "Are you Ready?";

  diceBtn.style.display = "block";
  diceBtn.innerHTML = "Roll Dice!";
}
