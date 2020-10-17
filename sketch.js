var database, game, form, player;
var position;
var gameState, playerCount;
var allPlayers,gameState=0
var car1,car2,cars=[]

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth,displayHeight);
  game=new Game()
  game.readGameState()
  game.startGame()

 }

function draw(){
  background("white");
  if(playerCount===2){
    game.updateGameState(1)  
  }
  if(gameState===1){
    clear()
    game.play()
  }
  if(gameState===2){
    console.log ("gameEnd")
  }
    //drawSprites();
  
}

