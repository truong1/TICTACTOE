goog.provide('game');
goog.require('lime.Director');
goog.require('lime.Scene');
goog.require('lime.Layer');
goog.require('play.Land');
game.WIDTH = 500 ; 
game.HEIGHT = 500;
game.start = function() {
  var quizComplete = [];
  var lenCompleteQuiz = quizComplete.length;
  var money = [0,100,200,300,500,1000,2000,3000,6000,8000,15000,20000,40000,80000,150000];
  var moneyOfPlayer = 0;
  var listcorrectanswer = [];
  var listquestion = ["1","2"];
  var listchoiceA = [];
  var listchoiceB = [];
  var listchoiceC = [];
  var listchoiceD = [];
  var lenquiz = listquestion.length;
  var random = (Math.random()*lenquiz)+1;
  var floorrandom = Math.floor(random);
  var quiz1 = listquestion[floorrandom];
  var choiceA = listchoiceA[floorrandom];
  var choiceB = listchoiceB[floorrandom];
  var choiceC = listchoiceC[floorrandom];
  var choiceD = listchoiceD[floorrandom];
  var quiz1 = prompt("Hello");
  if (quiz1 == "Hi") {
   alert("success")
  } else{
   alert("failure")
  }
  } 
