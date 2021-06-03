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

    rotate(angle){
        let tr = new Transformations();
        let aux1 = new Vector(2, [this.points[0].get(1), this.points[0].get(2)]);
        let aux2 = new Vector(2, [this.points[1].get(1), this.points[1].get(2)]);
        aux1 = tr.rotation2D(aux1, angle);
        aux2 = tr.rotation2D(aux2, angle);

        let vector1 = new Vector(aux1.rows, [aux1.elements[0], aux1.elements[1]]);
        let vector2 = new Vector(aux2.rows, [aux2.elements[0], aux2.elements[1]]);

        this.points[0] = vector1;
        this.points[1] = vector2;
    }

    translate(x, y){
        let tr = new Transformations();
        let aux1 = new Vector(2, [this.points[0].get(1), this.points[0].get(2)]);
        let aux2 = new Vector(2, [this.points[1].get(1), this.points[1].get(2)]);
        aux1 = tr.translate2D(aux1, x, y);
        aux2 = tr.translate2D(aux2, x, y);

        let vector1 = new Vector(aux1.rows, [aux1.elements[0], aux1.elements[1]]);
        let vector2 = new Vector(aux2.rows, [aux2.elements[0], aux2.elements[1]]);

        this.points[0] = vector1;
        this.points[1] = vector2;
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