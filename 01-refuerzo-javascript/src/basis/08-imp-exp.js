//Shortcut1 typing 'imp' + tab
//Shortcut2 typing 'constName' + tab

import heroes, { owners } from '../data/heroes';

console.log(owners)

//Find, función como arg (callback)
const getHeroeByIdLargo = (id) => {
    return heroes.find((heroe) => heroe.id === id);
    /*return heroes.find( (heroe) => {
        if (heroe.id === id){
            return true;
        }else{
            return false;
        }
    });*/
}
export const getHeroeById = (id) => heroes.find( heroe => heroe.id === id);
//console.log( getHeroeById(2) );


export const getHeroesByOwner = (owner) => heroes.filter(heroe => heroe.owner === owner);
//console.log( getHeroesByOwner('DC'));
