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