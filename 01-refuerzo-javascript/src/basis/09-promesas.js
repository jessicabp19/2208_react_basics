//Son asincronas, primero se ejecuta todo lo sincrono, luego van las promesas.
//Callback

import { getHeroeById } from './basis/08-imp-exp';

/*const promesa = new Promise((resolve, reject) => {

    setTimeout( () => {
        const heroe = getHeroeById(2);
        resolve(heroe);
    }, 2000)
});

promesa.then( (heroe) => {
    console.log('Then de la promesa', heroe)
}).catch( err => console.warn(err));*/


const getHeroeByIdAsync = (id) => {

    return new Promise((resolve, reject) => {

        setTimeout( () => {

            const heroe = getHeroeById(id);
            if ( heroe ) {
                resolve(heroe);
            }else{
                reject('No se pudo encontrar el héroe');
            }

        }, 2000)
    });
}

getHeroeByIdAsync(30)
    //.then( heroe => console.log('Heroe', heroe))
    //.catch(err => console.warn(err))
    .then(console.log)
    .catch(console.warn)