function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(`#FFEB3B`);
    rect(0, 0, 100, 150);
  }
  function setup() {
    createCanvas(400, 400);
    background("rgb(236,236,120)")
  }
  
  function draw() {
    stroke("rgb(255,255,255)");
    fill("#A8D7EE");
    
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }
  