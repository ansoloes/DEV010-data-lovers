/*¨ Descripción:
  data.js contiene el import de data Ghibli, funciones para obtener películas y filtros
*/

import data from "./data/ghibli/ghibli.js"

// funciones para obtener películas y filtros
export function obtenerPeliculas() {
  return data.films;
}

export function obtenerPeliculasPorTitulo(title) {
  return data.films.find((pelicula) => pelicula.title === title);
}

// * Esto es una prueba de caja blanca
// ! Si titulo es vacio, retorna null
// ! Validar que la lista de películas sea un arreglo
// ! Si yo tengo una película llamada x y le digo a la función que me la devuelva, debe retornar dicha película