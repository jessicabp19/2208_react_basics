import { FirstApp } from "../src/FirstApp";
import { render } from '@testing-library/react';

describe('Tests in <FirstApp />', () => {

    //Snapshot test should be made once the compement it´s not going to be modified any longer (or at least not too much)
    //It helps us to make sure, the component will stay the same for a period of time
  
    // test('should make match with the snapshot', () => {

    //     const title = 'Hello There!';
    //     const { container } = render( <FirstApp title={ title } /> )

    //     expect( container ).toMatchSnapshot();

    // });

    test('should show the title in a h1 tag', () => {
      
        const title = 'Hello There!';
        // { } Useful functions to quickly analyze the DOM
        const { container, getByText, getByTestId } = render( <FirstApp title={ title } /> )
        expect( getByText( title) ).toBeTruthy();

        // expect( h1.innerHTML ).toContain( title );
        // const h1 = container.querySelector('h1');

        expect( getByTestId('test-title').innerHTML ).toBe( title );

    });

    test('should show the subtitle sent by props', () => { 
        const title = 'Hello There!';
        const subtitle = 'Soy un subtitulo';
        const { getAllByText } = render( 
            <FirstApp title={ title } subtitle={subtitle} /> 
        );
        expect( getAllByText( subtitle).length ).toBe(1);//2
     })
    

    

})
