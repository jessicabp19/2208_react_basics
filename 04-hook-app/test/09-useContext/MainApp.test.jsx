import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';
import { MainApp } from "../../src/09-useContext/MainApp";

describe('Tests in <MainApp />', () => {
  
    test('should show "Home Page"', () => {
      
        render( 
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>
        );

        //screen.debug();
        expect( screen.getByText('HomePage') ).toBeTruthy()
    
    });
    

    test('should show LoginPage', () => {
      
        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp />
            </MemoryRouter>
        );

        expect( screen.getByText( 'LoginPage' )).toBeTruthy()
    });
    
});
