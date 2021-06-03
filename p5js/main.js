let line = new Line(0, 20, 80, 20);
let rectangle = new Rectangle(20, 20, 40, 40);

function setup(){
    createCanvas(1920, 940);
    background(52);
    frameRate(2);
}

function draw(){
    
    rectangle.draw();
    
    //line.draw();

    //line.rotate(40);
    
    //line.translate(60, 60);
}