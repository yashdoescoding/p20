var bg, sleep, brush, gym, eat, drink, bath, move, astronaut;


function preload() {
  bg = loadImage("iss.png");
  sleep = loadAnimation("sleep.png");
  brush = loadAnimation("brush.png");
  gym = loadAnimation("gym1.png", "gym2.png", "gym11.png", "gym12.png");
  eat = loadAnimation("eat1.png", "eat2.png");
  drink = loadAnimation("drink1.png", "drink2.png");
  bath = loadAnimation("bath1.png", "bath2.png");
  move = loadAnimation("move1.png", "move2.png");
}

function setup() {
  createCanvas(600,500);
  astronaut = createSprite(300, 230);
  astronaut.scale = 0.1;
}

function draw() {
  background(bg);  
  drawSprites();
  fill("white");
  text("instructions:", 20, 35);
  textSize(15);
  text("upArrow = brushing", 20, 55);
  text("downArrow = gym", 20, 70);
  text("leftArrow = eating", 20, 85);
  text("rightArrow = bathing", 20, 100);
  text("mKey = moving", 20, 115);
  edges = createEdgeSprites();
  astronaut.bounceOff(edges)
  if (keyDown("UP_ARROW")) {
    astronaut.addAnimation("brush", brush)
    astronaut.changeAnimation("brush")
    astronaut.y = 350;
    astronaut.setVelocity(0, 0)
    
  }
  if (keyDown("DOWN_ARROW")) {
    astronaut.addAnimation("gym", gym)
    astronaut.changeAnimation("gym")
    astronaut.y = 350;
    astronaut.setVelocity(0, 0)

  }
  if (keyDown("LEFT_ARROW")) {
    astronaut.addAnimation("eat", eat)
    astronaut.changeAnimation("eat")
    astronaut.x = 150;
    astronaut.y = 350;
    astronaut.setVelocity(0.5, 0.5)

  }
  if (keyDown("RIGHT_ARROW")) {
    astronaut.addAnimation("bath", bath)
    astronaut.changeAnimation("bath")
    astronaut.x = 300;
    astronaut.setVelocity(0, 0)

  }
  if (keyDown("M")) {
    astronaut.addAnimation("move", move)
    astronaut.changeAnimation("move")
    astronaut.setVelocity(1, 1)

  }
}