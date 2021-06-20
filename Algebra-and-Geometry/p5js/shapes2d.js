class Line{

    constructor(x1, y1, x2, y2){
        this.points = [
            new Vector(2, [x1, y1]),
            new Vector(2, [x2, y2])
        ]

        this.la = new LinearAlgebra();
    }

    rotate(angle){
        let tr = new Transformations();

        for(let i = 0; i < this.points.length; i++){
            this.points[i] = tr.rotation2D(this.points[i], angle);
        }
    }

    translate(x, y){
        let tr = new Transformations();

        for(let i = 0; i < this.points.length; i++){
            this.points[i] = tr.translate2D(this.points[i], x, y);
        } 
    }

    draw(){

        stroke(color(230, 138, 0));

        beginShape();
        vertex(this.points[0].get(1, 1), this.points[0].get(2, 1));
        vertex(this.points[1].get(1, 1), this.points[1].get(2, 1));
        endShape();
        
    }

}

class Rectangle{

    constructor(x, y, w, h){

        if(w < 1 || h < 1){
            throw new Error("Width and height must be greater than or equal to 1.");
        }

        this.points = [
            new Vector(2, [x, y]),
            new Vector(2, [x + w, y]),
            new Vector(2, [x + w, y + h]),
            new Vector(2, [x, y + h])
        ]
    }

    rotate(angle){
        let tr = new Transformations();

        for(let i = 0; i < this.points.length; i++){
            this.points[i] = tr.rotation2D(this.points[i], angle);
        }
    }

    translate(x, y){
        let tr = new Transformations();

        for(let i = 0; i < this.points.length; i++){
            this.points[i] = tr.translate2D(this.points[i], x, y);
        }
    }

    draw(){
        stroke(color(230, 138, 0));

        fill(color(115, 0, 230));

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
        }

        let tr = new Transformations();
        this.angle = (360 / t);
        this.triangleQuantity = t;
        this.points = [new Vector(2, [0, 0]), new Vector(2, [0 + r, 0])];
        
        for(let i = 1; i <= t; i++){

            this.points.push(tr.rotation2D(this.points[i], this.angle));           
        }

        for(let i = 0; i <= t; i++){
            
            this.points[i] = tr.translate2D(this.points[i], x, y);   
        }
    }

    rotate(angle){
        let tr = new Transformations();

        for(let i = 0; i < this.points.length; i++){
            this.points[i] = tr.rotation2D(this.points[i], angle);
        }
    }

    translate(x, y){
        let tr = new Transformations();

        for(let i = 0; i < this.points.length; i++){
            this.points[i] = tr.translate2D(this.points[i], x, y);
        }
    }

    draw(){
        let center = 0;
        let next = 1;

        stroke(color(230, 138, 0));

        fill(color(115, 0, 230));

        beginShape();

        for(let i = 1; i <= this.triangleQuantity; i++){

            if(!(next == this.triangleQuantity)){
                vertex(this.points[center].get(1), this.points[center].get(2));
                vertex(this.points[next].get(1), this.points[next].get(2));
                vertex(this.points[next + 1].get(1), this.points[next + 1].get(2));
                vertex(this.points[center].get(1), this.points[center].get(2));
                next++;
            }else{
                vertex(this.points[center].get(1), this.points[center].get(2));
                vertex(this.points[next].get(1), this.points[next].get(2));
                vertex(this.points[1].get(1), this.points[1].get(2));
            }

            
        }
                
        endShape();
    }
}

class Triangle{

    constructor(x1, y1, x2, y2, x3, y3){
        
        this.points = [
            new Vector(2, [x1, y1]),
            new Vector(2, [x2, y2]),
            new Vector(2, [x3, y3])
        ];

           
    }

    rotate(angle){
        let tr = new Transformations();

        for(let i = 0; i < this.points.length; i++){
            this.points[i] = tr.rotation2D(this.points[i], angle);
        }
    }

    translate(x, y){
        let tr = new Transformations();

        for(let i = 0; i < this.points.length; i++){
            this.points[i] = tr.translate2D(this.points[i], x, y);
        }
    }

    draw(){

        stroke(color(230, 138, 0));

        fill(color(115, 0, 230));

        beginShape();

        vertex(this.points[0].get(1), this.points[0].get(2));
        vertex(this.points[1].get(1), this.points[1].get(2));
        vertex(this.points[2].get(1), this.points[2].get(2));
        vertex(this.points[0].get(1), this.points[0].get(2));

        endShape();

    }

}