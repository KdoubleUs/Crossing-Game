let ball = document.querySelector(".ball");
movePosition = 30;
window.addEventListener("load", () => {
  ball.style.left = 0;
  //   ball.style.right = 0;
  ball.style.bottom = 0;
});

function moveRight() {
  console.log(ball);
  //   ball.style.left = ball.style.left + 20 + "px";
}
// moveRight();
// ball.style.left = "0px";
// console.log(position);
window.addEventListener("keydown", function (e) {
  //   e.preventDefault();
  switch (e.key) {
    case "ArrowLeft":
      ball.style.left = parseInt(ball.style.left) - movePosition + "px";
      checkCollision();
      break;
    case "ArrowRight":
      ball.style.left = parseInt(ball.style.left) + movePosition + "px";
      checkCollision();
      break;
    case "ArrowDown":
      ball.style.bottom = parseInt(ball.style.bottom) - movePosition + "px";
      checkCollision();
      break;
    case "ArrowUp":
      ball.style.bottom = parseInt(ball.style.bottom) + movePosition + "px";
      checkCollision();
      break;
  }
});

//check for collision detection
// let blockPosition = ball.getBoundingClientRect();
function checkSpot() {
  let blockPosition = ball.getBoundingClientRect();
  console.log(blockPosition);
  console.log(blockPosition.top);
  console.log(blockPosition.bottom);
  console.log(blockPosition.left);
  console.log(blockPosition.right);
}
checkSpot();
//check for block position
let block1 = document.getElementById("b4").getBoundingClientRect();

function checkBlockSpot() {
  let block1 = document.getElementById("b4").getBoundingClientRect();
  console.log(block1);
  console.log(block1.top);
  console.log(block1.bottom);
  console.log(block1.left);
  console.log(block1.right);
}

checkBlockSpot();

//checking for collision
let testBlock = document.querySelectorAll(".block");
let safeZone = document.querySelector(".safe");

function checkCollision() {
  let yellowBall = ball.getBoundingClientRect();
  let safeArena = safeZone.getBoundingClientRect();
  testBlock.forEach(testBlock => {
    // let blocky = document.getElementById("b4").
    let blocky = testBlock.getBoundingClientRect();
    if (
      blocky.x < yellowBall.x + blocky.width &&
      blocky.x + blocky.width > yellowBall.x &&
      blocky.y < yellowBall.y + yellowBall.height &&
      blocky.height + blocky.y > yellowBall.y
    ) {
      console.log(`collision occured`);
      alert(`you just got smacked by the block start again`);
      resetPosition();
    }

    if (
      safeArena.x < yellowBall.x + safeArena.width &&
      safeArena.x + safeArena.width > yellowBall.x &&
      safeArena.y < yellowBall.y + yellowBall.height &&
      safeArena.height + safeArena.y > yellowBall.y
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

document;
