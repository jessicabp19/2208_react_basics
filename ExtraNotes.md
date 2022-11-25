# Section 10
Todo lo cubierto en la sección puede hacerse con el useState, pero no es el objetivo.
En teoría hacen lo mismo, pero el useReducer se utiliza cuando hay muchas cosas que pueden modificar el state de la aplicación

Si comprendemos el tema de Reducer, el 70% de reduz está cubierto

¿Qué es un Reducer?
Es una funcion común y corriente (incluso más simple, ej: No puede ser asincrona)
Debe ser una función pura (todo lo que realice debe resolverse de manera interna)
Debe de retornar siempre un nuevo estado ( ej: setValor(valor + 1 ))
Usualmente sólo recibe dos argumentos (el valor inicial, initial state, y la acción a ejecutar)

1. const commonFunc = (argstate, action) => {

}

2. No debe de tener efectos secundarias (no llamar a otras funciones)

3. Debe de retornar siempre un estado nuevo

4. No debe de llamar localStorage o sessionStorage (son sincronas, pero sería un efecto secundario. Pueden fallar)

5. No debe de requerir más que una acción que puede tener un argumento/s.

6. const initialTodos = [{
    id: 1,
    todo: 'Comprar pan',
    done: false
}];

const todoReducer = ( state = initialTodos, action ) => {
    return state;
}

7. let todos = todoReducen();
console.log(todos);

[{...}]
0: {id: 1, todo: "Comprar pan", done: false}

8. ¿Para que hacer todo esto? La idea es tener controlado en un solo lugar todas las acciones que modifican el state de la app
De esta forma podemos ver a nivel general todas las posibles modificaciones que nuestra aplicación tiene o puede realizar

Mantenimiento a una aplicación que ustedes no crearon
Esa aplicación dispara acciones por cualquier lado, en una pantalla se disparan usuarios, en otra se modifican cantidades etc
Si tiene 1 o varios reducers, es ahí donde estan las acciones de mi aplicación
Simplemente iria a ver esos reducers y ahí tiene que estar la lógica de la manipulación de c/u de las posibles acciones que esa aplicación puede realizar

9. Ciclo de vida de un reducer - Funcionamiento
Al iniciar la aplicación tenemos un estado inicial
State
->
Página o vista
->
action
-> 
Reducer

La pagina no habla directamente con el state, por que lo estaría mutando y eso no se hace
La pagina va a crear una acción, agregar un nuevo TODO
Esa acción se envía al reducer
El reducer tiene todo el mapa de las acciones que puede realizar
Si no tiene alguno, solo regresa el estado actual
Ahora los procedimientos para agregar, borrar, actualizar, etc
Se ejecuta el procedimiento, ese modifica el state. Al cambiar, notifica a la vista que hay un nuevo todo o un error
La idea es que toda la información fluya en una sola vía y sobre todo que lo haga de manera controlada

Redux: un procedimiento para hacer peticiones asincronas, pero estas regresarían al reducer y lo demás quedaría igual.




