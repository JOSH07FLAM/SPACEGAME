var bg,sleep,brush,gym,eat,bath,move
var astronaut

function preload (){
  bg = loadImage ("Images/iss.png")
  sleep = loadAnimation("Images/sleep.png")
  brush = loadAnimation("Images/brush.png")
  bath = loadAnimation("Images/bath1.png","Images/bath2.png")
gym = loadAnimation("Images/gym1.png","Images/gym2.png","Images/gym11.png","Images/gym12.png")
eat = loadAnimation("Images/eat1.png","Images/eat2.png")
drink = loadAnimation("Images/drink1.png","Images/drink2.png")
move = loadAnimation("Images/move.png","Images/move1.png")
}

















function setup() {
  createCanvas(600,500);
 astronaut =  createSprite(300, 230);
 astronaut.addAnimation("sleeping",sleep)
 astronaut.scale=0.1
}

function draw() {
  background(bg);  
  drawSprites();
  textSize(20)
  fill ("white")
  text  ("Instructions",20,35)
  textSize(15)
  text("up arrow = brushing",20,55)
  text("down arrow = gyming",20,70)
  text("left arrow = eating ",20,85)
  text("right arrow = bathing",20,100)
  text("m key = moving",20,115)
edges = createEdgeSprites()
astronaut.bounceOff(edges)
if(keyDown("UP_ARROW")){
  astronaut.addAnimation("brushing",brush)
  astronaut.changeAnimation("brushing")
  astronaut.y = 350
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}
if(keyDown("DOWN_ARROW")){
  astronaut.addAnimation("gyming",gym)
  astronaut.changeAnimation("gyming")
  astronaut.y = 350
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}
if(keyDown("LEFT_ARROW")){
  astronaut.addAnimation("eating",eat)
  astronaut.changeAnimation("eating")
  astronaut.y = 350
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}
if(keyDown("RIGHT_ARROW")){
  astronaut.addAnimation("bathing",bath)
  astronaut.changeAnimation("bathing")
  astronaut.y = 350
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}
if(keyDown("m")){
  astronaut.addAnimation("moving",move)
  astronaut.changeAnimation("moving")
  astronaut.velocityX = 1;
  astronaut.velocityY = 1;
}



}