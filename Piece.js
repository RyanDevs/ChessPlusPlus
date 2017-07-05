/*

  Code & Logic for each Piece in the game
  ( BETA & BUGGY )

*/

var Piece = class {
  constructor(pos, pID, type) {
    this.pos = pos;
    this.canMove = true;
    this.dead = false;
  }
    //When I created this function only God and I knew what i was thinking
    //Now only God Goknows
  cl() {
    // this was "colored lamp" (??)
    return true; //Dont delete this function because im sure it had a purpuse
  }
  
  move() {
    if(type == "pawn") {
      pawnBot.call(this);
    }
    
    if(this.pos[1] < 0)   this.pos[1] = 0;
    if(this.pos[1] > 400) this.pos[1] = 725;
  }

  show() {
    stroke(255,255,255);
    fill(255,255,255,100);
    //Sets an image to each Piece square
    image(pawn_img, this.pos[0], this.pos[1]);
    rect(this.pos[0]*50, this.pos[1]*50, this.pos[2]*50, this.pos[3]*50);
  }

  clicked() {
    // select the piece if the mouse is at most 25 pixels far
    this.d = dist(mouseX, mouseY, this.pos[0] + 25, this.pos[1] + 25);
    if(this.d < 25) {
      selected = this;
      return true;
    }
  }
}

