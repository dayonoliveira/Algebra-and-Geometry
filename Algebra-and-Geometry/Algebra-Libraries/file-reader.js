let userFiles = document.getElementById('userFiles');
let textarea1 = document.getElementById('textarea1');
let textarea2 = document.getElementById('textarea2');

function findSymbol(a){
    let newVet = [];
    let counter = 0;

    for(let i = 0; i < a.length - 1; i++){
        if(!a[i].startsWith("%")){
            newVet[counter] = a[i];
            counter++
        }
    }
    
    return newVet;
}

function linesVector(a){
    let vetAux = [];
    let vetAux2 = [];

    vetAux.push(a[0].split(" "));

    vetAux2[0] = parseInt(vetAux[0][0]);

    return vetAux2;
}

function columnsVector(a){
    let vetAux = [];
    let vetAux2 = [];

    vetAux.push(a[0].split(" "));

    vetAux2[0] = parseInt(vetAux[0][1]);

    return vetAux2;
}

function elementVector(a){
    let vetAux = [];
    let vetAux2 = [];

    for(let i = 0; i < a.length; i++){
        vetAux.push(a[i].split(" "));
    }

    for(let i = 1; i < vetAux.length; i++){
        vetAux2[i - 1] = parseInt(vetAux[i][2]);
    }

    return vetAux2;
}

userFiles.addEventListener('change', () => {
    let files = userFiles.files;
 
    if(files.length == 0) return;
 
    const file = files[0];
 
    let reader = new FileReader();
 
    reader.onload = (e) => {
        const file = e.target.result;
        const fileLines = file.split(/\r\n|\n/);
        let fileMatrix = findSymbol(fileLines);
        let matrixLines = fileMatrix[0].split(" ")[0];
        let matrixColumns = fileMatrix[0].split(" ")[1];
        let elements = elementVector(fileMatrix);
        let matrixObject = new Matrix(linhas[0], colunas[0], elements);
        let la = new LinearAlgebra();
        //console.time('la.gauss("a")');
        //let b = la.gauss(a);
        //console.timeEnd('la.gauss("a")');
        //let resultados = [];
        //console.time('la.solve("a")');
        resultados = la.solve(a);
        //console.timeEnd('la.solve("a")');
        textarea1.value = fileLines.join('\n');
        console.log(resultados);
        //console.log("pronto!");

    };
 
    reader.onerror = (e) => alert(e.target.error.name);
 
    reader.readAsText(file);
    
});