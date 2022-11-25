
import { useTodo } from "../hooks/useTodo";
import { TodoList, TodoAdd } from "./"


export const TodoApp = () => {

    const { todos, todosCount, pendingTodosCount, handleNewTodo, handleDeleteTodo, handleToggleTodo } = useTodo();
    

  return (
    <>
        <h1> TodoApp: { todosCount } , <small>pendientes: { pendingTodosCount } </small> </h1>
        <hr />

        <div className="row">   {/* 12 row positions */}

            <div className="col-7">

                <TodoList 
                    todos={todos} 
                    onDeleteTodo={ handleDeleteTodo } 
                    onToggleTodo={ handleToggleTodo } 
                />

            </div>

            <div className="col-5">
                <h4>Add TODO</h4>
                <hr />

                <TodoAdd onNewTodo={ handleNewTodo } />

            </div>

        </div>
    </>
  )
}
