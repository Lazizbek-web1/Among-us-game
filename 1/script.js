function gamePage() {
  let a = document.getElementById("herogape");
  a.style.display = "none";
  let b = document.getElementById("gameContainer");
  b.style.display = "block";
}
let imposterPosition = {
  posX: -1200,
  posY: 0,
};

let imposterArea = {
  areaDiv: document.querySelector(".area"),
  taskAreas: [],
  WalkingArea: [{}, {}, {}],
  areaCalculator: (arrow) => {
    return true;
  },
};
imposterArea.areaCalculator();

let moveX;
let moveY;
let speed;

let imposterImg = document.getElementById("map");

addEventListener("keydown", (e) => {
  if (e.code == "KeyA") {
    moveX = "r"; /* 
    walkSide = "right"; */ /* 
    action = "walk"; */
    if (e.shiftKey == true) {
      speed = 10;
    } else {
      speed = 5;
    }
    console.log(e);
  }

  if (e.code == "KeyD") {
    moveX = "l"; /* 
    walkSide = "left"; */ /* 
    action = "walk"; */
    if (e.shiftKey == true) {
      speed = 10;
    } else {
      speed = 5;
    }
    console.log(e);
  }

  if (e.code == "KeyS") {
    moveY = "b"; /* 
    action = "walk"; */
    if (e.shiftKey == true) {
      speed = 10;
    } else {
      speed = 5;
    }
    console.log(e);
  }

  if (e.code == "KeyW") {
    moveY = "t"; /* 
    action = "walk"; */
    if (e.shiftKey == true) {
      speed = 10;
    } else {
      speed = 5;
    }
    console.log(e);
  }
  if (e.code == "Space") {
    killingAnimation();
  }
});

addEventListener("keyup", (e) => {
  if (e.code == "KeyD" || e.code == "KeyA") {
    moveX = "";
    action = "stand";
  }
  if (e.code == "KeyS" || e.code == "KeyW") {
    moveY = "";
    action = "stand";
  }
});

setInterval(() => {
  if (moveY == "b") {
    imposterPosition.posY = imposterPosition.posY - speed;
    imposterImg.style.top = imposterPosition.posY + "px";
    action = "walk";
    console.log(imposterPosition.posX, imposterPosition.posY);
  } else if (moveY == "t") {
    imposterPosition.posY = imposterPosition.posY + speed;
    imposterImg.style.top = imposterPosition.posY + "px";
    action = "walk";
    console.log(imposterPosition.posX, imposterPosition.posY);
  }

  if (moveX == "r") {
    imposterPosition.posX = imposterPosition.posX + speed;
    imposterImg.style.left = imposterPosition.posX + "px";
    action = "walk";
    walkSide = "left";
    console.log(imposterPosition.posX, imposterPosition.posY);
  } else if (moveX == "l") {
    imposterPosition.posX = imposterPosition.posX - speed;
    imposterImg.style.left = imposterPosition.posX + "px";
    action = "walk";
    walkSide = "right";
    console.log(imposterPosition.posX, imposterPosition.posY);
  }
  let f = window.getComputedStyle(imposterImg);
  let j = f.top;
  let h = f.left;
  imposterArea.areaDiv.style.left =
    Number(h.slice(0, h.length - 2)) + 1075 + "px";
  imposterArea.areaDiv.style.top =
    Number(j.slice(0, j.length - 2)) + 465 + "px";
  imposterArea.areaDiv.style.display = "fixed";
}, 20);

let walkNumber = 1;
let action;
let walkSide = "right";
let imposterHimSelf = document.getElementById("imposter");
setInterval(() => {
  if (action == "walk") {
    imposterHimSelf.src = `./actions/walk/${walkSide}/blue red ${walkNumber}.png`;
    walkNumber++;
    if (walkNumber == 5) {
      walkNumber = 1;
    }
  }
  if (action == "stand") {
    imposterHimSelf.src = `./actions/stand/blue red.png`;
  }
}, 150);

let killAnimCout = 1;
let setTimer;
let setTimer2;

function killingAnimation() {
  setTimer = setInterval(() => {
    imposterHimSelf.src = `./actions/kill/blue red ${killAnimCout}.png`;
    killAnimCout++;
    if (/* killAnimCout == 10 || */ killAnimCout == 11 || killAnimCout == 10) {
      imposterHimSelf.style.width = "100px";
    }
    if (killAnimCout == 13) {
      killAnimCout = 1;
      clearInterval(setTimer);
    }
  }, 80);
  setTimer2 = setTimeout(() => {
    imposterHimSelf.style.width = "50px";
    imposterHimSelf.src = "./actions/stand/blue red.png";
  }, 1000);
}
