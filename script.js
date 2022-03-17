let ball = document.querySelector(".ball");
movePosition = 50;
window.addEventListener("load", () => {
  ball.style.left = 0;
  ball.style.bottom = 0;
});

window.addEventListener("keydown", function (e) {
  // e.preventDefault();
  switch (e.key) {
    case "ArrowLeft":
      ball.style.left = parseInt(ball.style.left) - movePosition + "px";
      checkCollision();
      checkLoser();
      safeBlock();
      break;
    case "ArrowRight":
      ball.style.left = parseInt(ball.style.left) + movePosition + "px";
      checkCollision();
      checkLoser();
      safeBlock();
      break;
    case "ArrowDown":
      ball.style.bottom = parseInt(ball.style.bottom) - movePosition + "px";

      checkCollision();
      checkLoser();
      safeBlock();
      break;
    case "ArrowUp":
      ball.style.bottom = parseInt(ball.style.bottom) + movePosition + "px";
      checkCollision();
      checkLoser();
      safeBlock();
      break;
  }
});

//check for block position
let block1 = document.getElementById("b4").getBoundingClientRect();

//checking for collision
let testBlock = document.querySelectorAll(".block");
// let safeZone = document.querySelector(".safe");
// let yellowBall = ball.getBoundingClientRect();

function checkCollision() {
  let hearts = document.querySelector(".heart");
  let yellowBall = ball.getBoundingClientRect();
  // let safeArena = safeZone.getBoundingClientRect();

  testBlock.forEach(testBlock => {
    let blocky = testBlock.getBoundingClientRect();
    if (
      blocky.x < yellowBall.x + blocky.width &&
      blocky.x + blocky.width > yellowBall.x &&
      blocky.y < yellowBall.y + yellowBall.height &&
      blocky.height + blocky.y > yellowBall.y
    ) {
      console.log(blocky.x);
      console.log(blocky.y);
      console.log(blocky.height);
      console.log(blocky.width);
      console.log(blocky.left);
      console.log(blocky.right);

      console.log(yellowBall.x);
      console.log(yellowBall.y);
      console.log(yellowBall.height);
      console.log(yellowBall.width);
      console.log(yellowBall.left);
      console.log(yellowBall.right);

      console.log(`collision occured`);
      hearts.remove();

      resetPosition();
    }
  });
}

//function check for safe zone
function safeBlock() {
  let yellowBalls = ball.getBoundingClientRect();
  let safeZone = document.querySelector(".safe");

  let safeArena = safeZone.getBoundingClientRect();

  if (
    safeArena.x < yellowBalls.x + safeArena.width &&
    safeArena.x + safeArena.width > yellowBalls.x &&
    safeArena.y < yellowBalls.y + yellowBalls.height &&
    safeArena.height + safeArena.y > yellowBalls.y
  ) {
    console.log(`you are safe`);
    alert(`Congratulation you are safe`);
    resetPosition();
  }
}

//change the yellow ball back to the original spot
function resetPosition() {
  ball.style.left = 0;
  ball.style.bottom = 0;
}

function checkLoser() {
  let totalHearts = document.querySelectorAll(".heart");
  if (totalHearts.length === 0) {
    alert(`you lost. Restart the game!`);
  }
}

//reset the game from the button
let restart = document.getElementById("reset");
restart.addEventListener("click", () => {
  window.location.reload();
});

// start the game
let startGame = document.getElementById("startBtn");
startGame.addEventListener("click", function () {
  let game = document.querySelector(".game-container");
  game.style.display = "block";
  let startMenu = document.querySelector(".start");
  startMenu.style.display = "none";
});
