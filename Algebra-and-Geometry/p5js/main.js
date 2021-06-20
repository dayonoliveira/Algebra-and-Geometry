let line = new Line(0, 20, 80, 20);
let rectangle = new Rectangle(20, 20, 40, 40);
let circle = new Circle(0, 0, 60, 20);
let triangle = new Triangle(0, 0, 30, 0, 15, 60);

let plane = new Plane(20,20,20,40,40,0);
let parallelogram = new Parallelogram(20,20,20,40,40,40);
let sphere = new Sphere(0, 0, 0, 60, 10, 10);
let pyramid = new Pyramid(0, 0, 0, 60, 60, 60);

function setup(){
    createCanvas(window.innerWidth, window.innerHeight, WEBGL);
    createEasyCam();
    frameRate(60);  
}

function draw(){

    background(52);

    /* # shapes2d tests #
    
        line.draw();
    
        line.rotate(40);

        line.translate(60, 60);
        
        rectangle.draw();
        
        rectangle.rotate(40);
        
        rectangle.translate(60, 60);
        
        circle.draw();
        
        circle.rotate(40);
        
        circle.translate(60, 60);
        
        triangle.draw();

        triangle.rotate(40);

        triangle.translate(60, 60);
    
    */
    
    /* # shapes3d tests #
    
        plane.draw();
        
        plane.rotate(40);
        
        plane.translate(5, 2, 2);
    
        parallelogram.draw();
        
        parallelogram.rotate(40);
        
        parallelogram.translate(50, 50, 0);
        
        sphere.draw();
        
        sphere.rotate(40);
        
        sphere.translate(80, 80, 0);

        pyramid.draw();

        pyramid.rotate(40);

        pyramid.translate(50, 50, 0);

    */

    

    
    
    
}