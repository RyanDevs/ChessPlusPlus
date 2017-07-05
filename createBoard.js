/*

  Algorithm to create the board and
  which squares have each color.

*/

function CREATE_BOARD() {
  stroke(71, 48, 16);
  strokeWeight(2);   
  
  for (var h = 0; h <= 400; h += 50) {
    for (var w = 0; w <= 400; w += 50) {

      if (w / 50 % 2 === 0 && h / 50 % 2 === 0) {
        fill(181, 136, 99);
      } else if (w / 50 % 2 === 1 && h / 50 % 2 === 0) {
        fill(240, 217, 181);
      } else if (w / 50 % 2 === 1 && h / 50 % 2 === 1) {
        fill(181, 136, 99);
      } else if (w / 50 % 2 === 0 && h / 50 % 2 === 1) {
        fill(240, 217, 181);
      }

      rect(h, w, 400, 50);
      
     }
   }
};