let line = new Line(0, 20, 80, 20);
let rectangle = new Rectangle(20, 20, 40, 40);
let circle = new Circle(0, 0, 60, 10);

function setup(){
    createCanvas(1920, 940, WEBGL);
    background(52);
    frameRate(2);  
}

function draw(){

    circle.draw();

    circle.rotate(40)
    
    //rectangle.draw();

    //rectangle.rotate(40);

    //rectangle.translate(60, 60);
    
    //line.draw();

    //line.rotate(40);
    
    //line.translate(60, 60);
}