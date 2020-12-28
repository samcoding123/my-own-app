function setup(){
    canvas = createCanvas(displayWidth - 20, displayHeight-30);
    //database = firebase.database();
    Form = new form()
  }
  
  
  function draw(){
  Form.display();
  }