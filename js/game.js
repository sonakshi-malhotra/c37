class Game{
constructor(){}
readGameState(){
    var gameStateRef=database.ref('gameState')
    gameStateRef.on("value",function(data){
        gameState=data.val()
    })
}
updateGameState(state){
    database.ref('/').update({gameState:state})
} 
startGame(){
    if(gameState===0){
        form = new Form()
        form.display()
        player = new Player()
        player.getCount()
        
    }
    car1=createSprite(100,200)
    car2=createSprite(300,200)
    cars=[car1,car2]
    
}

play(){
    form.hide()
   Player.getPlayerInfo()
   if(allPlayers!==undefined){

       background("black")
       var index=0//indexing of the cars array
       var x=175,y
       for (var plr in allPlayers) {
        index=index+1
           x=x+200 
           y=displayHeight-allPlayers[plr].distance
           cars[index-1].x=x
           cars[index-1].y=y
           if(index===player.index){
               cars[index-1].shapeColor="red"
           }
           
               
          
       }
   }
   if(keyDown(UP_ARROW)&&player.index!==null){
    player.distance+=10
    player.update()
}

drawSprites()
}

}