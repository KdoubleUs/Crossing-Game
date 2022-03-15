let ball = document.querySelector(".ball");
movePosition = 50;
window.addEventListener("load", () => {
  ball.style.left = 0;
  //   ball.style.right = 0;
  ball.style.bottom = 0;
});

window.addEventListener("keydown", function (e) {
  //   e.preventDefault();
  switch (e.key) {
    case "ArrowLeft":
      ball.style.left = parseInt(ball.style.left) - movePosition + "px";
      checkCollision();
      checkLoser();
      break;
    case "ArrowRight":
      ball.style.left = parseInt(ball.style.left) + movePosition + "px";
      checkCollision();
      checkLoser();

      break;
    case "ArrowDown":
      ball.style.bottom = parseInt(ball.style.bottom) - movePosition + "px";

      checkCollision();
      checkLoser();

      break;
    case "ArrowUp":
      ball.style.bottom = parseInt(ball.style.bottom) + movePosition + "px";
      checkCollision();
      checkLoser();

      break;
  }
});

//check for collision detection
// let blockPosition = ball.getBoundingClientRect();
// function checkSpot() {
//   let blockPosition = ball.getBoundingClientRect();
//   console.log(blockPosition);
//   console.log(blockPosition.top);
//   console.log(blockPosition.bottom);
//   console.log(blockPosition.left);
//   console.log(blockPosition.right);
// }
// checkSpot();
//check for block position
let block1 = document.getElementById("b4").getBoundingClientRect();

// function checkBlockSpot() {
//   let block1 = document.getElementById("b4").getBoundingClientRect();
//   console.log(block1);
//   console.log(block1.top);
//   console.log(block1.bottom);
//   console.log(block1.left);
//   console.log(block1.right);
// }

// checkBlockSpot();

//checking for collision
let testBlock = document.querySelectorAll(".block");
let safeZone = document.querySelector(".safe");

function checkCollision() {
  let hearts = document.querySelector(".heart");

  let yellowBall = ball.getBoundingClientRect();
  let safeArena = safeZone.getBoundingClientRect();

  testBlock.forEach(testBlock => {
    // let blocky = document.getElementById("b4").
    let blocky = testBlock.getBoundingClientRect();
    // let collision = false;
    if (
      blocky.x < yellowBall.x + blocky.width &&
      blocky.x + blocky.width > yellowBall.x &&
      blocky.y < yellowBall.y + yellowBall.height &&
      blocky.height + blocky.y > yellowBall.y
      // yellowBall.x < yellowBall.width + blocky.x &&
      // yellowBall.x + yellowBall.width > blocky.x &&
      // yellowBall.y < blocky.y + blocky.height &&
      // yellowBall.height + yellowBall.y > blocky.y
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
      // collision = true;
      // alert(`you just got smacked by the block start again`);
      // loseLife();
      checkLoser();
      resetPosition();
    }
    if (
      safeArena.x < yellowBall.x + safeArena.width &&
      safeArena.x + safeArena.width > yellowBall.x &&
      safeArena.y < yellowBall.y + yellowBall.height &&
      safeArena.height + safeArena.y > yellowBall.y
      // yellowBall.x < yellowBall.width + safeArena.x &&
      // yellowBall.x + yellowBall.width > safeArena.x &&
      // yellowBall.y < safeArena.y + safeArena.height &&
      // yellowBall.height + yellowBall.y > safeArena.y
    ) {
      console.log(`you are safe`);
      alert(`Congratulation you are safe`);
      resetPosition();
    }
  });
}

function resetPosition() {
  ball.style.left = 0;
  ball.style.bottom = 0;
}

function checkLoser() {
  // let hearts = document.querySelector(".heart");
  let totalHearts = document.querySelectorAll(".heart");
  // if (totalHearts.length !== 0) {
  //   hearts.remove();
  // } else
  if (totalHearts.length === 0) {
    alert(`you lost. Restart the game!`);
  }
  // console.log(totalHearts.length);
}
// loseLife();
// checkLoser();

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
