let pedro = {
    nombre: "Pedro Perez",
    edad: 30,
    activo: true,
    hobbies: ["programar", "squash", "piano"]
    }


pedro.edad;
pedro.estatura = 1.8;
delete pedro.activo;

for(let llave in pedro){
    console.log("nombre:  " + pedro.nombre);
    console.log("edad:    " + pedro.edad);
    console.log("hobbies: " + pedro.hobbies);
    console.log("estatura:" + pedro.estatura);
    }
pedro.saluda = function() {
        console.log("Hola, me llamo " +this.nombre);
}
console.log("");
pedro.saluda();




