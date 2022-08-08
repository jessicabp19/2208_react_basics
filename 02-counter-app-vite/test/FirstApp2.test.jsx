import { render, screen } from '@testing-library/react'; //screen es la rep de nuestro comp rend
import { FirstApp } from "../src/FirstApp";

describe('Tests in <FirstApp />', () => {

    const title     = 'Hola, Soy Jessica';
    const subtitle  = 'Soy un subtitulo';

    test('should match the snapshot', () => {
        
        const { container } = render( <FirstApp title={title} /> );
        expect( container ).toMatchSnapshot(); 

    });
    
    test('should show the msj "Hola, Soy Jessica"', () => {

        render( <FirstApp title={ title } /> );
        expect( screen.getByText(title) ).toBeTruthy();
        // screen.debug();

    });
    
    test('should show the title in h1 tag', () => { 
        
        render( <FirstApp title={title} /> );
        expect( screen.getByRole('heading', { level:1 }).innerHTML ).toContain( title ) ;

     });

     test('should show the subtitle sent by props', () => { 
        
        render( 
            <FirstApp title={ title } subtitle={subtitle} /> 
        );
        expect( screen.getAllByText( subtitle ).length ).toBe(1);//2
      })

})
