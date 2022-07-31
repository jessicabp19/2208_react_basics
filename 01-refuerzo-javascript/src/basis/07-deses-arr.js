//Desestructuración de arreglos

const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [ , , p3 ] = personajes;
console.log(p3);


const retornaArreglo = () => {
    return ['ABC', 123];
}
const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);


const usseState = ( valor ) => {
    return [ valor, ()=>{console.log('Hola Mundo')} ];
}

const arr = usseState( 'Goku' );
arr[1]();

const [nombre, setNombre ] = usseState('Jessica');
console.log(nombre);
setNombre();