let userFiles = document.getElementById('userFiles');
let textarea1 = document.getElementById('textarea1');
let textarea2 = document.getElementById('textarea2');
let exeTime = document.getElementById('exeTime');
let fileData = new FileData();

userFiles.addEventListener('change', () => {
    let files = userFiles.files;
 
    if(files.length == 0) return;
 
    const file = files[0];
 
    let reader = new FileReader();
 
    reader.onload = (e) => {
        const file = e.target.result;
        const fileLines = file.split(/\r\n|\n/);
        let fileMatrix = fileData.findSymbol(fileLines);
        let matrixLines = fileMatrix[0].split(" ")[0];
        let matrixColumns = fileMatrix[0].split(" ")[1];
        let elements = fileData.elementVector(fileMatrix);
        let requestObject = {
            method: "",
            matrixLines: matrixLines,
            matrixColumns: matrixColumns,
            matrixData: elements.toString()
        }

        $.post(
            "http://localhost:8080/GaussJordan",
            requestObject,
            (data) => {
                exeTime.innerHTML = `Exe. time (ms): ${data.time}`;
                textarea2.value = "Approximate results\n\n" + data.results.join('\n');
            }
        )
        textarea1.value = fileLines.join('\n');
    };
 
    reader.onerror = (e) => alert(e.target.error.name);
 
    reader.readAsText(file);
    
});