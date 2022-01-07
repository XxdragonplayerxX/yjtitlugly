var canvas, backgroundImg, playImg;
var gameState = 0;
var playerCount;
var database;
var allPlayers;
var splayer, senemy;

var form, player, game;
function preload(){
backgroundImg = loadImage("godbattle background.jpg")
playImg = loadImage("botaoplay.png")

}

function setup(){
canvas = createCanvas(800, 500);
database = firebase.database();
console.log(gameState)
  game = new Game();
  game.getState();
  game.start();
  console.log(gameState)
}

function draw(){
  background(backgroundImg)
  if(playerCount == 2){
 
   game.update(1);
  }
  if (gameState === 1){
    clear();
    game.play();

  }
  
  
  drawSprites();
}


