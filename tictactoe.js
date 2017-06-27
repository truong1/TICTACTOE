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
   var playerObjX = {
   turn: 1,
   number_sqrmark:0
   }
   var playerObjO = {
   turn: 0,
   number_sqrmark:0
   }
   var Xsqrmark = []
   var Osqrmark = []
   var director = new lime.Director(document.body,gameObj.width,gameObj.height);
   director.makeMobileWebAppCapable();     
   director.setDisplayFPS(false);
   var gameScene = new lime.Scene().setRenderer(lime.Renderer.CANVAS);
   var landLayer = new lime.Layer().setAnchorPoint(0, 0);
   var controlsLayer = new lime.Layer().setAnchorPoint(0, 0);
   gameScene.appendChild(landLayer);
   gameScene.appendChild(controlsLayer);
   var controlArea = new lime.Sprite().setAnchorPoint(0,0)
        .setPosition(0, gameObj.height-gameObj.controlsLayer_h)
        .setSize(gameObj.controlsLayer_w, gameObj.controlsLayer_h)
        .setFill('#0D0D0D')
    controlsLayer.appendChild(controlArea);
   var squareleft = [1,2,3,4,5,6,7,8,9]

 }
