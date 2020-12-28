class form {

    constructor() {
      this.button1 = createButton('Questions and answers')
      this.button2 = createButton('video chat')
      this.button3 = createButton('resources')
      this.button4 = createButton('help')
    }
    hide(){
        this.button1.hide();
        this.button2.hide();
        this.button3.hide();
        this.button4.hide();
      }
    
      display(){
        this.button1.position(displayWidth/4,displayHeight/4);
        this.button2.position(displayWidth/4,displayHeight/4+30)
        this.button3.position(displayWidth/4,displayHeight/4+60)
        this.button4.position(displayWidth/4,displayHeight/4+90)
      }
}

