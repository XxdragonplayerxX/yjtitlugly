class Player {
    constructor(){
      this.index = null;
      this.name = null;
      this.posx = 0;
      this.posy = 0;
      this.life = 100;
    }
  
    getCount(){
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",function(data){
        playerCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        playerCount: count
      });
    }
  
    update(){
      var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).set({
        name:this.name, 
        posx:this.posx,
        posy:this.posy,
        life:this.life
      
      });
    }
    static getPlayerInfo(){
      var playerInfoRef = database.ref('players');
      playerInfoRef.on("value",(data)=>{
        allPlayers = data.val();
      })
    }
   
  }