import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe('Test TodoItem', () => { 
    
    const todo = {
        id: 1,
        description: 'Piedra del Alma',
        done: false
    }

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach( () => jest.clearAllMocks() );

    test('should show pending Todo', () => { 
        
        render( 
            < TodoItem 
                todo = { todo } 
                onToggleTodo={onToggleTodoMock} 
                onDeleteTodo={onDeleteTodoMock} 
            /> 
        );

        //screen.debug();

        const liElement = screen.getByRole('listitem');
        expect( liElement.className ).toBe('list-group-item d-flex justify-content-between');

        const spanElement = screen.getByLabelText('span');
        expect( spanElement.className ).toContain('align-self-center'); //Bc a white space
        expect( spanElement.className ).not.toContain('text-decoration-line-through'); //Just to make sure

    });

    test('should show completed Todo', () => { 
        
        todo.done = true;
        render( 
            < TodoItem 
                todo = { todo } 
                onToggleTodo={onToggleTodoMock} 
                onDeleteTodo={onDeleteTodoMock} 
            /> 
        );

        //screen.debug();

        const spanElement = screen.getByLabelText('span');
        expect( spanElement.className ).toContain('text-decoration-line-through'); //Just to make sure

    });

    test('Span should call ToggleTodo onClick', () => { 

        //Solo debemos evaluar que se llame el metodo
        //No es trabajo de este componente evaluar si el todo regresa modificado

        render( 
            < TodoItem 
                todo = { todo } 
                onToggleTodo={onToggleTodoMock} 
                onDeleteTodo={onDeleteTodoMock} 
            /> 
        );

        const spanElement = screen.getByLabelText('span');
        fireEvent.click( spanElement );

        expect( onToggleTodoMock ).toHaveBeenCalledWith( todo.id );

    });

    test('Span should call ToggleTodo onClick', () => { 

        render( 
            < TodoItem 
                todo = { todo } 
                onToggleTodo={onToggleTodoMock} 
                onDeleteTodo={onDeleteTodoMock} 
            /> 
        );

        const buttonElement = screen.getByRole('button', { name: 'Delete'});
        fireEvent.click( buttonElement );

        expect( onDeleteTodoMock ).toHaveBeenCalledWith( todo.id );

    });

});