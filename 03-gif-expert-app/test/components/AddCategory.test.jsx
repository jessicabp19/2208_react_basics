import { fireEvent, render, screen } from '@testing-library/react'
import { AddCategory } from '../../src/components/AddCategory';

describe('Test in <AddCategory />', () => {

  test('should change textbox value', () => {
    
    render( <AddCategory onNewCategory={ () => {} } /> );
    const input = screen.getByRole('textbox');

    fireEvent.input(input, { target: { value: 'Young Sheldon'}});

    expect( input.value ).toBe('Young Sheldon');

    screen.debug();

  });

  test('should call onNewCategory if there is an input value', () => {
    
    const inputValue    = 'Young Sheldon';
    const onNewCategory = jest.fn();

    render( <AddCategory onNewCategory={ onNewCategory } /> );

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form'); //aria-label="form"

    fireEvent.input(input, { target: { value: inputValue }});
    fireEvent.submit(form);
    //We could just test the function onSubmit,
    //but we need to test the behavior of the component itself
    screen.debug()

    expect(input.value).toBe('');

    expect( onNewCategory ).toHaveBeenCalled();
    expect( onNewCategory ).toHaveBeenCalledTimes(1);
    expect( onNewCategory ).toHaveBeenCalledWith(inputValue);
  });

  test('should not call onNewCategory if input is empty', () => { 
    
    const onNewCategory = jest.fn();

    render( <AddCategory onNewCategory={ onNewCategory } /> );

    const form = screen.getByRole('form');
    fireEvent.submit(form);

    expect( onNewCategory ).toHaveBeenCalledTimes(0);

  });
  
  
})
