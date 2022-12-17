import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { HomePage } from "../../src/09-useContext/HomePage";

describe('Test <HomePage />', () => {
    
    const user = {"email": "eli@google.com", "id": 123, "name": "Elizabeth"}
    
    test('should show component without user', () => { 
    
        /**
         * Nosotros establecemos el valor del contexto
         * Y basado en el conexto el homePage debe lucir en cierta manera
         */

        render( 
            <UserContext.Provider value= {{user: null}} >
                <HomePage />
            </UserContext.Provider>
        );
        //screen.debug();

        const preTag = screen.getByLabelText('pre');
        expect( preTag.innerHTML ).toBe( 'null' )
        
    });

    test('should show component without user', () => { 
    
        /**
         * Nosotros establecemos el valor del contexto
         * Y basado en el conexto el homePage debe lucir en cierta manera
         */

        render( 
            <UserContext.Provider value= {{ user }} >
                <HomePage />
            </UserContext.Provider>
        );
        //screen.debug();

        const preTag = screen.getByLabelText('pre');
        expect( preTag.innerHTML ).toContain( user.name );
        expect( preTag.innerHTML ).toContain( `${user.id}` );
        
    });

    test('should called setUser when button get clicked', () => { 
    
        const serUserMock = jest.fn()
        render(
            <UserContext.Provider value={{user, setUser: serUserMock }}>
                <HomePage />
            </UserContext.Provider>
        );

        screen.debug();

        const setButton = screen.getByRole('button', { name: 'Establecer usuario' });

        fireEvent.click( setButton );

        expect( serUserMock ).toHaveBeenCalled();
        expect( serUserMock ).toHaveBeenCalledWith(user);
        
    });

 });