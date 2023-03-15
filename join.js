function join(vectorPalabras){
    let frase = vectorPalabras[0];
    for(let i=1; i<vectorPalabras.length;i++){
        frase = frase+" "+vectorPalabras[i];
    }
    return frase;
}
console.log (join(["Lu","vamos","adelante"])); 
