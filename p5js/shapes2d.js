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

class Rectangle{

    constructor(x, y, w, h){
        this.points = [
            new Vector(2, [x, y]),
            new Vector(2, [x + w, y]),
            new Vector(2, [x + w, y + h]),
            new Vector(2, [x, y + h])
        ]
    }

    rotate(angle){
        let tr = new Transformations();
        let aux1 = new Vector(2, [this.points[0].get(1), this.points[0].get(2)]);
        let aux2 = new Vector(2, [this.points[1].get(1), this.points[1].get(2)]);
        let aux3 = new Vector(2, [this.points[2].get(1), this.points[2].get(2)]);
        let aux4 = new Vector(2, [this.points[3].get(1), this.points[3].get(2)]);

        aux1 = tr.rotation2D(aux1, angle);
        aux2 = tr.rotation2D(aux2, angle);
        aux3 = tr.rotation2D(aux3, angle);
        aux4 = tr.rotation2D(aux4, angle);

        let vector1 = new Vector(aux1.rows, [aux1.elements[0], aux1.elements[1]]);
        let vector2 = new Vector(aux2.rows, [aux2.elements[0], aux2.elements[1]]);
        let vector3 = new Vector(aux3.rows, [aux3.elements[0], aux3.elements[1]]);
        let vector4 = new Vector(aux4.rows, [aux4.elements[0], aux4.elements[1]]);

        this.points[0] = vector1;
        this.points[1] = vector2;
        this.points[2] = vector3;
        this.points[3] = vector4;
    }

    translate(x, y){
        let tr = new Transformations();
        let aux1 = new Vector(2, [this.points[0].get(1), this.points[0].get(2)]);
        let aux2 = new Vector(2, [this.points[1].get(1), this.points[1].get(2)]);
        let aux3 = new Vector(2, [this.points[2].get(1), this.points[2].get(2)]);
        let aux4 = new Vector(2, [this.points[3].get(1), this.points[3].get(2)]);

        aux1 = tr.translate2D(aux1, x, y);
        aux2 = tr.translate2D(aux2, x, y);
        aux3 = tr.translate2D(aux3, x, y);
        aux4 = tr.translate2D(aux4, x, y);

        let vector1 = new Vector(aux1.rows, [aux1.elements[0], aux1.elements[1]]);
        let vector2 = new Vector(aux2.rows, [aux2.elements[0], aux2.elements[1]]);
        let vector3 = new Vector(aux3.rows, [aux3.elements[0], aux3.elements[1]]);
        let vector4 = new Vector(aux4.rows, [aux4.elements[0], aux4.elements[1]]);

        this.points[0] = vector1;
        this.points[1] = vector2;
        this.points[2] = vector3;
        this.points[3] = vector4;
    }

    draw(){
        noFill()
        stroke(color(255));
        beginShape();
        vertex(this.points[0].get(1), this.points[0].get(2));
        vertex(this.points[1].get(1), this.points[1].get(2));
        vertex(this.points[2].get(1), this.points[2].get(2));
        vertex(this.points[0].get(1), this.points[0].get(2));
        vertex(this.points[3].get(1), this.points[3].get(2));
        vertex(this.points[2].get(1), this.points[2].get(2));
        endShape();


    }

}

class Circle{

    constructor(x, y, r, t){
        
        if(t < 3){
            throw new Error("The value 't' must be greater than or equal to 3.");
        }else{
            let tr = new Transformations();
            this.angle = (360 / t);
            this.triangleQuantity = t;
            this.newPosition = 0;
            this.points = [];
            this.points[0] = new Vector(2, [x, y]);
            this.points[1] = new Vector(2, [x + r, y + r]);
            this.newPosition = tr.rotation2D(this.points[1], this.angle);
            this.points.push(this.newPosition);

            for(let i = 2; i < t; i++){
                this.newPosition = tr.rotation2D(this.points[i], this.angle);
                this.points.push(this.newPosition);
            }
        }
    }


    draw(){
        let center = 0;

        stroke(color(255));

        beginShape();

        for(let i = 1; i <= this.triangleQuantity; i++){
            vertex(this.points[center].get(1), this.points[center].get(2));
            vertex(this.points[i].get(1), this.points[i].get(2));
        }
                
        endShape();
    }

}