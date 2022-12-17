import { render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";

describe('Test <LoginPage />', () => { 

    const user = {
        id: 1,
        name: 'jessuser'
    }

    test('should show component without user', () => { 
    
        render(
            <UserContext.Provider value={{user: null}}>
                <LoginPage />
            </UserContext.Provider>
        );
        
        const preTag = screen.getByLabelText('pre');
        expect( preTag.innerHTML ).toBe('null');

    });

    test('should show component without user', () => { 
    
        /**
         * Nosotros establecemos el valor del contexto
         * Y basado en el conexto el homePage debe lucir en cierta manera
         */

        render( 
            <UserContext.Provider value= {{ user }} >
                <LoginPage />
            </UserContext.Provider>
        );
        screen.debug();

        const preTag = screen.getByLabelText('pre');
        expect( preTag.innerHTML ).toContain( user.name );
        expect( preTag.innerHTML ).toContain( `${user.id}` );
        
    });

});