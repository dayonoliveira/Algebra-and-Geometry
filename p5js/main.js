let line = new Line(20, 20, 80, 20);

function setup(){
    createCanvas(1920, 940);
    frameRate(2);
}

function draw(){
    
    background(52);
    
    line.draw();

    //line.rotate(40);
    
    //line.translate(60, 60);
}