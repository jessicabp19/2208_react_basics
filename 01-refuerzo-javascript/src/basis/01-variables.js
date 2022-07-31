console.log('Hola Mundo');

// Variables y constantes

/* "var" ya no se utiliza */
const nombre = 'Jessica';
const apellido = 'Botón';

let valorDado = 5;
valorDado = 4;

console.log(nombre, apellido, valorDado);

if (true){ //Variables de scope
    const nombre = 'Elizabeth';
    let valorDado = 6;
    console.log(valorDado, nombre);
}
