  /* 
  
  turns.js to check if the player can move a piece or not.
  
  */

  var turn = 0;
  var frames = 0;

  function TURNS(){

  frames++;

  if(turn == 0) {
    if(mouseIsPressed) {
    // if didn't click on piece and nothing is selected,
    // move piece and unselect it
    if(!p.clicked() && selected != null) {
      // floor(number, 50) * 50 makes it a multiple of 50
      p.pos = [
      Math.floor(mouseX / 50) * 50 + 25,
      Math.floor(mouseY / 50) * 50 + 25,
      50, 50
      ];
      selected = null;
      turn = 1;
      frames = 0;
    }
    } else {
    C = true;
    }
  } else if(frames >= 120) {
    p.move();
    turn = 0;
  }

}