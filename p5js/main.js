let line = new Line(0, 20, 80, 20);
let rectangle = new Rectangle(20, 20, 40, 40);
let circle = new Circle(0, 0, 60, 10);
let triangle = new Triangle(0, 0, 30, 0, 15, 60);

let plane = new Plane(20,20,20,40,40,0);

function setup(){
    createCanvas(1920, 940, WEBGL);
    createEasyCam();
    frameRate(24);  
}

function draw(){

    background(52);

    plane.draw();

    plane.rotate(40);

    //triangle.draw();

    //triangle.rotate(40);

    //triangle.translate(60, 60);

    //circle.draw();

    //circle.rotate(40);

    //circle.translate(60, 60);
    
    //rectangle.draw();

    //rectangle.rotate(40);

    //rectangle.translate(60, 60);
    
    //line.draw();
    
    //line.rotate(40);

    //line.translate(60, 60);
}