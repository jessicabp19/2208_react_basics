import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { useCounter } from "../../src/hooks/useCounter";
import { useFetch } from "../../src/hooks/useFetch"; 
//import { useFetch } from "../../src/hooks"; No al archivo de barril

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('tests in MultipleCustomHook', () => { 

    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement 
    });

    beforeEach( () => {
        jest.clearAllMocks();
    });


    test('should show default component', () => { 

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });
        
        render( <MultipleCustomHooks /> );

        expect( screen.getByText('Loading ...'));
        expect( screen.getByText('Breaking Bad Quotes') );

        const nextButton = screen.getByRole('button', { name: "Next Quote ⋙"});
        expect( nextButton.disable ).toBeTruthy;

        //screen.debug();

     });

     test('should show a quote', () => { 
        
        useFetch.mockReturnValue({
            data: [{ author: 'Jessica', quote: 'Si quieres cambiar el mundo, empieza por tender tu cama' }],
            isLoading: false,
            hasError: null
        });

        render( <MultipleCustomHooks /> );

        //screen.debug();

        expect( screen.getByText('Si quieres cambiar el mundo, empieza por tender tu cama')).toBeTruthy();
        expect( screen.getByText('Jessica')).toBeTruthy();

        const nextButton = screen.getByRole('button', { name: 'Next Quote ⋙'});
        expect( nextButton.disable ).toBeFalsy();

      });

      test('should call increment function', () => { 
        
        useFetch.mockReturnValue({
            data: [{ author: 'Jessica', quote: 'Si quieres cambiar el mundo, empieza por tender tu cama' }],
            isLoading: false,
            hasError: null
        });
        

        render( <MultipleCustomHooks /> );
        const nextButton = screen.getByRole('button', { name: 'Next Quote ⋙'});
        expect( nextButton.disable ).toBeFalsy();

        fireEvent.click( nextButton );

        expect( mockIncrement ).toHaveBeenCalled();

       });

});