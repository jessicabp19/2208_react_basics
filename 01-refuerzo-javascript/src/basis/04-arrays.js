// Arreglos en JS

/**
 * const arreglo = new Array(100);
 * Idealmente no se utiliza
 * Con la única excepción de definir una longitud 
 * Aunque esto no quiere decir que se bloquee
 */

const arreglo = [1,2,3,4];

let arreglo2 = [...arreglo, 5];
//arreglo2.push(5) //No es recomentable por que modifica el obj original

const arreglo3 = arreglo2.map( function(x) {
    //En JS cuando no hay un return explícito retorna undefined
    return x * 2;
});
console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);

//DOCUMENTACIÓN: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map

