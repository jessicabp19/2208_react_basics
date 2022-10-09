import { render, screen  } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs'); //Crea un mock completo

describe('Tests in <GifGrid>', () => { 
    
    const category = 'The Good Doctor';

    test('should show loading', () => {
      
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render( <GifGrid category={ category } /> );
        //screen.debug();
        expect( screen.getByText(category) );
        expect( screen.getByText('Cargando ...') );

    });

    test('should show gif items', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'TheGoodDoctor1',
                url: 'https://localhost/tgd1.jpg'
            },
            {
                id: '123',
                title: 'TheGoodDoctor2',
                url: 'https://localhost/tgd2.jpg'
            },
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });
      
        render( <GifGrid category={category} /> );
        screen.debug();

        expect( screen.getAllByRole('img').length ).toBe(2);

    })
    
    

});