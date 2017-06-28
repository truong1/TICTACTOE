goog.provide('1'),
goog.require('lime.Director'),
goog.require('lime.Scene'),
goog.require('lime.Layer'),
game.start() = function() {
  var quizComplete = [];
  var lenCompleteQuiz = quizComplete.length;
  var money = [0,100,200,300,500,1000,2000,3000,6000,8000,15000,20000,40000,80000,150000]
  var moneyOfPlayer = 0;
  var listcorrectanswer = [];
  var listquestion = ["1","2"];
  var listchoiceA = [];
  var listchoiceB = [];
  var listchoiceC = [];
  var listchoiceD = [];
  var lenquiz = listquestion.length;
  var random = Math.random();
  document.getElementById("demo").innerHMTL= "random";
  var gameScene = new lime.Scene().setRenderer(lime.Renderer.CANVAS);
    var landLayer = new lime.Layer().setAnchorPoint(0, 0);
    var controlsLayer = new lime.Layer().setAnchorPoint(0, 0);
  gameScene.appendChild(landLayer);
  gameScene.appendChild(controlsLayer);
} 
