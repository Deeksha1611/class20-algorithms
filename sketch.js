var cat,dog;

function setup() {
  createCanvas(800,400);

  cat=createSprite(400, 200, 50, 50);
  cat.shapeColor="red";
  cat.debug=true;

  dog=createSprite(500,200,80,80);
  dog.shapeColor="red";
  dog.debug=true;
}

function draw() {
  background("pink"); 

  dog.y=mouseY;
  dog.x=mouseX;

  if(dog.x-cat.x <dog.width/2+cat.width/2 && cat.x-dog.x <dog.width/2+cat.width/2 &&
    dog.y-cat.y< dog.height/2+cat.height/2 && cat.y-dog.y< dog.height/2+cat.height/2){
    dog.shapeColor="green";
    cat.shapeColor="green";
  }
  else{
    dog.shapeColor="red";
    cat.shapeColor="red";
}
   
  drawSprites();

  //text("dog x position ="+dog.x,400,20);
}