var spacecraft;
var spaceImage1, spaceImage2, spaceImage3, spaceImage4;
var iss, issImage;
var spacebg;
var hasDocked = false

function preload(){
spaceImage1=loadImage("spacecraft1.png");
spaceImage2=loadImage("spacecraft2.png");
spaceImage3=loadImage("spacecraft3.png");
spaceImage4=loadImage("spacecraft4.png");

issImage=loadImage("iss.png");
spacebg = loadImage("spacebg.jpg");



}

function setup() {
  createCanvas(800,400);

spacecraft= createSprite(500,300);
spacecraft.addImage(spaceImage1);
spacecraft.scale = 0.2;

iss = createSprite(400,100);
iss.addImage(issImage);
iss.scale = 0.5;



}

function draw() {
  background(spacebg);  

if(!hasDocked){
  spacecraft.x=spacecraft.x+random(-1,1);


if(keyDown(UP_ARROW)){
spacecraft.y = spacecraft.y - 2;

}
if(keyDown(DOWN_ARROW)){
  spacecraft.addImage(spaceImage2);
  spacecraft.y = spacecraft.y + 2;

  
  }
  if(keyDown(LEFT_ARROW)){
    spacecraft.addImage(spaceImage3);
    spacecraft.x = spacecraft.x - 2;
    
    }
    if(keyDown(RIGHT_ARROW)){
      spacecraft.addImage(spaceImage4);
      spacecraft.x = spacecraft.x + 2;
      
      }
}

      if(spacecraft.x<=370&&spacecraft.x>=360&&spacecraft.y<=(iss.y+80)){
        hasDocked = true;
        fill("white")
        textSize(20)
        text("Docking Successful", 500,300)
      }
       console.log(mouseX +":"+ mouseY)
       console.log(iss.y+70)
       console.log(spacecraft.x)
       
  drawSprites();
}