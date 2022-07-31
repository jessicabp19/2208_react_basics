//Objetos literales

const persona = {
 nombre: 'Tony',
 apellido: 'Stark',
 edad: 45,
 direccion: {
    cuidad: 'New York',
    zip: 5465465,
    lat: 14.3232,
    lng: 34.9233321
 },
};

console.table(persona);

//const persona2 = persona; // Solo se copia la referencia
const persona2 = { ...persona} //Operador spread para clonarlo realmente
persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2);