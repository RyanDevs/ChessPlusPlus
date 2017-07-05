/*

  GUI Only for Chess++
  Logic will not be implemented in this file.

*/

function GUI_LETTERS(){

  /* [ Squares outside the board ] */

  stroke(255,255,255,0)
  fill(0);
  rect(0,400,500,500);
  rect(400,0,500,500);

  fill(51);
  rect(0,450,500,500);
  rect(450,0,500,500);

  /* [ Letters ] */

  stroke(0);
  fill(255);
  textSize(20);
  fill(255,255,255,50)
  textFont("'Slabo 27px', serif");
  text("1", 20, 430);  text("A", 420, 30);
  text("2", 70, 430);  text("B",  420, 80);
  text("3", 120, 430); text("C", 420, 130);
  text("4", 170, 430); text("D", 420, 180);
  text("5", 220, 430); text("E", 420, 230);
  text("6", 270, 430); text("F", 420, 280);
  text("7", 320, 430); text("G", 420, 330);
  text("8", 370, 430); text("H", 420, 380);

}

function TURN_DISPLAY(){

  /* [ Bottom Rectangle ] */

  stroke(255,255,255,50);
  fill(255,255,255,50);
  rect(100,450,200,25);

  /* [ Checks if it's your turn or not! ] */

  if(turn == 0){
    textFont("'Bellefair', serif");
    stroke(255,255,255, 0);
    fill(220);
    text("YOUR TURN", 147,470);
  }else{
    textFont("'Bellefair', serif");
    stroke(255,255,255, 0);
    fill(220);
    text("WAIT", 180,470);
  }

}

function XY_COORDS(){

  /* [ Rectangle for the Coordenates ] */

  stroke  (0,255,0);
  fill  (0,255,0,50);
  textFont("'Slabo 27px', serif");
  textSize(15);

  rect(20,0,345,25);

  /* [ Checks what your current mouse X & Y Cooords are ] */ 
  
  stroke(0);
  textFont("'Press Start 2P', cursive");
  textSize(15);
  fill(51,51,200,50);
  text("X: " + mouseX + " Y:" + mouseY, 210,20)

}

function GUI(){
 
  GUI_LETTERS();
  TURN_DISPLAY();
  XY_COORDS();

}
