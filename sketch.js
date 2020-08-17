var dog,dogimage,dogimage1;

function preload()
{
  dogimage=loadImage("images/dogImg.png");
  dogimage1=loadImage("images/happydog.png");
	//load images here
}
var score=20;
function setup() {
  createCanvas(800, 700);
  dog=createSprite(400,350,50,50);
  dog.addImage(dogimage);
  dog.scale=0.25;
  
}


function draw() { 
  background("green");

    if (keyCode ===38) {
      score=score-1;
      dog.addImage(dogimage1)
      if (score<0) {
        score=0;
      }
    }





  textSize(34);
  text("Food Remaining :"+score,200,200);
  textSize(20);
  text("Press Up Arrow To Feed",200,50);

  drawSprites();
  //add styles here
  dog.display();

}






