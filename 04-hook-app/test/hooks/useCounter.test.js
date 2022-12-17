import { act, renderHook } from '@testing-library/react';
import { useCounter } from "../../src/hooks/useCounter";

describe('Tests in useCounter', () => { 
    
    test('should return default values', () => { 
        
        const { result } = renderHook( () => useCounter() );
        const { counter, increment, decrement, reset } = result.current;

        expect( counter ).toBe(10); 
        expect( decrement ).toEqual( expect.any( Function ) );
        expect( increment ).toEqual( expect.any( Function ) );
        expect( reset ).toEqual( expect.any(Function) );
     });

     test('should return counter with value 100', () => { 
        
        const { result } = renderHook( () => useCounter(100) );
        const { counter } = result.current;

        expect( counter ).toBe(100);

      });

      test('should increment counter', () => { 
        
        const { result } = renderHook( () => useCounter() );
        const { counter, increment } = result.current;

        act( () => {
            increment();
            increment(2);
        });

        expect( result.current.counter ).toBe(13); 

       });

       test('should decrement counter', () => { 
        
        const { result } = renderHook( () => useCounter() );
        const { counter, decrement } = result.current;

        act( () => {
            decrement();
            decrement(2);
        });

        expect( result.current.counter ).toBe(7); 

       });

       test('should reset counter', () => { 
        
        const { result } = renderHook( () => useCounter() );
        const { counter, decrement, reset } = result.current;

        act( () => {
            decrement();
            decrement(2);
            reset();
        });

        expect( result.current.counter ).toBe(10); 

       });

 });