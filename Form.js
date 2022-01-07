class Form {
    constructor() {
       this.title = createElement('h1')
       this.input = createInput("name");
       this.button = createButton("Fight!");
       this.greeting = createElement('h3');
    }
   hide(){
    this.input.hide()
    this.button.hide()
    this.title.hide()
    this.greeting.hide()
   }
    display(playerCount){
   
     
      this.title.html("God Battle");
      this.title.position(280, 100);
      
      
     
      
      this.input.position(270, 200);
      this.button.position(340, 250);
  
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
  
      player.name = this.input.value();
        console.log(name);
        playerCount+=1;
        player.index = playerCount;
       player.update()
       player.updateCount(playerCount);
       player.updateposx()
      // player.updateposy()
       //player.updatelife()
      this.greeting.html("Vai lutar " + player.name + "?" )
      this.greeting.position(300, 200)
      });
  
    }
  }
  