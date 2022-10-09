import { fireEvent, render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp";

describe('Tests in <GifExpertApp />', () => {

    //AddCategory and GifGrid were already tested
  
    test('should change textbox value', () => {
        
        render( <GifExpertApp /> );
        
        const input = screen.getByRole('textbox');
      
        fireEvent.input(input, { target: { value: 'REACT'} } );

        expect( input.value ).toBe('REACT');

        //screen.debug();

    });
    
    test('should submit form & add new category', () => {
      
        const inputValue = 'REACT';
        
        render( <GifExpertApp /> );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        
        fireEvent.input(input, { target: { value: inputValue }});
        fireEvent.submit(form);
        
        const h3 = screen.getAllByTestId('h3'); //<h3 data-testid='h3'> {category} </h3>
        const newCat = screen.getByText(inputValue);
        //screen.debug();

        expect(input.value).toBe('');
        expect( h3.length ).toBe(2)
        expect( newCat ).toBeTruthy();
        
        //A worker process has failed to exit gracefully and has been force exited?
    });
    
    test('should not add repeted categories', () => {

        render( <GifExpertApp /> );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: "Grey's Anatomy" }});
        fireEvent.submit(form);

        const h3 = screen.getAllByTestId('h3');
        // screen.debug();
        
        expect( h3.length ).toBe(1);
      
    });    

});
