import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer"

const init = () => {
    return JSON.parse( localStorage.getItem ('todos')) || [];
}

export const useTodo = () => {


    const [todos, dispatch] = useReducer( todoReducer , [], init)

    useEffect(() => { //Se dispara cuando el comp se monta y c/vez que los todos cambian
      localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handleNewTodo = (todo) => {
        console.log('newTodo')
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatch( action );
    }

    const handleDeleteTodo = ( id ) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        })
    }

    const handleToggleTodo = (id) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        })
    }

  return {
    todos,
    todosCount: todos.length,
    pendingTodosCount: todos.filter( todo => !todo.done ).length,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo
  }
}
