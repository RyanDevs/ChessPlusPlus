/* 

    Sketch.js is the file where all
    the other .js files are compiled

    DO NOT:
        * Rename setup()
        * Rename draw()

*/

var pawn_img;
var selected;

var black = -50;
var white = 50;

function setup() {
  createCanvas(500, 500);
  background(51);

  pawn_img = loadImage("img/pawn.png");
  p = new Piece(Coords.B1, white, "pawn");
}



function draw() {

  CREATE_BOARD();
  GUI();
  TURNS();

  p.show();

}
