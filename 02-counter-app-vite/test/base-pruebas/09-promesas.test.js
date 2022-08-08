import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas en 09-promesas', () => {
  
    test('should return an hero', ( done ) => {
        const id = 1;
        getHeroeByIdAsync(id)
            .then( hero => {

                expect( hero ).toEqual( {
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                } );
                done();
            })
        
    })

    test('should return an error', ( done ) => {
        const id = 100;
        getHeroeByIdAsync(id)
            .catch( error => {
                expect( error ).toBe('No se pudo encontrar el héroe' + id)
                done();
            })
        
    })
    
})
