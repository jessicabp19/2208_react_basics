import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => { 
    
    test('getuser should return an object', () => { 
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };
        const user = getUser();

        expect( testUser ).toEqual( user );
    });

    test('getUsuarioActivo should return an object', () => { 
        const name = 'Jessica';
        const testUser = {
            uid: 'ABC567',
            username: name
        };
        const user = getUsuarioActivo( name );

        expect( testUser ).toStrictEqual( user );
    });

 });