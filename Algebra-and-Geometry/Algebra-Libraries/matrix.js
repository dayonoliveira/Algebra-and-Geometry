class Matrix{

    constructor(rows, cols, elements){
        
        if(rows == undefined || cols == undefined){
            throw new Error("The number of rows and columns must be specified.");
        }
        
        if(rows < 0){
            throw new Error("The number of lines must be equal to or greater than zero.");
        }

        if(cols < 0){
            throw new Error("The number of columns must be equal to or greater than zero.");
        }
        
        this.rows = rows;
        this.cols = cols;

        let size = rows * cols;

        if(elements == undefined){
            this.elements = [];
            
            for(let i = 0; i < size; i++){
                this.elements.push(0);
            }
        }else{
            if(elements.length != size){
                throw new Error("The number of elements is incompatible with the size of the array.");
            }

            this.elements = elements;
        }
    }

    get(i, j){
        this.#validateElementIndex(i, j);
        return this.elements[this.#getIndex(i, j)];
    }

    set(i, j, value){
        this.#validateElementIndex(i, j);
        this.elements[this.#getIndex(i, j)] = value;
    }

    #getIndex(i, j){
        return (j - 1) + (i - 1) * this.cols;
    }

    #validateElementIndex(i, j){
        if(i <= 0 || i > this.rows){
            throw new Error(`The value of i must be between 1 and ${this.rows}`);
        }

        if(j <= 0 || j > this.cols){
            throw new Error(`The value of j must be between 1 and ${this.cols}`);
        }
    }
}