import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe('Tests in todoReducer', () => { 

    const initialstate = [{
        id: 1,
        description: 'Demo todo',
        done: false
    }];
   
    test('should return initial state', () => { 
       
        const newState = todoReducer(initialstate, {})

        expect( newState ).toBe( initialstate );

    });

    test('should add a todo', () => { 
    
        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                description: 'New todo # 2',
                done: false
            }
        }

        const newState = todoReducer( initialstate, action);
        expect( newState.length ).toBe( 2 );
        expect( newState ).toContain( action.payload );

    });


    test('should delete a todo', () => { 
    
        const action = {
            type: '[TODO] Remove Todo',
            payload: 1
        }
        const newState = todoReducer( initialstate, action );

        expect( newState.length ).toBe(0);

    });

    test('should toggle todo', () => {

        const action = {
            type: '[TODO] Toggle Todo',
            payload: 1
        }

        const newState = todoReducer( initialstate, action );
        expect( newState[0].done ).toBe( true);

        const newState2 = todoReducer( newState, action );
        expect( newState2[0].done ).toBeFalsy;
    });
    
});