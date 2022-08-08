import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Tests in <CounterApp />', () => {

    const value = 10;

    test('should match snapshot', () => { 
        
        const { container  } = render( <CounterApp value={value} /> );
        expect( container ).toMatchSnapshot();

    });

     test('should show initial value of 100', () => { 
        
        render( <CounterApp value={100} /> );
        expect( screen.getByText(100) ).toBeTruthy();
        // expect( screen.getByRole('heading', { level: 2 }).innerHTML ).toContain('100');
    });

      test('should increment with +1 button', () => {
        
        render( <CounterApp  value={ value } /> );
        fireEvent.click( screen.getByText('+1') );
        expect( screen.getByText('11') ).toBeTruthy();

    });

      test('should decrease with -1 button', () => {
        render( <CounterApp value={ value } /> );
        fireEvent.click( screen.getByText('-1') );
        expect( screen.getByText('9') ).toBeTruthy();
        
    });
    
    test('should reset the value', () => {
        render( <CounterApp value={355} /> );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        screen.debug(); //Just to check the status of our rendered component

        // fireEvent.click( screen.getByText('Reset') ); //Easy but vague
        fireEvent.click( screen.getByRole('button', { name: 'btn-reset' }) );
        
        expect( screen.getByText( 355 ) ).toBeTruthy();

    });
      
});
