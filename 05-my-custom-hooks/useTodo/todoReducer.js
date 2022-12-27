
export const todoReducer = ( initialState = [], action) => {

    switch ( action.type ) {
        case '[TODO] Add Todo':
            console.log('Add', initialState, action)
            return [ ...initialState, action.payload ]
        
        case '[TODO] Remove Todo':
            //filter returns a new array, perfect!
            return initialState.filter( todo => todo.id !== action.payload )

        case '[TODO] Toggle Todo':
            return initialState.map( todo => {
                if ( todo.id === action.payload ){
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo;
            })

        default:
            return initialState;
    }


}