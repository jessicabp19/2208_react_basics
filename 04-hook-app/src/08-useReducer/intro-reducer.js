//Como quiero que se encuentre la aplicación, o algún segmento/módulo de la aplicación
//Podemos tener un reducer para manejar cual es el filtro seleccionado u otro reducer para manejar cualquier otra parte del UI de mi app
const initialState = [{ 
    id: 1,
    todo: 'Recolectar la piedra del Alma',
    done: false,
}]

//Usualmente se utilizan los reducers cuando tengo un objeto elaborado y quiero hacer varios cambios al mismo

const todoReducer = ( state = initialState, action = {} ) => { //La acción le dice al reducer como quiero que cambie el estado

    if ( action.type === '[TODO] add todo' ) {
        return [...state, action.payload]
    }

    return state; 
}

let todos = todoReducer();

console.log(todos)

//Es una mutación al arreglo, mala práctica, no nos va a redibujar nada
// todos.push({
//     id: 2,
//     todo: 'Recolectar la piedra del poder',
//     done: false
// });

const newTodo = {
    id: 2,
    todo: 'Recolectar la piedra del poder',
    done: false
}

const addTodoAction = { //Tecnicamente podemos enviar la acción com querramos, pero hay un estandar
    type: '[TODO] add todo', //It's going to show in reduxDevTool
    payload: newTodo, //Si necesitamos cargar info
}

todos = todoReducer(initialState, addTodoAction);
console.log(todos);

