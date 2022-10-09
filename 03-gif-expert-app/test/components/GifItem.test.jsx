import { GifItem } from "../../src/components/GifItem";
import { render, screen } from "@testing-library/react";

describe('Tests in <GifItem />', () => {

    const title = 'Grey\'s Anatomy';
    const url   = 'https://greysanatomy/serie';

    test('Should match snapshot', () => {
        
        const { container } = render( <GifItem title={title} url={url} /> );
        expect( container ).toMatchSnapshot();

    });

    test('Should show the correct image and url', () => {

        render( <GifItem title={title} url={url} /> );
        // screen.debug();
        // expect( screen.getByRole('img').src ).toBe( url );
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( title );
        
    });

    test('Should verify the title', () => {

        render( <GifItem title={title} url={url} /> );
        expect( screen.getByText( title ) ).toBeTruthy();

    });

});