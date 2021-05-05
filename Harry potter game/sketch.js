var grass, grassImg;
var m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14, m15, m16, m17, m18, m19, m20, m21, m22, m23, m24, m25;
var harry, harryImg;
var hor1, hor1Img, hor2, hor2Img, hor3, hor3Img, hor4, hor4Img, hor5, hor5Img, hor6, hor6Img, hor7, hor7Img;
var fhor1,fhor2,fhor3;
var sword, swordImg;
var hb1,hb2,hb3,hb4,hb5,hb6,hb7,hb8,hb9,hb10;
var e1, e2, e3, enemiesGroup;
var enemies;
var score=0;
var horcrux=0;
function preload(){
  grassImg= loadImage("background.jpg");
  harryImg= loadImage("harry_potter.png");
  hor1Img = loadImage("hor1.png");
  hor2Img = loadImage("hor2.png");
  hor3Img = loadImage("hor3.png");
  hor4Img = loadImage("hor4.png");
  hor5Img = loadImage("hor5.png");
  hor6Img = loadImage("hor6.png");
  hor7Img = loadImage("hor7.png");
  swordImg = loadImage("Sword.png");
  e1=loadImage("enemies/bellatrix lestrange.png");
  e2=loadImage("enemies/draco malfoy.png");
  e3=loadImage("enemies/voldemort.png");
}

function setup(){
  createCanvas(850,650);

  harry = createSprite(50,50);
  harry.addImage(harryImg);
  harry.scale=0.2;
  
  hb1 = createSprite(790,600,50,50);
  hb1.shapeColor="red";
  hb2 = createSprite(185,520,50,50);
  hb2.shapeColor="black";
  hb3 = createSprite(225,225,50,50);
  hb3.shapeColor="red";
  hb4 = createSprite(395,175,50,50);
  hb4.shapeColor="black";
  hb5 = createSprite(590,175,50,50);
  hb5.shapeColor="red";
  hb6 = createSprite(490,390,50,50);
  hb6.shapeColor="red";
  hb7 = createSprite(790,490,50,50);
  hb7.shapeColor="black";
  hb8 = createSprite(60,515,50,50);
  hb8.shapeColor="red";
  hb9 = createSprite(400,390,50,50);
  hb9.shapeColor="black";
  hb10 = createSprite(695,165,50,50);
  hb10.shapeColor="black";


  hor1 = createSprite(790, 600);
  hor1.addImage(hor1Img);
  hor1.scale=0.2;
  hor1.visible=false;

  hor2 = createSprite(185, 520);
  hor2.addImage(hor2Img);
  hor2.scale=0.2;
  hor2.visible=false;

  hor3 = createSprite(225,225);
  hor3.addImage(hor3Img);
  hor3.scale=0.2;
  hor3.visible=false;

  hor4 = createSprite(395,175);
  hor4.addImage(hor4Img);
  hor4.scale=0.2;
  hor4.visible=false;

  hor5 = createSprite(590,175);
  hor5.addImage(hor5Img);
  hor5.scale=0.2;
  hor5.visible=false;

  hor6 = createSprite(490,390);
  hor6.addImage(hor6Img);
  hor6.scale=0.15;
  hor6.visible=false;

  hor7 = createSprite(760,490);
  hor7.addImage(hor7Img);
  hor7.scale=0.2;
  hor7.visible=false;


  m1= createSprite(270,120,350,10);
  m1.shapeColor="lightblue";

  m2= createSprite(750,200,10,190);
  m2.shapeColor="lightblue";

  m3= createSprite(350,300,10,350);
  m3.shapeColor="lightblue";
  
  m4= createSprite(675,495,10,115);
  m4.shapeColor="lightblue";
  
  m5= createSprite(690,110,115,10);
  m5.shapeColor="lightblue";
  
  m6= createSprite(550,170,10,110);
  m6.shapeColor="lightblue";
  
  m7= createSprite(220,345,250,10);
  m7.shapeColor="lightblue";
  
  m8= createSprite(450,170,10,110);
  m8.shapeColor="lightblue";
  
  m9= createSprite(600,440,500,10);
  m9.shapeColor="lightblue";
  
  m10= createSprite(600,120,90,10);
  m10.shapeColor="lightblue";

  m11= createSprite(640,170,10,110);
  m11.shapeColor="lightblue";

  m12= createSprite(620,220,190,10);
  m12.shapeColor="yellow";
  m12.velocityX=-2.5;

  m13= createSprite(100,180,10,120);
  m13.shapeColor="lightblue";

  m14= createSprite(100,290,10,110);
  m14.shapeColor="lightblue";

  m15= createSprite(125,470,250,10);
  m15.shapeColor="lightblue";

  m16= createSprite(135,510,10,80);
  m16.shapeColor="lightblue";

  m17= createSprite(245,510,10,80);
  m17.shapeColor="lightblue";

  m18= createSprite(125,560,180,10);
  m18.shapeColor="yellow";
  m18.velocityX=-2.5;

  m19= createSprite(450,285,10,120);
  m19.shapeColor="lightblue";

  m20= createSprite(445,345,190,10);
  m20.shapeColor="lightblue";

  m21= createSprite(535,390,10,90);
  m21.shapeColor="lightblue";

  m22= createSprite(450,390,10,90);
  m22.shapeColor="lightblue";

 // m23= createSprite(490,430,90,10);
 // m23.shapeColor="lightblue";

  m24= createSprite(760,550,180,10);
  m24.shapeColor="lightblue";

  m25= createSprite(245,600,10,120);
  m25.shapeColor="lightblue";

}

function draw(){
  background(grassImg);

  edges=createEdgeSprites();
  harry.bounceOff(edges[0]);
  harry.bounceOff(edges[1]);
  harry.bounceOff(edges[2]);
  harry.bounceOff(edges[3]);
harry.bounceOff(m1);
harry.bounceOff(m2);
harry.bounceOff(m3);
harry.bounceOff(m4);
harry.bounceOff(m5);
harry.bounceOff(m6);
harry.bounceOff(m7);
harry.bounceOff(m8);
harry.bounceOff(m9);
harry.bounceOff(m10);
harry.bounceOff(m11);
harry.bounceOff(m12);
harry.bounceOff(m13);
harry.bounceOff(m14);
harry.bounceOff(m15);
harry.bounceOff(m16);
harry.bounceOff(m17);
harry.bounceOff(m18);
harry.bounceOff(m19);
harry.bounceOff(m20);
harry.bounceOff(m21);
harry.bounceOff(m22);
//harry.bounceOff(m23);
harry.bounceOff(m24);
harry.bounceOff(m25);

m12.bounceOff(m3);
m12.bounceOff(m2);
m18.bounceOff(edges[0]);
m18.bounceOff(edges[1]);
m18.bounceOff(edges[3]);
m18.bounceOff(m25);
m18.bounceOff(m9);

textSize(25);
    fill("pink");
    text("Score: "+score , width-680 , 45);
    text("Horcrux hunted: "+horcrux , width-540 , 45);

//text(mouseX+',' +mouseY,mouseX,mouseY);
if(harry.isTouching(m12)||harry.isTouching(m18)){
  harry.velocityX=0;
  harry.velocityY=0;
  harry.x=50;
  harry.y=50;
  score=-1;
}

if(harry.isTouching(hor1)){
  hor1.visible=true;
  hb1.destroy();
}

if(keyCode===32 && harry.isTouching(hor1)){
hor1.destroy();
m25.destroy();
score+=1;
horcrux+=1;
}

if(harry.isTouching(hor2)){
  hor2.visible=true;
  hb2.destroy();
}
if(keyCode===32 && harry.isTouching(hor2)){
hor2.destroy();
m18.velocityX=0;
m18.x=580;
m18.y=550;
m14.destroy();
score+=1;
horcrux+=1;
}

if(harry.isTouching(hor3)){
  hor3.visible=true;
  hb3.destroy();
}
if(keyCode===32 && harry.isTouching(hor3)){
hor3.destroy();
m19.destroy();
score+=1;
horcrux+=1;
}

if(harry.isTouching(hor4)){
  hor4.visible=true;
  hb4.destroy();
}
if(keyCode===32 && harry.isTouching(hor4)){
hor4.destroy();
m11.destroy();
m12.destroy();
score+=1;
horcrux+=1;
}

if(harry.isTouching(hor5)){
  hor5.visible=true;
  hb5.destroy();
}
if(keyCode===32 && harry.isTouching(hor5)){
hor5.destroy();
m21.destroy();
m20.destroy();
score+=1;
horcrux+=1;
}

if(harry.isTouching(hor6)){
  hor6.visible=true;
  hb6.destroy();
}
if(keyCode===32 && harry.isTouching(hor6)){
hor6.destroy();
m4.destroy();
m18.velocityY=3;
score+=1;
horcrux+=1;
}

if(harry.isTouching(hor7)){
  hor7.visible=true;
  hb7.destroy();
}
if(keyCode===32 && harry.isTouching(hor7)){
hor7.destroy();
m18.destroy();
score+=1;
horcrux+=1;
}

if(harry.isTouching(hb8)){
  textSize(15);
  fill("black");
  text("Fake horcrux!",hb8.x-40, hb8.y+80);
  hb8.destroy();
  harry.x=50;
  harry.y=50;
  score-=1;
}
if(harry.isTouching(hb9)){
  textSize(15);
  fill("red");
  text("Fake horcrux!",hb9.x-30, hb9.y+85);
  hb9.destroy();
  harry.x=50;
  harry.y=50;
  score-=1;
}
if(harry.isTouching(hb10)){
  textSize(15);
  fill("red");
  text("Fake horcrux!",hb10.x-45, hb10.y+80);
  hb10.destroy();
  harry.x=50;
  harry.y=50;
  score-=1;
}

if(horcrux===1){
  text("Ron is released!!!",width-300, 45);
}
if(horcrux===2){
  text("Hermione is released!!!",width-300, 45);
}
if(horcrux===3){
  text("Luna is released!!!",width-300, 45);
}
if(horcrux===4){
  text("Neville is released!!!",width-300, 45);
}
if(horcrux===5){
  text("Ginny is released!!!",width-300, 45);
}
if(horcrux===6){
  text("James Potter is released!!!",width-300, 45);
}
if(horcrux===7){
  text("Lily potter is released!!!",width-300, 45);
}
  //For harry to move up, down, right and left
if(keyDown(UP_ARROW)){
  harry.y-=10;
  
}

if(keyDown(DOWN_ARROW)){
  harry.y+=10;
  
}
  
if(keyDown(RIGHT_ARROW)){
  harry.x+=10;
  
}

if(keyDown(LEFT_ARROW)){
  harry.x-=10;
  
}

if(score===1 && horcrux===7 ){
  textSize(25);
  text("Good try!",450,320);
}

if(score===2 && horcrux===7 ){
  textSize(25);
  text("Nice!",450,320);
}

if(score===3 && horcrux===7 ){
  textSize(25);
  text("Great!",450,320);
}

if(score===4 && horcrux===7 ){
  textSize(25);
  text("Amazing!",450,320);
}

if(score===5 && horcrux===7 ){
  textSize(25);
  text("Excellent!",450,320);
}

if(score===6 && horcrux===7 ){
  textSize(25);
  text("Outstanding!",450,320);
}

if(score===7 && horcrux===7 ){
  textSize(25);
  text("Champion! You did it!",400,320);
}

//spawnEnemies();
  drawSprites();
}

//function spawnEnemies(){
 // rand = Math.round(random(1,3));
 // if(frameCount%100===0){
 //     enemiesCreatedFrame=frameCount;
 //     enemies = createSprite(random(50,800), random(50,600), 10, 10);
 //     switch(rand){
 //         case 1: enemies.addImage(e1);
 //         break;
 //         case 2: enemies.addImage(e2);
 //         break; 
 //         case 3: enemies.addImage(e3);
 //         break;
 //         default: break;
 //     }
//enemies.scale=(0.2,0.2);
//enemies.velocityX=3;
//enemies.velocityY=0;

 // }
//}