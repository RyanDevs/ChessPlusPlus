var pawn_img;
var W, S, ChangeColor = true;
var t = 0;

var turn = 0;

function menu(){
        //uses rgba
    stroke  (0,255,0);
    fill    (0,255,0,100);

    textFont("'Press Start 2P', cursive");
    textSize(15);
    rect(20,0,745,25);

    if(turn == 0){
        stroke(51);
        fill(51,51,51,100);
        text("Your Turn...", 25,22);
    }else{
        stroke(51);
        fill(51,51,51,100);
        text("Wait...", 25,22);
    }

    //[dev only]
    stroke(51);
    fill(51,51,201,200);
    text("X: " + mouseX + " Y:" + mouseY, 210,22)

}

var Pieces = { //Might add more purpuse to this

    // Name, Color,
    WhitePawn : ["Pawn", "Black"],
    BlackPawn : ["Pawn", "White"]

};

var Coords = { //Coordenates

    //Name, X, Y, X, Y, Current, Square Number, Name

    A1: [25, 25, 50, 50, null, 1, "A1"],
    A2: [125, 25, 50, 50, null, 2, "A2"],
    A3: [225, 25, 50, 50, null, 3, "A3"],
    A4: [325, 25, 50, 50, null, 4, "A4"],
    A5: [425, 25, 50, 50, null, 5, "A5"],
    A6: [525, 25, 50, 50, null, 6, "A6"],
    A7: [625, 25, 50, 50, null, 7, "A7"],
    A8: [725, 25, 50, 50, null, 8, "A8"],

    B1: [25, 125, 50, 50, null, 9, "B1"],
    B2: [125, 125, 50, 50, null, 10, "B2"],
    B3: [225, 125, 50, 50, null, 11, "B3"],
    B4: [325, 125, 50, 50, null, 12, "B4"],
    B5: [425, 125, 50, 50, null, 13, "B5"],
    B6: [525, 125, 50, 50, null, 14, "B6"],
    B7: [625, 125, 50, 50, null, 15, "B7"],
    B8: [725, 125, 50, 50, null, 16, "B8"]

};

var ERR = {
    CALC_LINE_38: "ERR: Could Not Calculate Color (Line 38)",
    COORD_NOT_FOUND: "ERR: Could Not Find The Coordenates (Line 80)",
    CHOSEN_NOT_FOUND: "ERR: Could Not Move Piece, Chosen Not Found (Line 89)"

};

var selected;
//pos = Starting Position , pID = Name of the piece
function Piece(pos, pID) {
    this.pos = pos;
    this.canMove = true;
    this.dead = false;

        //When I created this function only God and I knew what i was thinking
        //Now only God Goknows
    this.cl = function(){
        // this was "colored lamp" (??)
        return true; //Dont delete this function because im sure it had a purpuse
    }


    this.show = function () {

        stroke(S);
        fill(W);
                    //Sets an image to each Piece square
        image(pawn_img, this.pos[0], this.pos[1]);
        rect(this.pos[0], this.pos[1], this.pos[2], this.pos[3]);
    }

    this.clicked = function() {
    // select the piece if the mouse is at most 25 pixels far
        this.d = dist(mouseX, mouseY, this.pos[0] + 25, this.pos[1] + 25);
        if(this.d < 25) {
            C = false;
            selected = this;
            return true;
        }
    }
}

function createBoard() {
    stroke(71, 48, 16);
    strokeWeight(2);       //Algorithm to create the board and
                           //which squares have each color.
    for (var h = 0; h <= 800; h += 100) {
        for (var w = 0; w <= 800; w += 100) {

            if (w / 100 % 2 === 0 && h / 100 % 2 === 0) {
                fill(181, 136, 99);
            } else if (w / 100 % 2 === 1 && h / 100 % 2 === 0) {
                fill(240, 217, 181);
            } else if (w / 100 % 2 === 1 && h / 100 % 2 === 1) {
                fill(181, 136, 99);
            } else if (w / 100 % 2 === 0 && h / 100 % 2 === 1) {
                fill(240, 217, 181);
            }

            rect(h, w, 800, 100);
            
        }
    }
}

function setup() {
    createCanvas(800, 800);
    pawn_img = loadImage("pawn.png");
    p = new Piece(Coords.B1, Pieces.White);
}

function draw() {
    createBoard();
    if(ChangeColor){
        S = color(255);
        W = color(255, 255, 255, 100);
    } else {
        S = color(0, 0, 255);
        W = color(0, 0, 255, 100);
    }
    
    // render menu and piece
    menu();
    p.show();
    
    if(mouseIsPressed) {
        // if didn't click on piece and nothing is selected,
        // move piece and unselect it
        if(!p.clicked() && selected != null) {
          // floor(number, 100) * 100 makes it a multiple of 100
          p.pos = [
            Math.floor(mouseX / 100) * 100 + 25,
            Math.floor(mouseY / 100) * 100 + 25,
            50, 50
          ];
          selected = null;
          turn = turn == 0? 1: 0;
          
          p.pos[0] = Math.floor(Math.floor(Math.random() * 100) / 100) * 200 + 25;
          p.pos[1] = Math.floor(Math.floor(Math.random() * 100) / 100) * 200 + 25;
        }
    } else {
        C = true;
        t = 0;
    }
}
