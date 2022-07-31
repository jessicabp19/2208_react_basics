import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Pruebas en 08-imp-exp', () => {
  
    test('getHeroeById should return an hero by Id', () => {
      
        const id=1;
        const hero = getHeroeById( id );

        expect( hero ).toEqual( { id: 1, name: 'Batman', owner: 'DC' })
    })

    test('getHeroeById should return undefined if ID does not exist', () => {
      
        const id=100;
        const hero = getHeroeById( id );
        
        expect( hero ).toBe( undefined );
        expect( hero ).toBeFalsy();
    })

    test('getHeroesByOwner should return an array with DC Heroes', () => {
      
        const owner = 'DC';
        const array = getHeroesByOwner(owner);
        
        expect( array.length ).toBe( 3 );
        expect( array ).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
          ]);
          expect( array ).toEqual( array.filter( (heroe) => heroe.owner === owner));
    })

    test('getHeroesByOwner should return an array with Marvel Heroes', () => {
      
        const owner = 'Marvel';
        const array = getHeroesByOwner(owner);
        
        expect( array.length ).toBe( 2 );
        
        expect( array ).toEqual( array.filter( (heroe) => heroe.owner === owner));
    
    })
    
})
