import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('Tests in useFetchGifs Hook', () => {
  
    test('should return the initial state', () => {

        //useFetchGifs(); //Doesn't work, a hook needs the react component lifecycle

        const { result } = renderHook( () => useFetchGifs('The Good Doctor') );
        const { images, isLoading } = result.current;

        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();

    });

    test('should return an image array and a false isLoading', async() => {
      
        const { result } = renderHook( () => useFetchGifs('The Good Doctor') );

        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0),
        );

        const { images, isLoading } = result.current;

        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();

        //This way, we can test any Hook
        //Hooks are tested based on their return params
    });
    
    

});
