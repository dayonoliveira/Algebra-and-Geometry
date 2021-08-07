let userFiles = document.getElementById('userFiles');
let textarea1 = document.getElementById('textarea1');
let textarea2 = document.getElementById('textarea2');
let exeTime = document.getElementById('exeTime');

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
        let matrixObject = new Matrix(matrixLines, matrixColumns, elements);
        let la = new LinearAlgebra();
        let time = performance.now();
        let results = la.solve(matrixObject).elements;
        let timeEnd = performance.now();
        
        exeTime.innerHTML = `Exe. time (ms): ${(timeEnd - time).toFixed(2)}`;

        textarea1.value = fileLines.join('\n');
        textarea2.value = "Approximate results\n\n" + results.join('\n');
    };
 
    reader.onerror = (e) => alert(e.target.error.name);
 
    reader.readAsText(file);
    
});