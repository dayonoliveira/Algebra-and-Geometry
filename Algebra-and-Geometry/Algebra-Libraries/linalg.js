class LinearAlgebra{
    
    
    transpose(a){

        let c;
        
        if(a instanceof Vector){

            c = new Vector(a.dim);

            c.cols = a.rows;
            c.rows = a.cols;

            for(let i = 1; i <= c.dim; i++){
                c.set(i, a.get(i));
            }
        }else if(a instanceof Matrix){

            c = new Matrix(a.cols, a.rows);

            for(let i = 1; i <= c.rows; i++){
                for(let j = 1; j <= c.cols; j++){
                    c.set(i, j, a.get(j, i));
                }
            }
        }else{
            throw new Error("The parameter must be an object of class Vector or class Matrix.");
        }
        return c;
    }

    sum(a, b){

        if(!(a instanceof Matrix) || !(b instanceof Matrix)){
            throw new Error("Parameters must be Vector or Matrix class objects.");
        }

        if(a.rows != b.rows || a.cols != b.cols){
            throw new Error("Arrays do not have the same dimension.")
        }

        let c;

        if(a instanceof Vector && b instanceof Vector){
            c = new Vector(a.dim);
            c.rows = a.rows;
            c.cols = a.cols;

            for(let i = 1; i <= a.rows; i++){
                c.set(i, a.get(i) + b.get(i));
            }
        }else if(a instanceof Matrix && b instanceof Matrix){
            c = new Matrix(a.rows, a.cols);

            for(let i = 1; i <= a.rows; i++){
                for(let j = 1; j <= a.cols; j++){
                    c.set(i, j, a.get(i, j) + b.get(i, j));
                }
            }
        }

        return c;
    }

    times(a, b){

        let c;

        if(typeof(a) == "number"){

            if(!(b instanceof Matrix)){
                throw new Error("Parameter b must be an object of class Vector or class Matrix.");
            }

            if(b instanceof Vector){

                c = new Vector(b.dim);
                c.rows = b.rows;
                c.cols = b.cols;

                for(let i = 1; i <= b.rows; i++){
                    c.set(i, a * b.get(i));
                }

            }else if(b instanceof Matrix){

                c = new Matrix(b.rows, b.cols);

                for(let i = 1; i <= b.rows; i++){
                    for(let j = 1; j <= b.cols; j++){
                        c.set(i, j, a * b.get(i, j));
                    }
                }
            }else{

            }
            
        }else{

            if(!(a instanceof Matrix) || !(b instanceof Matrix)){
                throw new Error("Parameters must be Vector or Matrix class objects.");
            }

            if(a.rows != b.rows || a.cols != b.cols){
                throw new Error("Arrays do not have the same dimension.");
            }
    
            if(a instanceof Vector && b instanceof Vector){

                c = new Vector(a.dim);
                c.rows = a.rows;
                c.cols = a.cols;
    
                for(let i = 1; i <= a.rows; i++){
                    c.set(i, a.get(i) * b.get(i));
                }
            }else if(a instanceof Matrix && b instanceof Matrix){

                c = new Matrix(a.rows, a.cols);
    
                for(let i = 1; i <= a.rows; i++){
                    for(let j = 1; j <= a.cols; j++){
                        c.set(i, j, a.get(i, j) * b.get(i, j));
                    }
                }
            }
        }

        return c;
    }

    dot(a, b){

        if(!(a instanceof Matrix) || !(b instanceof Matrix)){
            throw new Error("Parameters must be Vector or Matrix class objects.");
        }

        if(a.cols != b.rows){
            throw new Error("The number of columns in matrix A is not equal to the number of rows in matrix B.")
        }

        let c;

        if(a instanceof Vector && b instanceof Vector){

            c = 0;

            for(let i = 1; i <= a.dim; i++){
                c = c + a.get(i) * b.get(i);
            }
        }else{

            c = new Matrix(a.rows, b.cols)

            for(let i = 1; i <= a.rows; i++){
                for(let j = 1; j <= b.cols; j++){
                    for(let k = 1; k <= a.cols; k++){
                        c.set(i, j, c.get(i, j) + a.get(i, k) * b.get(k, j));
                    }
                }
            }
        }

        return c;
    }

    trocaLinha(a){
        let c = new Matrix(a.rows, a.cols);
        let aux = 0;

        for(let j = coordenadaPivo; j <= coordenadaPivo; j++){
            for(let i = coordenadaPivo; i < c.rows; i++){
                if(c.get(i + 1, j) != 0){
                    for(let w = 1; w <= c.cols; w++){
                
                        aux = c.get(i + 1, w);
                        c.set(i + 1, w, c.get(coordenadaPivo, w));
                        c.set(coordenadaPivo, w, aux);
                        
                    }

                    return c;
                }
            }
        }
    }

    maiorPrimeiroPivo(a){
        let maiorNumero = 1;
        let linhaFinal = 1;
        let c = new Matrix(a.rows, a.cols);

        for(let i = 1; i <= c.rows; i++){
            for(let j = 1; j <= 1; j++){
                if(a.get(i, j) > maiorNumero){
                    maiorNumero = a.get(i, j);
                    linhaFinal = i;
                }    
            }
        }

        for(let i = 1; i <= c.rows; i++){
            for(let j = 1; j <= c.cols; j++){
                if(i == linhaFinal){
                    c.set(1, j, a.get(linhaFinal, j));
                    c.set(linhaFinal, j, a.get(1, j));
                }else{
                    c.set(i, j, a.get(i, j));
                }
            }
        }

        return c
    }


    gauss(a){

        if(!(a instanceof Matrix)){
            throw new Error("Parameters must be Matrix class objects.");
        }
        
        let c = new Matrix(a.rows, a.cols);
        let k;
        let coordenadaPivo = 1;
        let aux2 = 1;
        let aux3 = 1;

        c = a;

        if(a.cols > a.rows){
            c = this.maiorPrimeiroPivo(a);
        }

        for(aux2; aux2 < c.rows; aux2++){

            if(c.get(coordenadaPivo, coordenadaPivo) == 0){
                c = this.trocaLinha(c);
            }

            if(aux2 + 1 == c.rows && c.get(aux2 + 1, coordenadaPivo) != 0){

                k = -1 * (c.get(aux2 + 1, aux3) / c.get(coordenadaPivo,coordenadaPivo));
                    
                for(let j = 1; j <= c.cols; j++){
    
                    c.set(aux2 + 1, j, k * c.get(coordenadaPivo, j) + c.get(aux2 + 1, j));
                    
                }
                coordenadaPivo++;
            }else if(aux2 + 1 < c.rows && c.get(aux2 + 1, coordenadaPivo) != 0){
                k = -1 * (c.get(aux2 + 1, aux3) / c.get(coordenadaPivo,coordenadaPivo));
                    
                for(let j = 1; j <= c.cols; j++){
    
                    c.set(aux2 + 1, j, k * c.get(coordenadaPivo, j) + c.get(aux2 + 1, j));
                    
                }
            }else if(aux2 + 1 == c.rows && c.get(aux2 + 1, coordenadaPivo) == 0){
                coordenadaPivo++;
            }
            
            if(coordenadaPivo > aux3){
                aux3 = coordenadaPivo;
                aux2 = coordenadaPivo - 1;
            }
        }

        return c;
    }

    solve(a){

        if(!(a instanceof Matrix)){
            throw new Error("Parameters must be Matrix class objects.");
        }

        let c = new Matrix(a.rows, a.cols);
        let vet = new Vector(a.rows);
        let k;
        let coordenadaPivo = c.rows;
        let aux2 = c.rows;
        let aux3 = c.rows;

        c = this.gauss(a);

        for(aux2; aux2 > 1; aux2--){

            if(c.get(coordenadaPivo, coordenadaPivo) == 0){
                c = this.trocaLinha(c);
            }

            if(c.get(aux2 - 1, coordenadaPivo) != 0){

                if(aux2 - 1 == 1 && c.get(aux2 - 1, coordenadaPivo) != 0){
                    k = -1 * (c.get(aux2 - 1, aux3) / c.get(coordenadaPivo,coordenadaPivo));
                    
                    for(let j = 1; j <= c.cols; j++){
        
                        c.set(aux2 - 1, j, k * c.get(coordenadaPivo, j) + c.get(aux2 - 1, j));
        
                    }

                    coordenadaPivo--;
                }else if(aux2 - 1 > 1 && c.get(aux2 - 1, coordenadaPivo) != 0){
                    k = -1 * (c.get(aux2 - 1, aux3) / c.get(coordenadaPivo,coordenadaPivo));
                    
                    for(let j = 1; j <= c.cols; j++){
        
                        c.set(aux2 - 1, j, k * c.get(coordenadaPivo, j) + c.get(aux2 - 1, j));
        
                    }
                }else if(aux2 - 1 == 1 && c.get(aux2 - 1, coordenadaPivo) == 0){
                    coordenadaPivo--;
                }

            }
            
            if(coordenadaPivo < aux3){
                aux3 = coordenadaPivo;
                aux2 = coordenadaPivo + 1;
            }
        }

        for(let i = 1; i <= c.rows; i++){
            let k2 = 1 / c.get(i, i);
            for(let j = 1; j <= c.cols; j++){
            
                c.set(i, j, k2 * c.get(i, j));

            }


        }

        for(let j = c.cols; j <= c.cols; j++){
            for(let i = 1; i <= c.rows; i++){
                vet.elements[i - 1] = c.get(i, j);
            }
        }

        return vet;
        
    }

    det(a){

        if(!(a instanceof Matrix) && a instanceof Vector){
            throw new Error("Parameters must be Matrix class objects.");
        }

        if(!(a.rows == a.cols)){
            throw new Error("The number of rows and columns cannot be different.");
        }

        let c = this.gauss(a);
        let determinante = 1;

        for(let i = 1; i <= c.rows; i++){
            determinante *= c.get(i, i);
        }

        return determinante;
    }

    gaussJordanInv(a){

        if(!(a instanceof Matrix)){
            throw new Error("Parameters must be Matrix class objects.");
        }

        let c = new Matrix(a.rows, a.cols);
        let k;
        let coordenadaPivo = c.rows;
        let aux2 = c.rows;
        let aux3 = c.rows;

        c = this.gauss(a);


        for(aux2; aux2 > 1; aux2--){

            if(c.get(coordenadaPivo, coordenadaPivo) == 0){
                c = this.trocaLinha(c);
            }

            if(c.get(aux2 - 1, coordenadaPivo) != 0){

                if(aux2 - 1 == 1 && c.get(aux2 - 1, coordenadaPivo) != 0){
                    k = -1 * (c.get(aux2 - 1, aux3) / c.get(coordenadaPivo,coordenadaPivo));
                    
                    for(let j = 1; j <= c.cols; j++){
        
                        c.set(aux2 - 1, j, k * c.get(coordenadaPivo, j) + c.get(aux2 - 1, j));
        
                    }

                    coordenadaPivo--;
                }else if(aux2 - 1 > 1 && c.get(aux2 - 1, coordenadaPivo) != 0){
                    k = -1 * (c.get(aux2 - 1, aux3) / c.get(coordenadaPivo,coordenadaPivo));
                    
                    for(let j = 1; j <= c.cols; j++){
        
                        c.set(aux2 - 1, j, k * c.get(coordenadaPivo, j) + c.get(aux2 - 1, j));
        
                    }
                }else if(aux2 - 1 == 1 && c.get(aux2 - 1, coordenadaPivo) == 0){
                    coordenadaPivo--;
                }

            }
            
            if(coordenadaPivo < aux3){
                aux3 = coordenadaPivo;
                aux2 = coordenadaPivo + 1;
            }
        }

        for(let i = 1; i <= c.rows; i++){
            let k2 = 1 / c.get(i, i);
            for(let j = 1; j <= c.cols; j++){
            
                c.set(i, j, k2 * c.get(i, j));

            }
        }

        return c;
    }

    inverse(a){
        let c = new Matrix(a.rows, a.cols);
        let id = new Matrix(a.rows, a.cols);
        let intm = new Matrix(a.rows, a.cols * 2);
        let inv = new Matrix(a.rows, a.cols);

        
        for(let i = 1; i <= a.rows; i++){
            for(let j = 1; j <= a.cols; j++){
                c.set(i, j, a.get(i, j));
            }
        }

        id = this.gaussJordanInv(c);
        
        for(let i = 1; i <= c.rows; i++){

            for(let j = 1; j <= intm.cols/2; j++){
                intm.set(i, j, a.get(i, j));
            }

            let contador = 1;

            for(let w = (intm.cols / 2) + 1; w <= intm.cols; w++){
                
                intm.set(i, w, id.get(i, contador));

                contador++;
            }

        }

        intm = this.gaussJordanInv(intm);

        for(let i = 1; i <= c.rows; i++){

            let contador = (intm.cols / 2) + 1;

            for(let j = 1; j <= c.cols; j++){
                inv.set(i, j, intm.get(i, contador));

                contador++;
            }
        }
         
        return inv;
    }
}