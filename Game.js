class Game {
    constructor(){}
    
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
     
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
   async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val()
          player.getCount();
        } else{
          playerCount = 0;
        }
       
        form = new Form()
        form.display(playerCount);
      }

    }
     play(){
       form.hide()
       
       Player.getPlayerInfo();
       console.log(allPlayers)
       console.log(player.index)
       if(allPlayers !== undefined){
        var x = 0;
        var y = 0;
        splayer = createSprite(200, 150, 20, 70);
        senemy = createSprite(600, 150, 20, 70);
        if(player.index == 2){
          splayer.x = 600;
          senemy.x = 200;
        }
        if(player.index == 1){
          splayer.x = 200;
          senemy.x = 600;
        }
        splayer.shapecolor("lightblue")
        senemy.shapecolor("red")
       }
       
     }
     
  }
  