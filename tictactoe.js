goog.provide('tictactoe');
goog.require('lime.Director');
goog.require('lime.Scene');
goog.require('lime.Layer');
goog.require('tic.Land');
tictactoe.start = function() {
   var gmObj = {
   width: 400,
   height: 500,
   num_tiles_x: 3,
   num_tiles_y: 3,
   landLayer_w: 64*5, 
   landLayer_h: 64*6,
   controlsLayer_w: 64*5,
   controlsLayer_h: 64*1.5,
   }
   var director = new lime.Director(document.body,gameObj.width,gameObj.height)
}
