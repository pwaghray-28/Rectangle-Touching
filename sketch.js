function setup() {
  createCanvas(800,400);
  a = createSprite(400, 200, 50, 50);
  v = createSprite(200,300,50,50)
  v.shapeColor = "green"
  a.shapeColor = "blue"
  b = createSprite(300,100,50,50)
  c = createSprite(100,50,50,50)
  b.shapeColor = "purple"
  c.shapeColor = "pink"
}

function draw() {
  background(255,255,255);  
  drawSprites();
  rectMode (CENTER)
  v.x = mouseX
  v.y = mouseY
  if(touching(v,a)){
   v.shapeColor = "red"
   a.shapeColor = "red"
  }
  else{

    a.shapeColor = "blue"
    v.shapeColor = "green"
  }
   
}
