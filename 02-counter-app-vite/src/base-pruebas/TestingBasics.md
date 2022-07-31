# PRUEBAS

## Unitarias y de integración

- Unitarias: Enfocadas en pequeñas funcionalidades.
- Integración: Enfocadas en cómo reaccionan varias piezas en conjunto.

## Cáracteristicas de las pruebas
1. Fáciles de escribir
2. Dáciles de leer
3. Confiables
4. Rápidas
5. Princiaplmente unitarias

## AAA

### Arrange (Arreglar)
Preparamos el estado inicial
- Inicializamos variables
- Importaciones necesarias

### Act (Actuar)
Aplicamos acciones o estímulos al sijeto de pruebas
- Llamar métodos
- Simular clicks
- Realizar acciones sobre el paso anterior

### Assert (Afirmar)
Observar el comportamiento resultante
- Son los resultados esperados
- Ej: Que algo cambia, algo increment o bien que nada suceda

## Mitos

- Hacen que mi aplicación no tenga errores )La existencia de pruebas NO garantiza la inexistencia de errores)
- Las pruebas no pueden fallar (podemos hacer pruebas que arrojen falsos negativos o falsos positivos, también puede que algo funcione pero la prueba no funcionó o viceversa)
- Hacen más lenta mi aplicación (no es así, puesto que las pruebas corren directamente en la máquina de desarrollo, no llegan a producción)
- Pérdida de tiempo (no lo es, si probamos las cosas correctas)
- Hay que probar todo (A falta de tiempo se le da prioridad a la ruta crítica. Hay que ser eficientes)
