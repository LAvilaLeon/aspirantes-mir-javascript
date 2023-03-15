function maxIndex(arreglo) {
    if (arreglo.length === 0) {
        return -1;
    }
    numMayor = arreglo[0];
    let indMayor = 0;
    for (let i=0; i<arreglo.length;i++){
        if(arreglo[i] > numMayor) {
            numMayor = arreglo[i];
            indMayor = i;
        }
    }
    return "Indice del número mayor =  "+indMayor;  
}

console.log(maxIndex([1, 3, 2])) // => index 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // => index 0
console.log(maxIndex([])) // => -1