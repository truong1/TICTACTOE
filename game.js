goog.provide('1')
goog.require('lime.Director')
game.start() = function() {
  var gameObj = {}
  var playerObj = {
  money: 0
  }
  var listcorrectanswer = [];
  var listquestion = [];
  var listchoiceA = [];
  var listchoiceB = [];
  var listchoiceC = [];
  var listchoiceD = [];
  var x = math.floor(Math.random()*listquestion.length)+1);
   document.getElementById("demo").innerHTML = x;