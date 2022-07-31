//Funciones en JS

/**
 * Esta forma no es muy recomendable,
 * por que facilmente podemos caerle encima con cualquier cosa
 */
function saluda( nombre ){
    return `Hola, ${nombre}`;
}
saluda = 30;

/**
 * Así si
 */
const saludar = function(nombre){
    return `Hola, ${nombre}`;
}
const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}
const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => 'Hola Mundo';

//Retornando objetos implicitos
const getUser = () => ({
    uid: 'ABC123',
    username: 'El_Papi1502'
});

const user = getUser();
console.log(user);

//Ejercicio: Transformando
function getUsuarioActivo(nombre){
    return {
        uid: 'ABC123',
        username: nombre
    }
};
const getUsuarioActivo2 = (nombre) => ({
        uid: 'ABC123',
        username: nombre
    });

const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);

console.log(getUsuarioActivo2('Jessica'));