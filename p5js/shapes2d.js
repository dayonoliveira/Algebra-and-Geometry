class Line{

    constructor(x1, y1, x2, y2){
        this.points = [
            new Vector(2, [x1, y1]),
            new Vector(2, [x2, y2])
        ]

        /* 
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        */
    }

    rotate(){

    }

    translate(){

    }

    draw(){
        /* noStroke(); */
        stroke(color(255));
        beginShape();
        vertex(this.points[0].get(1), this.points[0].get(2));
        vertex(this.points[1].get(1), this.points[1].get(2));
        endShape();
    }

}