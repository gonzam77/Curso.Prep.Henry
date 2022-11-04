// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  //OPCION 1 
  //var nombreMayuscula = nombre[0].toUpperCase();
  // for (let i = 1; i < nombre.length; i++) {
  //   nombreMayuscula = nombreMayuscula + nombre[i]; 
  // }
  // return nombreMayuscula;
  //OPCION 2
  //return nombre[0].toUpperCase() + nombre.substring(1);
  //OPCION 3
  return nombre.replace(nombre.substring(0,1)/*o nombre[0]*/, nombre.substring(0,1).toUpperCase());
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  cb();
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  return cb(n1,n2);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  var suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma = suma + numeros[i];
  }
  cb(suma);

}

 //EJERCITAR MAS ESTE TEMA
function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  // array.forEach((e)=> {
  //   cb(e);
  // });
  for(let i = 0; i < array.length; i ++) {
    cb(array[i]);
  }
}

 //EJERCITAR MAS ESTE TEMA
function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  arreglo = new Array;
  arreglo = array.map((x)=>{
    return cb(x);
  });
  return arreglo;

}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  function contieneA(elemento) {
   return elemento[0] === "a";
  }
  var resultado = array.filter(contieneA);
  return resultado;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
