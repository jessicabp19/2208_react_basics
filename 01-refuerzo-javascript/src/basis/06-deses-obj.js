//Desestructuración
//Asignación desestructurante

//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

//Extrayendo las sig propiedades {} del siguiente obj = 
const { nombre, edad, clave:constname, } = persona; 

console.log( nombre );
console.log( edad );
console.log( constname );


const usseContext = ({nombre, edad, clave, rango = 'Capitan'}) => { //(usuario)
    console.log(nombre, clave);

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }
}

//Desestructuracion anidada
//const { nombreClave, anios, latlng:{lat, lng}} = retornaPersona( persona );

const { nombreClave, anios, latlng} = usseContext( persona );
const { lat, lng } = latlng;

console.log(nombreClave, anios, lat, lng)