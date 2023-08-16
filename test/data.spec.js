import { obtenerPeliculas } from '../src/data.js';
import { ghibli } from "./mock-ghibli.js";
// TODO: Datos de prueba: simular objeto con data
//*Data películas:
//
const DATA_PRUEBA_PELICULAS = ghibli

// TODO: Tests
// Test para la función obtenerPeliculas
describe("Función obtenerPeliculas()", () => {
  it("Debería devolver un arreglo de películas", () => {
    //* Configuración (Setup): Preparamos el entorno necesario para la prueba
    //en este caso no es necesario pues esta función no tiene parámetros de input ()

    //* Acción (Action): Aquí realizamos la acción que queremos probar, 
    //en este caso, llamamos a la función 
    const resultadoObtenido = obtenerPeliculas(DATA_PRUEBA_PELICULAS);

    //* Verificación (Verification): Comparamos el resultado obtenido con el esperado
    // Usamos "expect" para verificar si la función devuelve un arreglo de películas
    expect(Array.isArray(resultadoObtenido)).toBe(true);
  });
});

// 