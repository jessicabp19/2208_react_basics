import { renderHook } from "@testing-library/react"
import { act } from "react-dom/test-utils";
import { useForm } from "../../src/hooks/useForm";

describe('tests in useForm', () => { 

    const initialForm = {
        name: 'Jessica',
        email: 'jessicaboton@gmail.com'
    }
    
    test('should return default values', () => { 

        const { result } = renderHook( () => useForm(initialForm) );

        expect( result.current ).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any( Function ),
            onResetForm: expect.any( Function )
        });

     });


     test('should change form name', () => { 
        
        const newValue = 'Elizabeth';
        const { result } = renderHook( () => useForm(initialForm) );

        act( () => {
            result.current.onInputChange({target: {name: 'name', value: 'Elizabeth'}});
        });

        expect( result.current ).toEqual({
            name: newValue,
            email: initialForm.email,
            formState: {
                name: newValue,
                email: initialForm.email
            },
            onInputChange: expect.any( Function ),
            onResetForm: expect.any( Function )
        });

        // Or ...
        // expect( result.current.name ).toBe( newValue );
        // expect( result.current.formState.name ).toBe( newValue );

      });


      test('should reset the form', () => { 
        
        const newValue = 'Elizabeth';
        const { result } = renderHook( () => useForm(initialForm) );
        const { onInputChange, onResetForm } = result.current;

        act( () => {
            onInputChange({ target: { name: 'name', value: newValue}})
            onResetForm();
        });

        expect( result.current.name ).toBe( initialForm.name );
        expect( result.current.formState.name ).toBe( initialForm.name );

       });
    
 })